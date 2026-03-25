# コンフリクトの理解と解決

> 提出ブランチ：`feature/06-conflict-resolution`（PRのbase：`develop`）

**前提**：第5章まで完了し、課題提出のフローを一通りできること。

## 1. この章のゴール

- コンフリクトが起きる理由を、怖がらずに説明できる
- お使いのエディタ（例：VS Code）でコンフリクトを解決できる
- PRで「Conflicts」が出たときに、自力で対処できる

## 2. 用語

| 用語 | 意味 |
|------|------|
| **コンフリクト** | 同じファイルの同じ場所を別々の変更が書き換えて、Git が自動で決められない状態 |
| **コンフリクトマーカー** | `<<<<<<` `======` `>>>>>>` の記号。エディタで解決する目印 |

たとえるなら「二人が同じホワイトボードの同じ行を同時に書き換えた」状態です。怖く見えますが、やることはシンプルです。

## 3. コンフリクト解決の3ステップ

1. どちらの内容を残すか決める（両方残してもOK）
2. ファイルを整える（マーカーを消す）
3. 解決済みにしてコミット

## 4. Sourcetree でのコンフリクトの見え方

- `Pull` や `Merge` の途中で止まる
- `File Status` に赤いアイコンのファイルが並ぶ
- `Conflicts` の表示が出る

## 5. 解決手順

### 5-1. エディタで編集する

- Sourcetree の `File Status` でコンフリクトファイルをクリック
- エディタで開く（`Resolve Conflicts` / `Open in External Merge Tool` など）
- コンフリクトマーカーが見える：

```
<<<<<<< HEAD
あなたの変更（Current）
=======
取り込み元の変更（Incoming）
>>>>>>> develop
```

- `Current` = 今いるブランチ（あなた側）
- `Incoming` = 取り込み元（例：develop 側）
- エディタに `Accept Current` / `Accept Incoming` ボタンが出る場合はそれを使う
- 出ない場合は、マーカー（`<<<<<<` `======` `>>>>>>` ）を手で消して文章を整える
- 保存する

### 5-2. 解決済みにしてコミット

- Sourcetree に戻る
- ファイルが `Resolved` になっているか確認（なければ `Mark Resolved` を押す）
- ステージング → コミット（例：`Resolve conflict in README`）
- 必要なら `Push`

## 6. PRで「Conflicts」が出たとき

GitHub の PR 画面に `This branch has conflicts` と出たら、「`develop` が進んでいて、`feature` が古い」状態です。

### 手順

1. `develop` をチェックアウト → `Pull`（最新化）
2. `feature/課題名` をチェックアウト
3. 上部の `Merge` → 取り込み元に `develop` を選ぶ → `OK`
4. コンフリクトが出たら上記の手順で解決 → コミット
5. `Push` して GitHub に反映
6. PR 画面を更新して `Able to merge` になればOK

## 7. よくあるミス

| 症状 | 対処 |
|------|------|
| マーカーを残したままコミット | コミット前にファイルを開いて `<<<<<<` が無いか確認 |
| どちらを残すか分からない | 不安ならメンターに相談してOK |
| `develop` を最新化していない | まず `develop` で `Pull` する習慣をつける |

## 8. AIに聞いてみよう

```text
「PRで Conflicts と出た。feature に develop を取り込むクリック順を教えて」
「この衝突部分のテキストを貼るので、どう整えるのが自然か教えて」
「解決したのに Sourcetree の Conflicts が消えない。次にやることを教えて」
```

## 9. ハンズオン課題：コンフリクト練習

### 準備

1. `develop` をチェックアウト → `Pull`
2. `practice.md` を作成し `LINE: original` と書く → コミット → `Push`（develop へ）

### 手順

1. `develop` から `feature/conflict-a` を作成
2. `practice.md` の内容を `LINE: from A` に変更 → コミット → プッシュ → PR（A）を作成
3. `develop` から `feature/conflict-b` を作成
4. `practice.md` の内容を `LINE: from B` に変更 → コミット → プッシュ → PR（B）を作成
5. PR（A）を先にマージ
6. PR（B）に `Conflicts` が出るので、上記の手順で解決
7. PR（B）もマージ
8. ローカル `develop` を `Pull`

### 合格条件

- PR（B）で Conflicts を自分で解決して `Merged` まで到達できた
- 解決コミットが `feature/conflict-b` の履歴に見える

## 10. チェックリスト

- [ ] コンフリクトが起きる理由を説明できる
- [ ] エディタでコンフリクトを解決してコミットできた
- [ ] PR の Conflicts を自力で解消できた

---

## 課題提出

この章には提出課題があります。

1. 上記のハンズオン課題を完了する
2. GitHub で `feature/06-conflict-resolution` ブランチを作成し、PRを作成
3. [AI総合レビューツール](https://ai.studio/apps/drive/1AMqIqU4Bio4te7AWh5dly1Qzp7CesqP9?fullscreenApplet=true) でレビューを実行
4. 問題がなければ、スプレッドシートに **PR URL** と **完了日** を記入
