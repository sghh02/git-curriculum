# トラブルシューティング＆クイックリファレンス

> この章は「困ったとき」と「操作を忘れたとき」に戻ってくるリファレンスです。

## 1. この章のゴール

- 詰まったときに、落ち着いて原因を切り分けられる
- よくあるトラブルを自力で立て直せる
- 「どこをクリックするか」を素早く思い出せる

---

## Part 1: トラブルシューティング

### まず最初に見る3点セット（1分でできる）

1. **今いるブランチ**：Sourcetree 左の太字/チェックのもの
2. **未コミットの変更**：`File Status` に `Unstaged/Staged` ファイルがあるか
3. **エラー文の全文**：省略せずそのまま控える

### `main` で作業してしまった

**まだコミットしていない場合**：
1. `Branch` をクリック → `feature/課題名` で新規作成（`Checkout new branch` ON）
2. そのまま通常通りコミット → プッシュ

**コミットしてしまった場合**：
1. `main` を右クリック → `Branch...` → `backup/main-mistake` で退避
2. そこから `feature/課題名` を作って続行
3. `main` の復旧はメンターに相談

### コミットできない

| 症状 | 対処 |
|------|------|
| `Please tell me who you are` | Sourcetree → `Preferences` → `Default user information` で Name/Email を設定 |
| `Staged files` が空 | 先にステージングする |

### プッシュできない（認証エラー）

よくある表示：`Permission denied` / `Authentication failed` / `403`

1. Sourcetree の `Preferences` → `Accounts` で GitHub にログインしているか確認
2. GitHub の `Code` → `HTTPS` の URL を使っているか確認
3. それでもダメなら Sourcetree を再起動してログインし直す

### プッシュが拒否された（non-fast-forward）

「GitHub 側のほうが新しい」状態です。

1. 今いるブランチをチェックアウト
2. `Pull`（コンフリクトが出たら第6章の手順で解決）
3. もう一度 `Push`

### 初回 Push で「upstream が無い」と言われた

1. 今いるブランチが `feature/...` か確認
2. `Push` を開く → `feature/...` にチェック → `Push`
3. `Track / Set upstream` があれば ON

### PR が作れない / feature が GitHub に見えない

- `feature/課題名` を Sourcetree で `Push` していない可能性が高い
- Sourcetree で `feature/...` をチェックアウト → `Push`

---

## Part 2: クイックリファレンス

### 表示の読み替え（英語 / 日本語）

| 英語 | 日本語 |
|------|--------|
| `File Status` | ファイルステータス |
| `History` | 履歴 |
| `Commit` | コミット |
| `Branch` | ブランチ |
| `Merge` | マージ |
| `Pull` / `Push` | プル / プッシュ |
| `Remotes` | リモート |

### Sourcetree の画面構成

- **左サイドバー**：`Branches`（ブランチ）/ `Remotes`（リモート）
- **上部ツールバー**：`Pull` / `Push` / `Branch` / `Merge` / `Commit`
- **中央タブ**：`File Status`（変更とコミット）/ `History`（履歴）

### やりたいこと別：どこをクリック？

| やりたいこと | 操作 |
|-------------|------|
| 最新化 | `develop` チェックアウト → `Pull` |
| ブランチを作る | `Branch` |
| コミット | `File Status` → `Stage` → `Commit` |
| GitHub に送る | `Push` |
| 履歴を見る | `History` タブ |
| コミットを取り消す | `History` → 右クリック → `Reverse commit` / `Revert` |
| コンフリクト解決 | `File Status` → `Resolve Conflicts`（詳細：第6章） |

### 課題提出の6ステップ（毎回これ）

1. `develop` チェックアウト → `Pull`
2. `Branch` → `feature/課題名` 作成
3. 編集 → ステージング → `Commit`
4. `Push`
5. GitHub で PR（base=`develop`）
6. マージ後 → `develop` を `Pull`

### GitHub でよく使う場所

| 場所 | 操作 |
|------|------|
| PR を作る | `Pull requests` → `New pull request`（base=`develop`） |
| 差分を見る | PR の `Files changed` |
| ブランチ一覧 | `Code` タブ → ブランチ切り替えドロップダウン |

---

## 相談テンプレ

AI はこのページの内容を自動で把握しています。状況だけ伝えればOKです。

```md
目的：（例）feature/課題名をdevelopへPR提出したい
今いるブランチ：（Sourcetreeで太字/チェックのブランチ名）
どこで詰まった：Sourcetree / GitHub / エディタ
起きていること：（例）Pushで認証エラー / PRでConflicts
エラー全文：（そのまま）
```

※ パスワード・トークン・秘密鍵は絶対に共有しないでください。

---

## 完了記録

この章には提出課題はありません。

確認が終わったら、スプレッドシートに **完了日** のみ記入してください。
