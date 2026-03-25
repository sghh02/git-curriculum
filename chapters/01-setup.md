# 環境構築（Sourcetree + GitHub）

> **ここから実際の作業が始まります！** この章で環境を整えれば、次章からGit操作の練習ができます。

## 1. この章のゴール

- GitHub アカウントを作り、リポジトリを作成できる
- Sourcetree をインストールしてリポジトリをクローンできる
- お使いのエディタ（例：VS Code）でクローンしたフォルダを開ける
- 前のAIカリキュラムの最終成果物を、`engineer-design.md` として配置できる

## 2. 用語

| 用語 | 意味 |
|------|------|
| **リポジトリ** | 課題の入れ物（フォルダ＋履歴） |
| **クローン（clone）** | GitHub のリポジトリを自分の PC にコピーすること |

## 3. 最短ルート（迷ったらここに戻る）

1. GitHub アカウントを作る
2. GitHub でリポジトリを作る
3. Sourcetree を入れる
4. GitHub の URL でクローンする

### 3-1. GitHub アカウント作成

- GitHub にアクセス → `Sign up`
- メール認証まで完了させる

### 3-2. GitHub でリポジトリを作成

- 右上の `+` → `New repository`
- `Repository name`：例 `git-learning`
- `Public / Private`：Public 推奨（AIレビューが参照できるように）。事情があればメンターに確認
- `Add a README file` を **必ず ON**
- `Create repository`

理由：最初の1コミットが入った状態から始めたほうが、**クローン後に何が正しい状態か見分けやすい** からです。  
README は今回の主役ではありませんが、「リポジトリを空にしないための初期化ファイル」と考えてください。

### 3-3. Sourcetree のインストールと初期設定

- Sourcetree をインストールして起動
- 初回セットアップは、分からない項目は無理に触らず進めてOK

### 3-4. コミットに必要な「名前・メール」を設定する（初回のみ）

ここを飛ばすとコミット時にエラーが出ます。先に設定しておきましょう。

- Sourcetree → `Preferences` / `Options` を開く
- `Default user information` を探す
- `Name`：あなたの名前（本名でもハンドルネームでもOK）
- `Email`：GitHub に登録しているメール
- 保存する

### 3-5. （おすすめ）エディタを差分/マージツールに設定する

- Sourcetree → `Preferences` / `Options`
- `Diff` / `Merge` の項目で、お使いのエディタ（例：VS Code）を選ぶ

### 3-6. クローンする

- GitHub のリポジトリ画面 → `Code` → `HTTPS` → URL をコピー
- Sourcetree で `Clone` をクリック
- `Source Path / URL` に貼り付け
- `Destination Path`（保存先）は **空のフォルダ** を選ぶ
- `Clone` をクリック

認証について：初回は GitHub のログイン画面が出ることがあります。指示に従ってログインし、`Authorize` を押せばOKです。

### 3-7. クローンできたか確認

- [ ] Sourcetree にリポジトリが追加されている
- [ ] 左のブランチ一覧に `main`（または `master`）が見える
- [ ] `Remotes` に `origin` がある
- [ ] お使いのエディタでフォルダを開ける

### 3-7.5. 前カリキュラムの成果物を置く

このGitカリキュラムでは、前のAIカリキュラムで作成した **自分のエンジニア設計書** を使って練習します。

1. クローンしたフォルダをお使いのエディタで開く
2. リポジトリ直下に `engineer-design.md` を作成する
3. 前カリキュラムの最終成果物の内容を貼り付けて保存する

まだ完成度が低くても問題ありません。  
次章以降で、AIに相談しながら少しずつ改善していきます。

ここで大事なのは、「完成版を置く」ことではなく、**これから Git で育てていく元の文章を置く**ことです。

### 3-7.8. `develop` を作っておく

このカリキュラムでは、`main` とは別に `develop` を使って進めます。最初に1回だけ作成しておきましょう。

1. Sourcetree で `main` をチェックアウト
2. 上部の `Branch` をクリック
3. ブランチ名に `develop` を入力
4. `Checkout new branch` にチェックを入れて作成
5. `Push` して GitHub に `develop` を作る

理由：このあと毎回、`develop` を土台にして `feature/...` を作るからです。  
最初に作っておくと、次章以降で「どこからブランチを切るのか」で迷いにくくなります。

### 3-8. main を保護する（事故防止）

初心者が一番やりがちな事故は「`main` に直接 push してしまう」です。先にガードを付けましょう。

- GitHub のリポジトリ → `Settings` → `Branches`
- `Add branch protection rule`
- `Branch name pattern` に `main`
- `Require a pull request before merging` を ON
- `Do not allow force pushes` があれば ON

`Settings` が見えない場合は権限がない可能性があります。スキップしてOKです。

## 4. よくあるミス

| 症状 | 対処 |
|------|------|
| クローン先に既にファイルがある | 空のフォルダを指定する |
| GitHub ログイン画面で止まる | ブラウザでログインして `Authorize` を押す |
| 認証エラーが出る | Sourcetree を再起動してもう一度試す |

## 5. AIに聞いてみよう

```text
「クローンしようとしたらログイン画面が出た。どうすればいい？」
「Sourcetree で Clone ボタンが見つからない。どこにある？」
```

## 6. チェックリスト

- [ ] GitHub アカウントを作成できた
- [ ] Sourcetree でリポジトリをクローンできた
- [ ] お使いのエディタでクローンしたフォルダを開けた
- [ ] `engineer-design.md` を配置できた
- [ ] `develop` を作成して Push できた
- [ ] （任意）main の保護設定ができた

---

## 完了記録

この章には提出課題はありません。

環境構築が完了したら、スプレッドシートに **完了日** のみ記入してください。
