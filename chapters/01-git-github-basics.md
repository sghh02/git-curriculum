# 01 GitとGitHubの基礎とリポジトリ作成

## 1. この章のゴール
- Git と GitHub の役割の違いを説明できる。
- ローカルリポジトリとリモートリポジトリの関係を理解する。
- GitHub で Public リポジトリを作成し、clone / init の違いを体験する。

## 2. 概念の説明（図や比喩を使ってわかりやすく）
- Git は「手元の履歴ノート」、GitHub は「履歴ノートの公開図書館」。
- ローカルは自分の机、リモートは図書館の棚。机の内容を棚に置くのが push です。
- `clone` は「棚の本を机に持ってくる」、`init` は「机に新しいノートを作る」。

## 3. 実際の操作手順（git コマンド）
1. GitHub で Public リポジトリを作成する。
   - リポジトリ名: `git-learning`
   - `README` は作成しない（後でローカルから push するため）
2. ローカルで新しいリポジトリを作る場合（init）。
   ```bash
   mkdir git-learning
   cd git-learning
   git init
   ```
3. 既存のリポジトリを取得する場合（clone）。
   ```bash
   git clone https://github.com/<your-name>/git-learning.git
   ```
4. リモートを確認する。
   ```bash
   git remote -v
   ```

## 4. よくあるミス・つまずきポイント
- Public / Private を間違える（課題提出は Public 前提）。
- `clone` と `init` を混同して、空のリポジトリに push できない。
- `origin` が登録されていないのに `git push` して失敗する。

## 5. AIに聞いてみよう（質問例）
- 「Git と GitHub の役割の違いを、初心者向けの比喩で説明して」
- 「clone と init を使い分ける判断基準を教えて」
- 「Public リポジトリで課題提出するメリットは？」

## 6. ハンズオン課題（成果物提出を想定）
- GitHub で Public リポジトリを作成し、`git init` で作ったローカルリポジトリを接続する。
- `README.md` を作成し、次章で commit できる状態にする。

## 7. チェックリスト（理解確認）
- [ ] Git と GitHub の違いを説明できる。
- [ ] ローカルとリモートの関係を説明できる。
- [ ] `clone` と `init` の違いを説明できる。
- [ ] GitHub で Public リポジトリを作成できた。
