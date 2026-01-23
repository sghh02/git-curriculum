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

※ `develop` が見当たらない場合は、先に `main` から `develop` を作って `Push` します（この章の「模擬課題0」を参照）。

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

※ `develop` が選べない場合は、GitHub 側に `develop` がまだ無い可能性があります。`develop` を `Push` してから再度試してください。

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

## 6. 模擬課題（このカリキュラム内で“提出まで完走”する）
この章は「読む」だけではなく、**実際に PR 提出までやって**体で覚えるのが一番強いです。  
ここでは練習用リポジトリ（第1章で作った `git-learning` など）を使って進めます。

### 模擬課題0：セットアップ確認（15分）
**やること**
- Sourcetree で練習用リポジトリを開く
- `develop` が無ければ作成して `Push`（GitHub にも `develop` を作る）
- `develop` をチェックアウトして `Pull` ができることを確認

**合格条件**
- `origin/develop` が GitHub に存在する
- Sourcetree で `main` と `develop` が見える

**提出物（先生に出すなら）**
- GitHub のリポジトリ画面で `develop` が見えるスクショ
- Sourcetree のブランチ一覧で `main` と `develop` が見えるスクショ

[ここに模擬課題0のスクリーンショット例を挿入]

### 模擬課題1：課題提出リハーサル（PR→マージ→Pull）（30〜45分）
**ゴール**：`feature/task1` から `develop` に PR を出し、マージ後にローカル `develop` へ反映できる。

**やること**
1. `develop` をチェックアウト → `Pull`
2. `develop` から `feature/task1` を作成
3. VS Code で `README.md` に「自己紹介」か「学習メモ」を追記して保存
4. Sourcetree でステージング → コミット（例：`task1: READMEに自己紹介を追加`）
5. `Push`（`feature/task1` を GitHub へ）
6. GitHub で PR を作成（base=`develop`、compare=`feature/task1`）
7. PR テンプレの空欄を埋めて提出
8. PR をマージ（授業ルールに従う：先生がマージする場合は待つ）
9. ローカルで `develop` をチェックアウト → `Pull`（マージ結果を取り込む）

**合格条件**
- PR の base が `develop`、compare が `feature/task1`
- PR 本文に「目的・変更点・確認方法」が書けている
- マージ後、ローカル `develop` の `History` にマージ結果が見える

**提出物（先生に出すなら）**
- PR のURL
- PR が `Merged` になっているスクショ
- Sourcetree の `History` で、マージ後の履歴が見えるスクショ

[ここに模擬課題1のPR作成〜マージのスクリーンショット例を挿入]

### 模擬課題2：コンフリクト練習（PRでConflictsを出して直す）（45〜60分・上級）
**ゴール**：コンフリクトを怖がらずに解決し、PR をマージできる。

**やること（ポイント：AとBを“同じ元（develop）から”作る）**
0. `develop` をチェックアウト → `Pull`
1. `develop` に練習用ファイルを作る（1回だけ）
   - `practice.md` を作成して次の1行を書いて保存：`LINE: original`
   - ステージング → コミット（例：`chore: add practice file`）→ `Push`（developへ）
2. `develop` から `feature/conflict-a` を作成
   - `practice.md` の `LINE:` を `LINE: from A` に変更 → コミット → プッシュ
   - GitHub で PR（A）を作成（base=`develop`）※まだマージしない
3. `develop`（まだ更新しない）から `feature/conflict-b` を作成
   - `practice.md` の `LINE:` を `LINE: from B` に変更 → コミット → プッシュ
   - GitHub で PR（B）を作成（base=`develop`）
4. GitHub で PR（A）を先にマージ
5. PR（B）に `Conflicts` が出たら、次で解決
   - ローカルで `develop` をチェックアウト → `Pull`（最新化）
   - `feature/conflict-b` をチェックアウト
   - Sourcetree の `Merge` で `develop` を取り込む
   - コンフリクトが出たら VS Code で `practice.md` を整える（第6章を見ながら）
   - 解決コミット → `Push`（feature/conflict-bへ）
6. PR（B）がマージ可能になったらマージ
7. ローカル `develop` を `Pull` して完了

**合格条件**
- PR（B）で `Conflicts` が出た状態から、自分で解決して `Merged` まで到達できた
- 解決コミットが `feature/conflict-b` に積まれている（履歴で確認できる）

**提出物（先生に出すなら）**
- PR（A）とPR（B）のURL
- PR（B）でコンフリクトが出たスクショ（出た瞬間）
- 解決後にマージできたスクショ

[ここに模擬課題2の「Conflicts表示」スクリーンショット例を挿入]

## 7. AIに質問するテンプレ（このページを開いたままコピペOK）
```md
初心者です。いま「02 Gitflowによる課題提出サイクル」を開いています。

やりたいこと：（例）feature/task1からdevelopへPR提出したい
今いるブランチ：（Sourcetreeで太字/チェックのブランチ名）
詰まっているステップ：（0〜5のどこか。例：3) Push）
直前に押したボタン：1)  2)  3)
起きていること：（例）PRのbaseが選べない / Pushで失敗する
エラー全文：（あればそのまま）
スクショ：（あれば添付）
```
