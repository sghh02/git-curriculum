# PRで課題を提出する

> 提出ブランチ：`feature/04-pull-request`（PRのbase：`develop`）

**前提**：前章で feature ブランチを作ってプッシュできること。

## 1. この章のゴール

- `feature` → `develop` の PR を GitHub で作成できる
- PR に「目的・変更点・確認方法」を書ける
- セルフレビュー（提出前の見直し）のやり方がわかる

## 2. 用語

| 用語 | 意味 |
|------|------|
| **PR（Pull Request）** | 「この変更を取り込んでください」という提出物 |
| **base** | 取り込み先（この運用では `develop`） |
| **compare** | 提出元（自分の `feature/課題名`） |
| **セルフレビュー** | 提出前に自分で差分を読み直すこと |

## 3. 操作手順

### 3-1. PR を作る前のチェック（1分で事故防止）

- [ ] 今いるブランチが `feature/...` になっている
- [ ] 変更はコミット済み（`File Status` が空）
- [ ] `Push` 済みで GitHub に `feature/...` が見える

### 3-2. GitHub で PR を作成する

1. GitHub でリポジトリを開く
2. 上部の `Pull requests` をクリック
3. `New pull request` をクリック
4. **base** を `develop` にする
5. **compare** を `feature/課題名` にする
6. `Create pull request` をクリック

base と compare は画面上部のドロップダウンで選びます（左が base、右が compare）。

### 3-3. PRタイトルと本文を書く

**タイトル**：「課題名 + 何をしたか」（例：`task1: READMEに自己紹介を追加`）

**本文テンプレ**（そのまま使ってOK）：

```md
## 目的
（例）課題1の提出のため、READMEに自己紹介を追加しました。

## 変更点
- （例）README.md に自己紹介を追記

## 確認方法
README.md を開いて自己紹介が表示されることを確認してください。
```

このリポジトリには PR テンプレ（`.github/pull_request_template.md`）が入っているので、PR を作ると最初からフォーマットが表示されます。

### 3-4. セルフレビュー（Files changed を読む）

1. PR 画面の `Files changed` タブをクリック
2. 変更差分（diff）を上から読む
3. チェック観点：
   - 余計なファイルが混ざっていないか
   - 誤字脱字がないか
   - 課題の要件を満たしているか

### 3-5. 修正が必要になったら

PR は作り直さなくてOKです。

1. お使いのエディタで修正 → Sourcetree でコミット → プッシュ
2. PR に自動で追加コミットが反映される

### 3-6. マージ後のローカル更新

PR がマージされたら、ローカルも最新にします。

1. Sourcetree で `develop` をチェックアウト
2. 上部の `Pull` をクリック
3. （余裕があれば）`feature/...` を右クリック → `Delete`

## 4. よくあるミス

| 症状 | 対処 |
|------|------|
| base が `main` になっている | ドロップダウンで `develop` に変更 |
| GitHub に `feature/...` が出ない | Sourcetree で `Push` できているか確認 |
| PR に「Conflicts」と出た | 第6章で解決方法を学びます |

## 5. AIに聞いてみよう

```text
「PR画面の base/compare は base=___ / compare=___。正しい？」
「PR本文を作って。変更ファイルは（___）、やったことは（___）」
「Files changed を見ている。余計なファイルが混ざってないかチェックポイントを教えて」
```

## 6. ハンズオン課題

1. 前章で作った `feature/...` ブランチで何か変更をコミット・プッシュ
2. GitHub で `feature/...` → `develop` の PR を作成
3. PR 本文に「目的・変更点・確認方法」を記入
4. `Files changed` でセルフレビュー
5. PR をマージ（メンターがマージする場合は指示に従う）
6. ローカルで `develop` をチェックアウト → `Pull`

**合格条件**：
- PR の base が `develop`、本文に3点セットが書けている
- マージ後、ローカル `develop` の `History` にマージ結果が見える

## 7. チェックリスト

- [ ] PR の目的（なぜ挟むか）を説明できる
- [ ] base=`develop` / compare=`feature/...` を選べる
- [ ] PR 本文に「目的・変更点・確認方法」を書ける

---

## 課題提出

この章には提出課題があります。

1. 上記のハンズオン課題を完了する
2. GitHub で `feature/04-pull-request` ブランチを作成し、PRを作成
3. [AI総合レビューツール](https://ai.studio/apps/drive/1AMqIqU4Bio4te7AWh5dly1Qzp7CesqP9?fullscreenApplet=true) でレビューを実行
4. 問題がなければ、スプレッドシートに **PR URL** と **完了日** を記入
