# 課題提出ワークフロー

> 提出ブランチ：`feature/05-submission-workflow`（PRのbase：`develop`）

**前提**：Unit 2（コミット・ブランチ・PR）をすべて完了していること。

## 1. この章のゴール

- 1課題の提出フローを、迷わず通しで実行できる
- 模擬課題を2回通して、ルーティンを体に染み込ませる

## 2. 1課題の鉄板ルーティン（6ステップ）

Unit 2 で学んだスキルを1つの流れにまとめます。**毎回この手順で提出します。**

| # | やること | Sourcetree / GitHub |
|---|---------|-------------------|
| 1 | `develop` を最新化 | `develop` チェックアウト → `Pull` |
| 2 | feature を作る | `Branch` → `feature/課題名` → `Checkout new branch` |
| 3 | 作業 → コミット | エディタで編集 → `File Status` → ステージング → `Commit` |
| 4 | プッシュ | `Push`（feature にチェック） |
| 5 | PR を作成 | GitHub → `Pull requests` → base=`develop` / compare=`feature/...` |
| 6 | マージ後に更新 | `develop` チェックアウト → `Pull` |

## 3. 提出前チェックリスト

PR を作る前に毎回確認してください。

- [ ] 今いるブランチが `feature/...`（`develop` や `main` ではない）
- [ ] `Staged files` に入れてよい変更だけが入っている
- [ ] プッシュ済みで、GitHub に `feature/...` が見える
- [ ] PR の base が `develop`

## 4. 模擬課題1：基本フロー（通し練習）

### ゴール

`feature/05-practice-1` から `develop` に PR を出し、マージ後にローカル `develop` を更新する。

### 手順

1. `develop` をチェックアウト → `Pull`
2. `develop` から `feature/05-practice-1` を作成
3. `README.md` に学習メモを追記して保存
4. ステージング → コミット（例：`05-practice-1: 学習メモを追加`）
5. `Push`
6. GitHub で PR を作成（base=`develop`、compare=`feature/05-practice-1`）
7. PR 本文に「目的・変更点・確認方法」を記入
8. PR をマージ
9. ローカルで `develop` をチェックアウト → `Pull`

### 合格条件

- PR が `Merged` になっている
- ローカル `develop` の `History` にマージ結果が見える

## 5. 模擬課題2：連続提出（ルーティン定着）

### ゴール

1つ目の課題をマージした直後に、2つ目の課題を同じ手順で提出する。

### 手順

1. `develop` をチェックアウト → `Pull`（模擬課題1のマージを取り込む）
2. `develop` から `feature/05-practice-2` を作成
3. 新しいファイル `notes.md` を作成し、今日の学習の感想を書く
4. ステージング → コミット（例：`05-practice-2: notes.mdを追加`）
5. `Push`
6. GitHub で PR を作成（base=`develop`、compare=`feature/05-practice-2`）
7. PR 本文を記入 → マージ
8. ローカル `develop` を `Pull` で更新

### 合格条件

- 2つ目の PR も `Merged` になっている
- ローカル `develop` に両方のマージ結果が見える

## 6. つまずいたら

| 症状 | 参照先 |
|------|--------|
| `main` で作業してしまった | 第3章「トラブル：main で作業してしまった」 |
| プッシュできない（認証エラー） | 第7章「認証エラー」 |
| コンフリクトが出た | 第6章 |
| PR が作れない | 第7章「PRが作れない」 |

## 7. AIに聞いてみよう

```text
「6ステップのどこで止まってる？（状況：___）次にやることを1つだけ教えて」
「模擬課題1のPR本文を作って。目的/変更点/確認方法で短く」
「2つ目の課題を始める前に develop の Pull を忘れた。このまま進めて大丈夫？」
```

## 8. チェックリスト

- [ ] 6ステップを見ずに順番通りに実行できる
- [ ] 提出前チェックリストの項目を説明できる
- [ ] 2つの模擬課題を連続で完走できた

---

## 課題提出

この章には提出課題があります。

1. 上記の模擬課題1・2を完了する
2. GitHub で `feature/05-submission-workflow` ブランチを作成し、PRを作成
3. [AI総合レビューツール](https://ai.studio/apps/drive/1AMqIqU4Bio4te7AWh5dly1Qzp7CesqP9?fullscreenApplet=true) でレビューを実行
4. 問題がなければ、スプレッドシートに **PR URL** と **完了日** を記入
