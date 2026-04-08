# 第5章: PRで提出してマージする

> 提出ブランチ：`feature/04-pull-request`（PRのbase：`develop`）

> **補足**：前章までの `feature/...` は練習用です。この章では `feature/04-pull-request` を新しく作って提出します。

**前提**：前章までで、feature ブランチを作ってコミット・プッシュできること。

## 1. この章のゴール

- `feature` → `develop` の PR を GitHub で作成できる
- 提出用ブランチ `feature/04-pull-request` を `develop` から新しく作れる
- PR に「目的・変更点・確認方法」を書ける
- セルフレビュー（提出前の見直し）のやり方がわかる
- `feature` で積んだコミットが、PR をマージすると `develop` に取り込まれると説明できる
- AIで改善した内容を、他人が読める説明に変換できる

## 2. 用語

| 用語 | 意味 |
|------|------|
| **PR（Pull Request）** | 「この変更を取り込んでください」という提出物 |
| **base** | 取り込み先（この運用では `develop`） |
| **compare** | 提出元（自分の `feature/課題名`） |
| **セルフレビュー** | 提出前に自分で差分を読み直すこと |

初心者が混ざりやすいのは、**Push と PR は別物** だという点です。

- **Push**：自分の変更を GitHub に送ること
- **PR**：その変更を `develop` に取り込んでもらうための提案

つまり、Push だけではまだ提出は終わっていません。  
**Push で変更を置き、PR で説明を添えて提出する** と覚えると整理しやすいです。

PR がマージされると、この章で `feature/04-pull-request` に積んだコミットが `develop` に取り込まれます。
この章は「PR を作る章」でもあり、**提出用ブランチの変更を初めて本流に戻す章** でもあります。

## 3. 操作手順

### 3-1. 提出用ブランチを作る

1. Sourcetree で `develop` をチェックアウト
2. 上部の `Pull` をクリックして最新化
3. `Branch` をクリック
4. ブランチ名に `feature/04-pull-request` を入力
5. `Checkout new branch` にチェックを入れて作成

前章までの `feature/...` は練習用なので、ここでは使い回しません。
**提出は毎回 `develop` から新しい feature を切る** と覚えると整理しやすいです。

### 3-2. `engineer-design.md` を追加して1回目のコミットを作る

1. お使いのエディタ（例：VS Code）で、リポジトリ直下に `engineer-design.md` を作成
2. 前のAIプログラムで作った最終成果物の内容を貼り付けて保存
3. Sourcetree の `File Status` で差分を確認 → `Stage`
4. コミットメッセージを書く（例：`engineer-design.md を追加`）
5. `Commit` をクリック

この1回目のコミットでは、**提出する題材をリポジトリに追加する** ことが目的です。

### 3-3. 1か所だけ具体化して2回目のコミットを作る

続けて、`engineer-design.md` の内容を **1か所だけ具体化** して保存します。

おすすめの修正例：

- 「なぜエンジニアを目指すのか」を1文追加する
- 「目指すエンジニア像」を少し具体化する
- 「最初の3か月でやること」を1項目追加する

修正したら、Sourcetree で差分を確認 → `Stage` → コミット（例：`目指すエンジニア像を具体化`）します。

### 3-4. Push して GitHub に提出用ブランチを作る

- 上部の `Push` をクリック
- `feature/04-pull-request` にチェックが入っていることを確認
- `Push` をクリック

GitHub 上で `feature/04-pull-request` が見えることを確認してから、PR 作成に進みます。

### 3-5. PR を作る前のチェック（1分で事故防止）

- [ ] 今いるブランチが `feature/04-pull-request` になっている
- [ ] 変更はコミット済み（`File Status` が空）
- [ ] `Push` 済みで GitHub に `feature/04-pull-request` が見える

### 3-6. GitHub で PR を作成する

1. GitHub でリポジトリを開く
2. 上部の `Pull requests` をクリック
3. `New pull request` をクリック
4. **base** を `develop` にする
5. **compare** を `feature/04-pull-request` にする
6. `Create pull request` をクリック

base と compare は画面上部のドロップダウンで選びます（左が base、右が compare）。

### 3-7. PRタイトルと本文を書く

**タイトル**：「課題名 + 何をしたか」（例：`04-pull-request: engineer-design を追加して目指すエンジニア像を具体化`）

**本文テンプレ**（そのまま使ってOK）：

```md
## 目的
AIと問いから始める学び方で作成した自分のエンジニア設計書を、今回の課題として改善するため。

## 変更点
- engineer-design.md を追加
- engineer-design.md の「〇〇」セクションを修正
- AIに相談して整理した内容を反映

## 確認方法
engineer-design.md を開き、「〇〇」セクションの記述が更新されていることを確認してください。
```

**具体例**：

```md
## 目的
AIと問いから始める学び方で作成した自分のエンジニア設計書の内容を、今回の課題として少し具体化するため。

## 変更点
- engineer-design.md を追加
- engineer-design.md の「目指すエンジニア像」セクションを修正
- 「Webアプリを作れるようになりたい」という表現を、「Spring Boot を使って API を作れるようになりたい」に具体化

## 確認方法
engineer-design.md を開き、「目指すエンジニア像」セクションの内容が具体化されていることを確認してください。
```

最初は「上手なPR本文」を書く必要はありません。  
**何のために直したか / どこを直したか / どう見ればいいか** が書けていれば十分です。

PR は、差分そのものに加えて **説明文もセットで提出する場所** です。  
コミットメッセージより少し広い視点で、「この変更全体で何をしたか」を書くイメージで十分です。

練習用リポジトリに PR テンプレ（`.github/pull_request_template.md`）が入っていれば、それを使ってOKです。  
入っていない場合は、この章の本文テンプレをそのまま貼り付ければ十分です。

### 3-8. セルフレビュー（Files changed を読む）

1. PR 画面の `Files changed` タブをクリック
2. 変更差分（diff）を上から読む
3. チェック観点：
   - 余計なファイルが混ざっていないか
   - 誤字脱字がないか
   - 課題の要件を満たしているか
   - 「思っていた場所」と「実際に変わった場所」が一致しているか

たとえば今回は、`engineer-design.md` の「目指すエンジニア像」を直したつもりなのに、別の段落まで大きく変わっていたら一度立ち止まります。

`Files changed` は「提出直前の見本」です。  
ここで違和感に気づけると、提出ミスをかなり減らせます。

### 3-9. 修正が必要になったら

PR は作り直さなくてOKです。

1. お使いのエディタで修正 → Sourcetree でコミット → プッシュ
2. PR に自動で追加コミットが反映される

### 3-10. PR をマージして、ローカルも更新する

レビューや確認が終わったら、PR をマージします。  
マージは「`feature/04-pull-request` で積んだコミットを `develop` に取り込むこと」です。

そのあと、ローカルも最新にします。

1. Sourcetree で `develop` をチェックアウト
2. 上部の `Pull` をクリック
3. （余裕があれば）`feature/04-pull-request` を右クリック → `Delete`

## 4. よくあるミス

| 症状 | 対処 |
|------|------|
| base が `main` になっている | ドロップダウンで `develop` に変更 |
| GitHub に `feature/...` が出ない | Sourcetree で `Push` できているか確認 |
| PR に「Conflicts」と出た | 第7章で解決方法を学びます |

## 5. AIに聞いてみよう

```text
「PR画面の base/compare は base=___ / compare=___。正しい？」
「PR本文を作って。変更ファイルは（___）、やったことは（___）」
「Files changed を見ている。余計なファイルが混ざってないかチェックポイントを教えて」
「engineer-design.md の変更内容をもとに、PR本文の “目的 / 変更点 / 確認方法” を短く整えて」
```

## 6. ハンズオン課題

1. `develop` から `feature/04-pull-request` を作成
2. `engineer-design.md` を追加してコミットする
3. `engineer-design.md` の1か所を具体化して、2回目のコミットを作る
4. `feature/04-pull-request` を Push し、GitHub で PR を作成
5. PR 本文に「目的・変更点・確認方法」を記入
6. `Files changed` でセルフレビュー
7. PR をマージ（メンターがマージする場合は指示に従う）
8. ローカルで `develop` をチェックアウト → `Pull`

**合格条件**：
- PR の base が `develop`、本文に3点セットが書けている
- マージ後、ローカル `develop` の `History` にマージ結果が見える

## 7. チェックリスト

- [ ] PR の目的（なぜ挟むか）を説明できる
- [ ] base=`develop` / compare=`feature/04-pull-request` を選べる
- [ ] PR 本文に「目的・変更点・確認方法」を書ける
- [ ] `engineer-design.md` の改善理由をPR本文に書ける

---

## 課題提出

この章には提出課題があります。

1. 上記のハンズオン課題を完了する
2. `feature/04-pull-request` を Push し、GitHub で PRを作成
3. [AIプログラムレビュー](https://ai.studio/apps/84d224cb-7de1-44fb-995b-9a5917d25603?fullscreenApplet=true) を実行
4. 問題がなければ、進捗ダッシュボードで **PR URL** と **完了日** を記録
