# 引用カード箱 (QuoteBox)

## 目的
- 本やブログの著者の発言を抜き書きして保存するための引用カード箱を作成する。
- 情報カード箱として作っているため、汎用的な用途に使えるが、収集する目的と内容は独立していることが多いので、汎用的なカード箱にする必要はなく、引用カード箱として作ることにした。
- Linkdingがドキュメントをコレクションするが、Quoteboxは、テキストをコレクションするような役割分担を考えている。

## 機能
- 興味深い文章を、テキスト、著者、ノート、出典のフィールドに分けて保存するための入力フォーム
- タグによる絞り込み検索とテキストとノートの全文検索ボックス
- ノートの編集機能
- タグの編集機能

## 設計

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
- “情報カード - Wikipedia”. ja.wikipedia.org, [https://ja.wikipedia.org/wiki/情報カード](https://ja.wikipedia.org/wiki/情報カード), (Accessed 2026-06-30)
- “カード型データベース - Wikipedia”. ja.wikipedia.org, [https://ja.wikipedia.org/wiki/カード型データベース](https://ja.wikipedia.org/wiki/カード型データベース), (Accessed 2026-06-30)
---
参考：
- https://github.com/TomaszSkrzyp/good-game
- https://github.com/swerve731/go-solid-todo-app/tree/main/frontend
- https://github.com/OpenListTeam/OpenList-Frontend/tree/main/src
- https://github.com/H3rmt/FileSharing
- https://github.com/PeterHagane/solid-pocketbase-boilerplate
- https://github.com/kevinganthy/poc-pocketbase-solidjs/tree/main/front




