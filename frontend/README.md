
## 構成
### frontend
src/utils
- UIに関係しない汎用ロジック、 自分で書いた小さなヘルパー関数の置き場。可能であれば、同じ入力には必ず同じ出力を返し副作用のない関数（＝純粋関数）をおくことが好ましい。
- SvelteKitではlibが使われるがreactではutilsが使われる。
- JSXをおかず拡張子は、JSまたはTSになるはず。

src/components/
- 再利用可能なUIパーツ。特定のページに依存しないもの：Button.jsx, Modal.jsx, Avatar.jsx

src/pages/（または views/）
- ルートに対応する画面単位のコンポーネント。
- Next.js/SvelteKitなどファイルベースルーティングのフレームワークではフレームワーク側が管理するので自分で作らないことも多い

src/auth
- 認証関連のコンポーネント、関数置き場。LoginForm.jsx、useAuth.js、authApi.js

src/data
- 静的データ置き場

## Usage

```bash
$ npm install # or pnpm install or yarn install
```


packages
- pico


