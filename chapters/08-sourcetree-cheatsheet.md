# 08 Sourcetreeチートシート（クリック場所早見表）

## 1. この章のゴール
- 「今どこを触ればいいか」が一瞬で分かる（迷ったらここに戻る）。
- 課題提出の一連の流れ（ブランチ→コミット→プッシュ→PR→プル）を、短い手順で思い出せる。

## 2. まず最初に見る場所（事故防止の最重要ポイント）
### 2-1. 今いるブランチ（作業台）
- Sourcetree 左のブランチ一覧で、**太字 / チェックマーク** のものが「今いるブランチ」です
- 課題作業中は基本 `feature/...` にいるのが正解です

[ここにSourcetreeの「現在のブランチが分かる場所」のスクリーンショットを挿入]

### 2-2. 変更の状態（未ステージ／ステージ済み）
- `File Status` を開く
- `Unstaged files`：まだコミットに入っていない変更
- `Staged files`：コミットに入る予定の変更（最終確認ここ！）

[ここにSourcetreeの「File Status（Unstaged/Staged）」画面のスクリーンショットを挿入]

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

## 5. GitHub（Web）でよく使う場所
- PR を作る：`Pull requests` → `New pull request`（base=`develop`、compare=`feature/...`）
- 差分を見る：PR の `Files changed`
- ブランチ一覧：`Code` タブ → ブランチ切り替えドロップダウン

[ここにGitHubの「Pull requests」画面のスクリーンショットを挿入]

## 6. 相談テンプレ（最短で助けてもらう）
- 目的：何をしたい？（例：`feature/task1` を `develop` にPRしたい）
- 今いるブランチ：`main/develop/feature/...`
- どこで詰まった：Sourcetree / GitHub / VS Code
- エラー文：全文（スクショでもOK）
- 直前にやった操作：クリックしたボタン名を順番に

※ SSH の秘密鍵・トークン・パスワードは絶対に共有しないでください。
