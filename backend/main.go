package main

import (
	"embed"
	"io/fs"
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"

	_ "my-app/migrations"
)

// pbPublicDir embeds the built frontend assets at compile time.
// The Makefile's build-frontend target copies the Vite build output here
// before `go build` runs.
//
//go:embed all:pb_public
var pbPublicDir embed.FS

// distFS exposes the embedded files without the "pb_public" path prefix.
var distFS, _ = fs.Sub(pbPublicDir, "pb_public")

func main() {
	app := pocketbase.New()

	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		// auto-generate a migration file whenever collections change via the Dashboard
		// (enabled only in "go run" dev mode, not in the compiled binary)
		Automigrate: true,
	})

	// Custom routes and hooks go here
	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		// se.Router.GET("/api/custom", handleCustom)

		// Serve the embedded frontend build; unmatched paths fall back to
		// index.html so the SPA's client-side router can handle them.
		se.Router.GET("/{path...}", apis.Static(distFS, true))

		return se.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
