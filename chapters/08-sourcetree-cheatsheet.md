# Sourcetreeチートシート（クリック場所早見表）

## 1. この章のゴール
- 「今どこを触ればいいか」が一瞬で分かる（迷ったらここに戻る）。
- 課題提出の一連の流れ（ブランチ→コミット→プッシュ→PR→プル）を、短い手順で思い出せる。

### 表示が違っても大丈夫（英語/日本語の読み替え）
Sourcetree / GitHub は表示言語によってボタン名が変わります。この教材は英語表記を例にしています。  
日本語表示の人は、だいたい次の対応で読み替えてください。

**Sourcetree（例）**
- `File Status` → 「ファイルステータス」
- `History` → 「履歴」
- `Commit` → 「コミット」
- `Branch` → 「ブランチ」
- `Merge` → 「マージ」
- `Fetch` → 「フェッチ」
- `Pull` → 「プル」
- `Push` → 「プッシュ」
- `Remotes` → 「リモート」

**GitHub（例）**
- `Pull requests` → 「プルリクエスト」
- `New pull request` → 「新しいプルリクエスト」
- `Files changed` → 「ファイルの変更」
- `Settings` → 「設定」

### 画面の見方
- **左サイドバー**：リポジトリ一覧／`Branches`（ブランチ）／`Remotes`（リモート）があります
- **上部ツールバー**：`Pull / Push / Branch / Merge / Commit` など「操作ボタン」が並びます
- **中央のタブ**：`File Status`（変更とコミット）／`History`（履歴）をよく使います
- **迷ったら順番**：1) 今いるブランチ → 2) `File Status` の `Unstaged/Staged` → 3) `Pull/Push` のどっちが必要か

## 2. まず最初に見る場所（事故防止の最重要ポイント）
### 2-1. 今いるブランチ（作業台）
- Sourcetree 左のブランチ一覧で、**太字 / チェックマーク** のものが「今いるブランチ」です
- 課題作業中は基本 `feature/...` にいるのが正解です

目印：左サイドバーの `Branches` に並ぶブランチ名のうち、太字/チェックの行が「今いるブランチ」です。

### 2-2. 変更の状態（未ステージ／ステージ済み）
- `File Status` を開く
- `Unstaged files`：まだコミットに入っていない変更
- `Staged files`：コミットに入る予定の変更（最終確認ここ！）

目印：上部タブ `File Status` を開くと `Unstaged files / Staged files` が見えます。

## 3. 課題提出の5ステップ（最短で思い出す）
1. `develop` をチェックアウト → `Pull`（最新化）
2. `Branch` → `feature/課題名` を作る（例：`feature/task1`）
3. 編集→保存 → `File Status` → ステージング → `Commit`
4. `Push`（`feature/...` を GitHub に送る）
5. GitHub で `feature/...` → `develop` の PR を作成 → マージ後にローカル `develop` を `Pull`

詳しい手順：第2章（提出サイクル）と第3章（コミット/プッシュ）を見ればOKです。

## 4. やりたいこと別：どこをクリック？
### 4-1. 最新化したい（まずはこれ）
- `develop` をチェックアウト → 上部の `Pull`

### 4-2. 作業ブランチを作りたい
- 上部の `Branch`

### 4-3. 変更をコミットしたい
- `File Status` → `Stage` → `Commit`

### 4-4. GitHub に送る（提出の前提）
- 上部の `Push`

### 4-5. 履歴を見たい（何をしたか確認したい）
- `History`（履歴）タブ

### 4-6. 間違ったコミットを安全に取り消したい（履歴は消さない）
- `History` → 対象コミットを右クリック → `Reverse commit` / `Revert`

### 4-7. コンフリクトが起きた（赤い表示が出た）
- `File Status` の `Conflicts` を確認 → `Resolve Conflicts`（詳細：第6章）

### 4-8. コミットできない（初回：名前/メール設定）
初回だけ、コミットに「名前」と「メールアドレス」が必要です。未設定だとコミットが失敗します。

- Sourcetree の `Preferences` / `Options`
- `Default user information` / `ユーザー情報` のような項目で
  - `Name`（名前）
  - `Email`（メール）
  を設定する

※ 迷ったら第1章（環境構築）の「初期設定」セクションに戻ってOKです。

### 4-9. Pushが拒否された（先にPullが必要）
誰か（または自分の別PC）が先に更新していると、プッシュが「拒否」されることがあります。落ち着いてこれだけ。

1. 今いるブランチ（例：`feature/task1`）をチェックアウト
2. `Pull`（必要ならコンフリクト解決）
3. もう一度 `Push`

## 5. GitHub（Web）でよく使う場所
- PR を作る：`Pull requests` → `New pull request`（base=`develop`、compare=`feature/...`）
- 差分を見る：PR の `Files changed`
- ブランチ一覧：`Code` タブ → ブランチ切り替えドロップダウン

目印：GitHub の上部メニューに `Pull requests` があり、`New pull request` ボタンから作成できます。

## 6. 相談テンプレ（最短で助けてもらう）
AIは今開いているページを自動で把握しています。状況だけ伝えればOKです。

```md
目的：（例）feature/task1をdevelopへPR提出したい
今いるブランチ：（Sourcetreeで太字/チェックのブランチ名）
見ている画面：File Status / History / Push / Pull / Branch / GitHub PR
起きていること：（例）Commitできない / Pushで失敗 / featureが見えない
エラー全文：（あればそのまま）
```

### 6-1. 具体例（このまま質問してOK）
- 「`File Status` で `Unstaged files` に（___）が出てるけど、`Staged files` は空。コミットまでのクリック順を教えて」
- 「`Push` 画面で `feature/task1` を送りたい。どこにチェックを入れる？」
- 「GitHub の PR 画面で base/compare が `base=___` / `compare=___` になってる。正しい？」
- 「`History` の右クリックで取り消したい。`Revert` ってどれ？」

※ パスワードやトークンは絶対に共有しないでください。

---

## 完了記録

この章には提出課題はありません。
チートシートを確認したら、スプレッドシートに **完了日** のみ記入してください。
