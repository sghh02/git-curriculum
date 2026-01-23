# 02 Gitflowによる課題提出サイクル

## 1. この章のゴール
- `develop` から `feature/task1` を作り、課題提出（PR）までを一通りできる。
- 「どこをクリックするか」を見ながら、Sourcetree で迷わず操作できる。
- 専門用語（ブランチ、マージ、インデックスなど）を自分の言葉で説明できる。

## 2. 初登場の用語（ここだけ押さえればOK）
- **チェックアウト（checkout）**：そのブランチに切り替えること（「今いる作業台を変える」）。
- **ステージング（index）**：コミットに入れる変更を選ぶ場所。
- **マージ（merge）**：別ブランチの変更を取り込んで合体すること。
- **PR（Pull Request）**：`feature` の変更を `develop` に取り込んでください、という提出物。
- **base / compare**：PR の「取り込み先 / 提出元」（この運用では base=`develop`）。

## 3. 実践：課題提出の5ステップ（Sourcetree中心）
### 0) 作業前の準備（事故防止）
- Sourcetree のブランチ一覧で `develop` をダブルクリック（チェックアウト）
- 上部の `Pull` をクリック（最新化）

[ここにSourcetreeの「developをチェックアウト→Pull」画面のスクリーンショットを挿入]

### 1) ブランチ作成：`develop` → `feature/task1`
- `develop` を選んだ状態で、上部の `Branch` をクリック
- ブランチ名に `feature/task1` を入力
- `Checkout new branch` にチェック（作成後に切り替える）
- `Create Branch` / `OK`

[ここにSourcetreeのブランチ作成ダイアログのスクリーンショットを挿入]

### 2) 作業と保存：VS Codeで編集 → ステージング → コミット
**VS Code（編集）**
- ファイルを編集して `保存`（ここで「変更」が発生します）

**Sourcetree（ステージング→コミット）**
- `File Status` を開く
- `Unstaged files` に出ているファイルをクリックして差分を確認
- 右側の `Stage`（＋/チェック）を押して `Staged files` に移す
- コミットメッセージを書く（例：`task1: READMEに自己紹介を追加`）
- `Commit` をクリック

[ここにSourcetreeの「File Status（Unstaged/Staged）」画面のスクリーンショットを挿入]

### 3) 同期：GitHubへプッシュ
- 上部の `Push` をクリック
- `feature/task1` にチェックが入っていることを確認
- `Push` をクリック

[ここにSourcetreeの「Push」画面のスクリーンショットを挿入]

### 4) 提出：GitHubで `feature` → `develop` のPull Requestを作る
- GitHubでリポジトリを開く
- 上部の `Pull requests` をクリック
- `New pull request` をクリック
- `base` を **develop** にする（取り込み先）
- `compare` を **feature/task1** にする（提出元）
- `Create pull request` をクリック

[ここにGitHubの「New pull request」画面のスクリーンショットを挿入]

**PR本文テンプレ（そのまま使ってOK）**
```md
## 目的
（例）課題1の提出のため、READMEに自己紹介を追加しました。

## 変更点
- （例）README.md に自己紹介を追記

## 確認方法
README.md を開き、自己紹介が表示されることを確認してください。
```

### 5) 完了：マージ後、ローカル`develop`にプルで反映
PR がマージされたら、あなたの PC 側（ローカル）も最新にします。

- Sourcetree で `develop` をチェックアウト
- 上部の `Pull` をクリック

（余裕があれば）後片付け：
- `feature/task1` を右クリック → `Delete`（ローカルブランチ削除）

[ここにSourcetreeの「developへPull」画面のスクリーンショットを挿入]

## 4. 提出前チェックリスト（不安なときはこれだけ）
- [ ] 今いるブランチが `feature/...` になっている（`develop` や `main` ではない）
- [ ] `Staged files` に「入れてよい変更だけ」入っている
- [ ] プッシュ済みで、GitHub に `feature/...` ブランチが見える
- [ ] PR の base が `develop` になっている

## 5. つまずいたら
- `main` で作業してしまった／プッシュできない／コンフリクトが出た → 第7章「トラブルシューティング（詰まったらここ）」へ
