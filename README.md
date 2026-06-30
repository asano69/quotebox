## 設計
### 
記録するもの:内容 タグ(json型)


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

---
参考：
- “インデックスカード - Wikipedia”. en.wikipedia.org, [https://en.wikipedia.org/wiki/Index_card](https://en.wikipedia.org/wiki/Index_card), (Accessed 2026-06-30)
- “情報カード - Wikipedia”. ja.wikipedia.org, [https://ja.wikipedia.org/wiki/%E6%83%85%E5%A0%B1%E3%82%AB%E3%83%BC%E3%83%89](https://ja.wikipedia.org/wiki/%25E6%2583%2585%25E5%25A0%25B1%25E3%2582%25AB%25E3%2583%25BC%25E3%2583%2589), (Accessed 2026-06-30)
- “カード型データベース - Wikipedia”. ja.wikipedia.org, [https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E5%9E%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9](https://ja.wikipedia.org/wiki/%25E3%2582%25AB%25E3%2583%25BC%25E3%2583%2589%25E5%259E%258B%25E3%2583%2587%25E3%2583%25BC%25E3%2582%25BF%25E3%2583%2599%25E3%2583%25BC%25E3%2582%25B9), (Accessed 2026-06-30)

---
参考：
- https://github.com/TomaszSkrzyp/good-game
- https://github.com/swerve731/go-solid-todo-app/tree/main/frontend
- https://github.com/OpenListTeam/OpenList-Frontend/tree/main/src
- https://github.com/H3rmt/FileSharing
- https://github.com/PeterHagane/solid-pocketbase-boilerplate
- https://github.com/kevinganthy/poc-pocketbase-solidjs/tree/main/front




