# 環境構築（Sourcetree + GitHub）

> **ここから実際の作業が始まります！** この章で環境を整えれば、次章から課題提出の練習ができます。
> 初めてで不安な方も、手順通りに進めれば大丈夫です。

## 1. この章のゴール
- GitHub / Sourcetree / VS Code を準備して、課題提出のスタート地点に立てる。
- GitHub アカウントを作り、Sourcetree を使ってリポジトリを SSH でクローンできる。
- SSH キーを設定して、認証（ログイン）でつまずきにくくする。

## 2. 概念の説明（図や比喩を使ってわかりやすく）
- まず安心してほしいこと：Git は「間違えても戻れる仕組み」です。最初に覚えると、その後の課題がずっと楽になります。
- GitHub は「ネット上の金庫」（提出先＋バックアップ）、Sourcetree は「金庫を操作するリモコン」です。

### 初登場の用語（ここだけ押さえればOK）
- **リポジトリ**：課題の入れ物（フォルダ＋履歴）。
- **ローカル**：自分の PC 側。**リモート**：GitHub 側。
- **クローン（clone）**：GitHub のリポジトリを自分の PC にコピーして、作業できる状態にすること。
- **SSH**：GitHub（金庫）に入るための「鍵」で認証する方式。

## 3. 環境構築とクローン手順（Sourcetree）
この章では「黒い画面（CLI）」をできるだけ使わず、Sourcetree で進めます。

### この章の最短ルート（迷ったらここに戻る）
1. GitHub アカウントを作る
2. GitHub でリポジトリを作る
3. Sourcetree を入れる
4. SSH キーを作る → GitHub に公開鍵を登録 → Sourcetree に秘密鍵を設定
5. GitHub の `SSH` URL でクローンする

### 3-1. GitHub アカウント作成
- GitHub にアクセス → `Sign up`（登録）
- メール認証まで完了させる

### 3-2. GitHub でリポジトリを作成
（授業で指定されたリポジトリがある場合は、それを使って OK です）

- GitHub 右上の `+` → `New repository`
- `Repository name`：例 `git-learning`
- `Public / Private`：課題の提出ルールに従う（迷ったら先生に確認）
- 迷ったら `Add a README file` を ON（最初のクローンが楽です）
- `Create repository`

### 3-3. Sourcetree のインストールと初期設定
- Sourcetree をインストールして起動
- 初回セットアップは、分からない項目は無理に触らず進めて OK（後から変更できます）

### 3-3.5 【重要】コミットに必要な「名前・メール」を設定する（初回だけ）
初回にここを飛ばすと、コミット時にエラーが出て止まりやすいです。先に設定しておくのが最強です。

- Sourcetree → `Preferences` / `Options`（設定）を開く
- `General`（一般）などのタブで `Default user information`（ユーザー情報）を探す
- 次を入力して保存
  - `Name`：あなたの名前（本名でもハンドルネームでもOK。履歴に残ります）
  - `Email`：GitHub に登録しているメール（または GitHub の no-reply メールでもOK）

### 3-3.6 （おすすめ）VS Code を差分/マージツールに設定する
コンフリクト解決（第6章）で、VS Code が開くようにしておくと安心です。

- Sourcetree → `Preferences` / `Options`
- `Diff` / `Merge` の項目を探す
- `External Diff Tool` / `External Merge Tool` に `Visual Studio Code` を選ぶ（選べない場合はスキップでOK）

### 3-4. 【重要】SSH キーの設定（ここが一番つまずきやすい）
SSH は「鍵でログインする」仕組みです。ここだけは丁寧に進めましょう。

- **公開鍵（public key）**：GitHub に登録して OK（合鍵みたいなもの）
- **秘密鍵（private key）**：絶対に外に出さない（本物の鍵）

※ Windows 環境だと Sourcetree の SSH クライアントが `PuTTY/Plink` になっていることがあります。  
その場合は鍵が `.ppk` 形式になる/変換が必要になることがあるので、迷ったら次を確認してください。
- Sourcetree の `Options` → `SSH Client` で `OpenSSH` を選べるなら選ぶ（選べない場合はそのままでOK）

#### (1) Sourcetree で SSH キーを作る
- Sourcetree のメニューで `Tools` → `Create SSH Keys...`（または設定画面から「SSH キー作成」）
- 画面の指示に従って鍵を生成する
- `.pub` が付くファイルが公開鍵です

#### (2) GitHub に公開鍵を登録する
- GitHub 右上アイコン → `Settings`
- `SSH and GPG keys` → `New SSH key`
- `Title`：例 `my-laptop`
- `Key`：公開鍵（`.pub`）の中身を貼り付け → `Add SSH key`
  - `.pub` は VS Code で開いて、中身を **全部コピー** します（`ssh-` で始まる1行のことが多いです）

#### (3) Sourcetree に秘密鍵を指定する
- Sourcetree → `Preferences` / `Options`
- `Authentication`（または `Accounts`）タブを探す
- `SSH key` / `SSH Key` / `Key` の入力欄の `...` / `Browse...` を押して、**秘密鍵（`.pub` ではない方）** を選ぶ
  - Windows で `PuTTY/Plink` の場合は、鍵が `.ppk` のことがあります（環境の指示に従えばOK）
- 保存して閉じる

### 3-5. GitHub リポジトリを Sourcetree にクローンする
- GitHub のリポジトリ画面で `Code` → `SSH` を選ぶ → URL をコピー（`git@github.com:...` の形）
- Sourcetree で `Clone` をクリック
- `Source Path / URL` に貼り付け
- `Destination Path`（保存先）を選ぶ（できれば **空のフォルダ**。既にファイルがある場所は避ける）
- `Clone` をクリック

※ `Clone` が見当たらないときは、`File` → `Clone/New...` を探してください（表示名は環境で少し違います）。

### 3-6. クローンできたか確認（ここで迷う人が多い）
- Sourcetree でリポジトリが左側に追加されている
- 左のブランチ一覧に `main`（または `master`）が見える
- 左の `Remotes` に `origin` があり、GitHub の URL が設定されている
- VS Code でフォルダを開ける
  - Sourcetree のメニューから `Open in Finder/Explorer` や `Open in External Editor` を探す（表示名は環境で異なります）
確認のコツ：
- Sourcetree 左側に「リポジトリ一覧」が出ていればOK（見えない場合は、画面左のサイドバーを広げてみてください）
- そのリポジトリを選ぶと、左側に `Branches` と `Remotes` が出ます（`origin` があれば GitHub とつながっています）

### 3-7. （おすすめ）事故を防ぐ：GitHubで main を保護する
初心者が一番やりがちな事故は「`main` に直接 push してしまう」です。GitHub 側で “ガード” を付けると安心です。

- GitHub のリポジトリ → `Settings`
- `Branches` → `Add branch protection rule`
- `Branch name pattern` に `main`
- `Require a pull request before merging` を ON
- `Do not allow force pushes` があれば ON

※ `Settings` が見えない場合は権限がない可能性があります。そのときはスキップして OK です。

## 4. よくあるミス・つまずきポイント
- `https://...` の URL でクローンして、毎回ログインが必要になってしまう → まずは `SSH` をおすすめ。
- `Permission denied (publickey)` が出る → GitHub に公開鍵を登録したか、Sourcetree が正しい秘密鍵を見ているかを確認。
- **秘密鍵の中身を貼るのは絶対に NG**（貼るのは `.pub` の公開鍵だけ）。

### プッシュ/クローンできない（認証エラー）チェックリスト
- GitHub の `Code` → `SSH` の URL（`git@github.com:...`）を使っている？
- GitHub に公開鍵を登録した？（`Settings` → `SSH and GPG keys`）
- Sourcetree の設定で「秘密鍵」を指定した？
- 別の鍵を作り直した場合、GitHub 側も新しい公開鍵に差し替えた？
- 権限のないリポジトリにアクセスしていない？（URL が本当に自分の課題リポジトリか確認）

## 5. AIに聞いてみよう（質問例）
この章で詰まりやすいのは「SSH（鍵）」と「クローン」です。  
このページを開いたまま、下のテンプレをコピペして質問してみてください。

**SSH/認証エラー用テンプレ（おすすめ）**
```md
初心者です。いま「01 環境構築（Sourcetree + GitHub）」を開いています。

詰まっている手順：（例）3-4(2) GitHubに公開鍵を登録
やりたいこと：（例）SourcetreeからSSHでクローン/プッシュしたい
起きていること：（例）PushでPermission denied (publickey)が出る
エラー全文：（そのまま貼る）

確認したこと：
- GitHubのSSH Keysに公開鍵(.pub)を登録した：はい/いいえ
- Sourcetreeで秘密鍵を指定した：はい/いいえ
- クローンURLがgit@github.com:...になっている：はい/いいえ

画面の表示：（画面に表示されている文字をそのまま）
※秘密鍵の中身・トークン・パスワードは貼りません
```

**クローンできない用テンプレ**
```md
初心者です。いま「01 環境構築（Sourcetree + GitHub）」を開いています。

詰まっている手順：（例）3-5 クローン
貼り付けたURL：（git@github.com:... の形だけ。中身はそのままでもOK）
Destination Path：（どこに保存しようとしているか）
起きていること：（画面の表示/エラー）
画面の表示：（画面に表示されている文字をそのまま）
※秘密鍵の中身・トークン・パスワードは貼りません
```

### 具体例（こう聞くと一発で進みやすい）
```text
「`3-4(3)` の “Authentication/SSH” が見つからない。Sourcetreeのどの画面・どのタブを開けばいい？」
「手元にある鍵ファイル名を列挙します（例：`id_ed25519` / `id_ed25519.pub`）。GitHub に貼るのはどれ？（公開鍵/秘密鍵の見分け方も教えて）」
「GitHubの `Code` が `HTTPS` になってる。`SSH` に切り替えるクリック手順だけ教えて」
「クローン後に `origin`（Remotes）が見えない。Sourcetreeで確認すべき場所を順番に教えて」
```

## 6. ハンズオン課題（成果物提出を想定）
- クローンしたリポジトリを VS Code で開き、`README.md` に自己紹介を2行だけ追記して保存する。
- 次章で Sourcetree から「ステージング→コミット→プッシュ」を行います（この章では編集までで OK）。

## 7. チェックリスト（理解確認）
- [ ] GitHub＝金庫、Sourcetree＝リモコン、で説明できる。
- [ ] 公開鍵と秘密鍵の違いを説明できる。
- [ ] Sourcetree でリポジトリをクローンできた。

---

## 完了記録

この章には提出課題はありません。
環境構築が完了したら、スプレッドシートに **完了日** のみ記入してください。
