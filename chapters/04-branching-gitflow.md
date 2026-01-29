# ブランチ運用とマージ

## 1. この章のゴール
- Gitflow（簡易版）の `main / develop / feature/課題名` の役割を説明できる。
- `develop` から `feature/task1` を作り、Sourcetree で安全に作業できる。
- 「main で直接作業しない理由」を不安なく説明できる。

## 2. 概念の説明（図や比喩を使ってわかりやすく）
- **ブランチ**：作業用の “別ルート” です。安全に試せる「別コピーの道」だと思ってください。
- **マージ**：別ブランチの変更を取り込んで合体することです。

このカリキュラムでは Gitflow（簡易版）で運用します。
- `main`：最終成果物（基本は触らない）
- `develop`：開発のベース（課題を統合する枝）
- `feature/課題名`：自分の作業用（ここから PR を出す）

たとえるなら…
- `main`：提出済みの完成作品（展示中）
- `develop`：みんなの作業を集める作業台
- `feature/...`：あなた専用の机

### ブランチ名のコツ（迷ったらこのルール）
- 形式：`feature/課題名`（例：`feature/task1`）
- 1課題＝1ブランチ（混ぜない）
- 日本語より英数字をおすすめ（環境依存トラブルが減ります）

## 3. 実際の操作手順（Sourcetree）
### 3-0. 事前チェック：`develop` があるか確認
- まず `Fetch`（情報更新だけ）または `Pull`（取り込み＋反映）して、ブランチ一覧を最新にします
- Sourcetree 左のブランチ一覧に `develop` があるか確認します
- `develop` が見えないときは、`Remotes` → `origin` の中に **`develop`（例：`origin/develop`）** がないか確認します
  - もし `origin/develop` があれば：右クリック → `Checkout`（ローカルに `develop` を作って切り替え）
- `origin/develop` も無い場合（初回だけ）：`main` から `develop` を作って GitHub に送ります
  - `main` を右クリック → `Branch...`
  - ブランチ名に `develop`
  - `Checkout new branch` にチェック → 作成
  - `Push` で `develop` を GitHub に送る

目印：
- `Branches` と `Remotes` は Sourcetree 左のサイドバーにあります
- `Branch...` はブランチ名（例：`main`）を右クリックすると出てきます

### 3-1. 作業を始める前に：`develop` を最新化
- `develop` をダブルクリック（チェックアウト＝そのブランチに切り替えること）
- 上部の `Pull` をクリック（最新を取り込む）

### 3-2. `develop` から `feature/task1` を作る
- `develop` を選んだ状態で、上部の `Branch` をクリック
- ブランチ名：`feature/task1`（課題名に合わせる）
- `Checkout new branch` にチェック（作成後、そのまま feature に切り替える）
- `Create Branch` / `OK`

目印：上部ツールバーの `Branch` を押すとダイアログが開きます。`Branch name` と `Checkout new branch` を確認します。

### 3-3. feature で作業 → コミット → プッシュ
- VS Code で編集して保存
- Sourcetree の `File Status` → ステージング → コミット（第3章の手順）
- `Push` で `feature/task1` を GitHub に送る

### 3-4. 提出（PR）について
`feature/task1` の変更は、GitHub 上で `feature/task1` → `develop` の Pull Request（PR）として提出します。  
PR の作り方は次章で “どこをクリックするか” まで説明します。

### 3-5. PR がマージされた後：ローカル `develop` に反映
- Sourcetree で `develop` をチェックアウト
- `Pull` で最新化
- 余裕があれば後片付け（不安ならスキップしてOK）:
  - `feature/task1` を右クリック → `Delete`（ローカルブランチ削除）

### 3-6. 1課題の鉄板ルーティン（毎回これだけ）
1. `develop` をチェックアウト → `Pull`（最新化）
2. `develop` から `feature/課題名` を作る
3. 変更 → ステージング → コミット（小さく）
4. `Push`（GitHubへ送る）
5. GitHub で `feature/...` → `develop` の PR を作る（提出）
6. マージ後、ローカル `develop` を `Pull` で更新

## 4. よくあるミス・つまずきポイント
- `develop` を最新化せずに feature を切ってしまう → まず `develop` で `Pull`。
- feature を `Push` していない → GitHub にブランチが見えず PR が作れない。
- `main` で作業してしまう → 直せます（下の手順）。

### トラブル：`main` で作業してしまった（Sourcetree）
まず落ち着いてください。よくあるミスで、ちゃんと戻せます。

**A）まだコミットしていない（変更が “作業中” のまま）**
- `main` を右クリック → `Branch...`
- ブランチ名を `feature/task1` にして作成（そのままチェックアウト）
- そのブランチで通常通りコミット → プッシュ

**B）すでにコミットしてしまった（`main` にコミットが乗った）**
- まず保険：`main` を右クリック → `Branch...` → `backup/main-mistake` のような名前でブランチを作る
- そのコミット地点から `feature/task1` を作って作業を続ける
- `main` を元に戻す操作（Reset）は怖いので、授業ルールに合わせて先生に確認するのがおすすめです

## 5. AIに聞いてみよう（質問例）
このページを開いたまま、下のテンプレをコピペして質問すると、ブランチ事故が減ります。

**コピペ用テンプレ（ブランチ/作業場所の確認）**
```md
初心者です。いま「04 ブランチ運用とマージ」を開いています。

目的：（例）developからfeature/task1を作りたい / mainで作業してしまったので戻したい
今いるブランチ：（Sourcetreeで太字/チェックのブランチ名）
いま見えているブランチ：（main/develop/feature... がSourcetreeに見えるか）
直前にやった操作（クリック順）：1)  2)  3)
起きていること：（例）featureが作れない / PRが作れない / mainにコミットした
画面の表示：（ブランチ一覧に見えている名前を文字で）
※秘密鍵・トークン・パスワードは貼りません
```

### 5-1. 具体例（このまま質問してOK）
```text
「`3-0` です。`develop` が見えません。`Branches` と `Remotes/origin` に見えている名前を文字で書くので、`develop` は作るべき？それとも `origin/develop` を checkout する？クリック順で教えて」
「`3-2` です。課題名が（___）なんだけど、`feature/課題名` のブランチ名案を3つ出して（英数字・kebab-case）」
「`main` で作業してしまった。**未コミット/コミット済み** どっちか分からないので、まず確認する場所（Sourcetreeのどこ？）と、その後の安全な戻し方を教えて」
「PRを出す前に、`develop` を最新化できてるか不安。`History` のどこを見れば “古い/新しい” が分かる？」
「マージ後の後片付けで、`feature/task1` は消していい？消すなら “ローカル/リモート” どっちを消すのが安全？」
```

## 6. ハンズオン課題（成果物提出を想定）
- `develop` から `feature/task1` を作成する。
- `README.md` に自己紹介を追記し、コミットしてプッシュする。
- GitHub 上でブランチが増えていること（`feature/task1` が見えること）を確認する。

## 7. チェックリスト（理解確認）
- [ ] `main / develop / feature` の役割を説明できる。
- [ ] `develop` から feature を作って作業できる。
- [ ] `main` で作業しない理由を説明できる。

---

## 課題提出

この章には提出課題があります。

1. 上記のハンズオン課題を完了する
2. GitHub で `feature/04-branching-gitflow` ブランチを作成し、PRを作成
3. [AI総合レビューツール](https://ai.studio/apps/drive/1AMqIqU4Bio4te7AWh5dly1Qzp7CesqP9?fullscreenApplet=true) でレビューを実行
4. 問題がなければ、スプレッドシートに **PR URL** と **完了日** を記入
