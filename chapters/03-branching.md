# ブランチで安全に作業する

> 練習ブランチ例：`feature/03-branch-practice`

> **補足**：この章では、`feature/03-branch-practice` を例にして練習します。このブランチは練習専用で、次章の提出には使いません。

**前提**：前章でコミット・プッシュができること。

## 1. この章のゴール

- `main / develop / feature` の3本の役割を説明できる
- `develop` から `feature/課題名` を作り、安全に作業できる
- 「main で直接作業しない理由」を説明できる
- 練習用ファイル `branch-practice.md` を安心して編集するために、feature ブランチを使う意味を理解する

## 2. 用語

| 用語 | 意味 |
|------|------|
| **ブランチ** | 作業用の別ルート。安全に試せる「別コピーの道」 |
| **チェックアウト** | ブランチを切り替えること |
| **マージ** | 別ブランチの変更を取り込んで合体すること |

## 3. Gitflow 簡易版：3本のブランチ

前章でも `feature/02-first-commit` を使いました。  
前章が「使ってみる章」だったのに対して、この章は **なぜその分け方をするのかを理解する章** です。

| ブランチ | たとえ | 役割 |
|----------|--------|------|
| `main` | 提出済みの完成作品 | 最終成果物（基本は触らない） |
| `develop` | みんなの作業を集める作業台 | 開発のベース |
| `feature/課題名` | あなた専用の机 | 課題ごとの作業ブランチ |

ルール：**`main` には直接コミットしない。** `feature` で作業 → PR で `develop` に統合 → 完了したら `main` に反映。

流れにすると、`develop` → `feature` で作業 → PR → `develop` です。  
つまり feature は「好きに壊してよい場所」ではなく、**本流に混ぜる前に安全に試す場所** です。

### ブランチ名のコツ

- 形式：`feature/課題名`（例：`feature/03-branch-practice`）
- 1課題＝1ブランチ（混ぜない）
- 日本語より英数字（トラブルが減ります）

## 4. 操作手順

### 4-0. `develop` があるか確認する

- `Fetch` または `Pull` でブランチ一覧を最新化
- Sourcetree 左のブランチ一覧に `develop` があるか確認
- `Remotes` → `origin` に `origin/develop` がある場合：右クリック → `Checkout`
- どこにも無い場合（初回のみ）：
  1. `main` をチェックアウト
  2. 上部の `Branch` → ブランチ名 `develop` → `Checkout new branch` にチェック → 作成
  3. `Push` で `develop` を GitHub に送る

### 4-1. `develop` を最新化する

- `develop` をダブルクリック（チェックアウト）
- 上部の `Pull` をクリック

**これを毎回やる習慣をつけましょう。** feature を作る前に `develop` を `Pull` するだけで、多くのトラブルを防げます。

### 4-2. feature ブランチを作る

- `develop` を選んだ状態で、上部の `Branch` をクリック
- ブランチ名：`feature/03-branch-practice`
- `Checkout new branch` にチェック
- `Create Branch` / `OK`

このとき、必ず **`develop` をチェックアウトした状態から作る** のが大事です。  
別の feature から作ってしまうと、前の課題の変更まで混ざりやすくなります。

### 4-3. feature で作業 → コミット → プッシュ

前章で学んだ手順と同じです。

1. お使いのエディタ（例：VS Code）で `branch-practice.md` を作成し、次のような短いメモを書く → 保存
   - 別案A: Gitの流れを図で説明する
   - 別案B: コミットを小さく分ける理由を1文で書く
2. Sourcetree の `File Status` → ステージング → コミット
3. `Push`（`feature/03-branch-practice` にチェック → `Push`）

この章では、AIに「別案」を出してもらい、その別案を **安全に試すための作業台** として feature を使う感覚を持てれば十分です。

### 4-4. 次章に進む前の整理

この章の `feature/03-branch-practice` は練習専用です。
ここでは **まだ PR を作成・マージしません**。次章では `develop` から提出用の `feature/04-pull-request` を新しく作ります。

次章に進むときは、まず `develop` をチェックアウトして `Pull` すればOKです。

## 5. トラブル：`main` で作業してしまった

### まだコミットしていない場合

1. `main` を選んだ状態で `Branch` をクリック
2. ブランチ名を `feature/課題名` にして作成（チェックアウト）
3. そのまま通常通りコミット → プッシュ

### コミットしてしまった場合

1. まず保険：`main` を右クリック → `Branch...` → `backup/main-mistake` で退避ブランチを作る
2. そこから `feature/課題名` を作って作業を続ける
3. `main` を元に戻す操作は強いので、メンターに相談がおすすめ

## 6. AIに聞いてみよう

```text
「develop が見えない。Branches と Remotes に見えている名前を書くので、何をすべきか教えて」
「main で作業してしまった。未コミットかコミット済みか確認する方法と、安全な戻し方を教えて」
「feature/課題名 のブランチ名案を3つ出して」
「branch-practice.md に書く別案を1つ出して。差分が小さくて、ブランチ練習に向いている内容で」
```

## 7. ハンズオン課題

1. `develop` をチェックアウトして `Pull`
2. `develop` から `feature/03-branch-practice` を作成
3. `branch-practice.md` に1項目追加または1文修正 → コミット → プッシュ
4. GitHub 上で `feature/03-branch-practice` ブランチが見えることを確認

**合格条件**：GitHub に `feature/03-branch-practice` ブランチが存在し、コミットが積まれている。

## 8. チェックリスト

- [ ] `main / develop / feature` の役割を説明できる
- [ ] `develop` から feature を作って作業できた
- [ ] `main` で作業しない理由を説明できる
- [ ] 「別案を安全に試すために feature を使う」と説明できる

---

## 完了記録

この章には提出課題はありません。
学習が完了したら、進捗ステータスを完了にしてください。
