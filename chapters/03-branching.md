# ブランチで安全に作業する

> 提出ブランチ：`feature/03-branching`（PRのbase：`develop`）

> **補足**：本文中の `feature/03-branch-practice` は練習用の例です。章末で提出するときは `feature/03-branching` を使います。

**前提**：前章でコミット・プッシュができること。

## 1. この章のゴール

- `main / develop / feature` の3本の役割を説明できる
- `develop` から `feature/課題名` を作り、安全に作業できる
- 「main で直接作業しない理由」を説明できる
- `engineer-design.md` を安心して改善するために、feature ブランチを使う意味を理解する

## 2. 用語

| 用語 | 意味 |
|------|------|
| **ブランチ** | 作業用の別ルート。安全に試せる「別コピーの道」 |
| **チェックアウト** | ブランチを切り替えること |
| **マージ** | 別ブランチの変更を取り込んで合体すること |

## 3. Gitflow 簡易版：3本のブランチ

| ブランチ | たとえ | 役割 |
|----------|--------|------|
| `main` | 提出済みの完成作品 | 最終成果物（基本は触らない） |
| `develop` | みんなの作業を集める作業台 | 開発のベース |
| `feature/課題名` | あなた専用の机 | 課題ごとの作業ブランチ |

ルール：**`main` には直接コミットしない。** `feature` で作業 → PR で `develop` に統合 → 完了したら `main` に反映。

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

### 4-3. feature で作業 → コミット → プッシュ

前章で学んだ手順と同じです。

1. お使いのエディタ（例：VS Code）で `engineer-design.md` を編集 → 保存
2. Sourcetree の `File Status` → ステージング → コミット
3. `Push`（`feature/03-branch-practice` にチェック → `Push`）

この章では、AIに「別案」を出してもらい、その別案を **安全に試すための作業台** として feature を使う感覚を持てれば十分です。

### 4-4. マージ後の後片付け

PR がマージされたら（PR の作り方は次章で学びます）：

1. `develop` をチェックアウト → `Pull`（最新化）
2. 余裕があれば：`feature/03-branch-practice` を右クリック → `Delete`

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
「engineer-design.md の “3か月後の到達イメージ” に対して別案を1つ出して。別ブランチで試したい」
```

## 7. ハンズオン課題

1. `develop` をチェックアウトして `Pull`
2. `develop` から `feature/03-branch-practice` を作成
3. `engineer-design.md` の1セクションをAIと相談しながら改善 → コミット → プッシュ
4. GitHub 上で `feature/03-branch-practice` ブランチが見えることを確認

**合格条件**：GitHub に `feature/03-branch-practice` ブランチが存在し、コミットが積まれている。

## 8. チェックリスト

- [ ] `main / develop / feature` の役割を説明できる
- [ ] `develop` から feature を作って作業できた
- [ ] `main` で作業しない理由を説明できる
- [ ] 「別案を安全に試すために feature を使う」と説明できる

---

## 課題提出

この章には提出課題があります。

1. 上記のハンズオン課題を完了する
2. GitHub で `feature/03-branching` ブランチを作成し、PRを作成
3. [AI総合レビューツール](https://ai.studio/apps/drive/1AMqIqU4Bio4te7AWh5dly1Qzp7CesqP9?fullscreenApplet=true) でレビューを実行
4. 問題がなければ、スプレッドシートに **PR URL** と **完了日** を記入
