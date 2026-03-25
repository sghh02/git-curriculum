# 環境構築（Sourcetree + GitHub）

> **ここから実際の作業が始まります。**
> この章では「環境構築を終えること」だけでなく、**公式情報をAIに整理させながら未知の手順を進める型** も身につけます。

## 1. この章のゴール

- GitHub アカウントを作り、リポジトリを作成できる
- Sourcetree をインストールしてリポジトリをクローンできる
- お使いのエディタ（例：VS Code）でクローンしたフォルダを開ける
- 前のAIカリキュラムの最終成果物を、`engineer-design.md` として配置できる
- 次章のために `develop` を作成して Push できる

## 2. 用語

| 用語 | 意味 |
|------|------|
| **リポジトリ** | 課題の入れ物（フォルダ＋履歴） |
| **クローン（clone）** | GitHub のリポジトリを自分の PC にコピーすること |

## 3. この章で本当にやることは5つだけ

1. GitHub でリポジトリを作る
2. Sourcetree をインストールする
3. Sourcetree でクローンする
4. `engineer-design.md` を置く
5. `develop` を作る

この5つが終われば、次章に進めます。  
`main` の保護や Diff/Merge の設定は、**できれば良いおすすめ設定** です。先に進めることを優先してください。

## 4. AIと公式情報で環境構築する

環境構築は、毎回画面が少し変わったり、OSごとに見え方が違ったりします。  
だから大事なのは、**手順を丸暗記すること**ではなく、**公式情報を根拠にAIへ整理させ、自分の画面と照合しながら進めること**です。

この章では、次の公式情報だけを使うのが安全です。

- GitHub 公式: [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- GitHub 公式: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- Atlassian 公式: [Clone a repository into SourceTree](https://support.atlassian.com/sourcetree/kb/clone-a-repository-into-sourcetree/)
- GitHub 公式: [Managing a branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)

### 4-1. AIへの頼み方

AI に頼むときは、**参照元を限定する** のが大事です。

コピペ用：

```text
以下の公式URLだけを参照して、初心者向けに環境構築手順を作ってください。
- 必須手順
- おすすめ設定
- つまずきやすい点
を分けて書いてください。
公式ページに書いていないことは推測せず、「不明」と書いてください。
私が確認しやすいように、各ステップに「できた状態」も1行ずつ入れてください。
```

ここで身につけたいのは、**分からない → 公式を見る → AIに整理させる → 自分の画面で確認する** という流れです。

## 5. 手順

### 5-1. GitHub アカウントを作る（まだ無い人だけ）

- GitHub にアクセス → `Sign up`
- メール認証まで完了させる

**できた状態**：GitHub にログインした状態でトップ画面が開ける。

### 5-2. GitHub でリポジトリを作る

1. 右上の `+` → `New repository`
2. `Repository name`：例 `git-learning`
3. `Public / Private`：Public 推奨（AIレビューが参照できるように）。事情があればメンターに確認
4. `Add a README file` を **必ず ON**
5. `Create repository`

理由：最初から README が1つ入っていた方が、**クローン後に「空じゃない正常な状態」を見分けやすい** からです。  
README は今回の主役ではありません。最初の足場だと思ってください。

**できた状態**：GitHub 上でリポジトリのトップページが開き、`README.md` が見える。

### 5-3. Sourcetree を入れる

1. Sourcetree をインストールして起動する
2. 初回セットアップは、分からない項目を無理に触らず進める
3. コミット用の `Name` と `Email` を設定する

- Sourcetree → `Preferences` / `Options`
- `Default user information`
- `Name`：あなたの名前
- `Email`：GitHub に登録しているメール

ここを飛ばすと、あとでコミット時に止まりやすいです。

**できた状態**：Sourcetree が起動し、`Name / Email` が入力済み。

### 5-4. Sourcetree でクローンする

1. GitHub のリポジトリ画面 → `Code` → `HTTPS` → URL をコピー
2. Sourcetree で `Clone` または `Clone/New` をクリック
3. `Source Path / URL` に貼り付ける
4. `Destination Path` は **空のフォルダ** を選ぶ
5. `Clone` をクリック

初回は GitHub のログイン画面が出ることがあります。  
そのときは、ブラウザでログインして `Authorize` を押せばOKです。

**できた状態**：

- Sourcetree にリポジトリが追加されている
- 左に `main`（または `master`）が見える
- `Remotes` に `origin` がある

### 5-5. `engineer-design.md` を置く

このGitカリキュラムでは、前のAIカリキュラムで作成した **自分のエンジニア設計書** を使って練習します。

1. クローンしたフォルダをお使いのエディタで開く
2. リポジトリ直下に `engineer-design.md` を作成する
3. 前カリキュラムの最終成果物の内容を貼り付けて保存する

まだ完成度が低くても問題ありません。  
次章以降で、AIに相談しながら少しずつ改善していきます。

ここで大事なのは、「完成版を置く」ことではなく、**これから Git で育てていく元の文章を置く**ことです。

**できた状態**：エディタで `engineer-design.md` が開けて、内容が保存されている。

### 5-6. 次章の準備として `develop` を作る

このカリキュラムでは、`main` とは別に `develop` を使って進めます。最初に1回だけ作成しておきましょう。

1. Sourcetree で `main` をチェックアウト
2. 上部の `Branch` をクリック
3. ブランチ名に `develop` を入力
4. `Checkout new branch` にチェックを入れて作成
5. `Push` して GitHub に `develop` を作る

理由：このあと毎回、`develop` を土台にして `feature/...` を作るからです。  
最初に作っておくと、次章以降で「どこからブランチを切るのか」で迷いにくくなります。

**できた状態**：Sourcetree と GitHub の両方で `develop` が見える。

## 6. 余裕があればやるおすすめ設定

### 6-1. `main` を保護する（事故防止）

初心者が一番やりがちな事故は「`main` に直接 push してしまう」です。先にガードを付けましょう。

- GitHub のリポジトリ → `Settings` → `Branches`
- `Add branch protection rule`
- `Branch name pattern` に `main`
- `Require a pull request before merging` を ON
- `Do not allow force pushes` があれば ON

`Settings` が見えない場合は権限がない可能性があります。スキップしてOKです。

### 6-2. エディタを差分/マージツールに設定する

- Sourcetree → `Preferences` / `Options`
- `Diff` / `Merge` の項目で、お使いのエディタ（例：VS Code）を選ぶ

これは第6章のコンフリクト解決で少し便利になります。  
ただし、今すぐ分からなければ後回しで大丈夫です。

## 7. よくあるミス

| 症状 | 対処 |
|------|------|
| クローン先に既にファイルがある | 空のフォルダを指定する |
| GitHub ログイン画面で止まる | ブラウザでログインして `Authorize` を押す |
| 認証エラーが出る | Sourcetree を再起動してもう一度試す |
| `develop` が見えない | 先に `main` から `develop` を作って `Push` する |

## 8. AIに聞いてみよう

```text
「クローンしようとしたらログイン画面が出た。どうすればいい？」
「Sourcetree で Clone ボタンが見つからない。どこにある？」
「この公式URLだけを参照して、GitHubのリポジトリ作成からSourcetreeクローンまでの必須手順を初心者向けに整理して」
「私の画面には（表示）があります。公式手順とどこが違う？推測せずに教えて」
```

## 9. チェックリスト

- [ ] GitHub アカウントを作成できた
- [ ] GitHub でリポジトリを作成できた
- [ ] Sourcetree でリポジトリをクローンできた
- [ ] `engineer-design.md` を配置できた
- [ ] `develop` を作成して Push できた
- [ ] （任意）main の保護設定ができた
- [ ] 公式情報をAIに整理させて、自分の画面と照合する流れを試せた

---

## 完了記録

この章には提出課題はありません。

環境構築が完了したら、スプレッドシートに **完了日** のみ記入してください。
