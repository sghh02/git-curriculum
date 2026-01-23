# 05 コンフリクトの理解と解決

## 1. この章のゴール
- コンフリクトが起きる理由を説明できる。
- 意図的にコンフリクトを起こして解決できる。
- コンフリクトは怖くない理由を言語化できる。

## 2. 概念の説明（図や比喩を使ってわかりやすく）
- 同じ行に別々の修正が入ると、Git は「どちらが正しいか決められない」ため止まります。
- コンフリクトは「二人が同じホワイトボードを同時に書き換えた状態」。

## 3. 実際の操作手順（git コマンド）
1. develop を最新化する。
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. feature ブランチ A を作成して同じ行を変更する。
   ```bash
   git checkout -b feature/conflict-a
   echo "line from A" >> notes.md
   git add notes.md
   git commit -m "Add line from A"
   git push -u origin feature/conflict-a
   ```
3. feature ブランチ B を作成して同じ行を変更する。
   ```bash
   git checkout develop
   git checkout -b feature/conflict-b
   echo "line from B" >> notes.md
   git add notes.md
   git commit -m "Add line from B"
   git push -u origin feature/conflict-b
   ```
4. A を develop にマージする。
   ```bash
   git checkout develop
   git merge feature/conflict-a
   git push origin develop
   ```
5. B を develop にマージしてコンフリクトを発生させる。
   ```bash
   git merge feature/conflict-b
   ```
6. コンフリクトを解決して commit する。
   ```bash
   git status
   # ファイルを編集してコンフリクトマーカーを解消
   git add notes.md
   git commit -m "Resolve conflict in notes"
   ```

## 4. よくあるミス・つまずきポイント
- コンフリクトマーカー（`<<<<<<`）を残したまま commit してしまう。
- どちらの変更を採用するか判断せずに片方を消してしまう。
- マージ前に develop を最新化していない。

## 5. AIに聞いてみよう（質問例）
- 「コンフリクトが起きる仕組みを図解風に説明して」
- 「コンフリクト解消時に気をつけるポイントは？」
- 「コンフリクトが怖くない理由を初心者向けに説明して」

## 6. ハンズオン課題（成果物提出を想定）
- チームメンバーを想定し、同じファイルの同じ行を2つの feature で編集する。
- コンフリクトを解消して develop に反映し、PR で解決内容を説明する。

## 7. チェックリスト（理解確認）
- [ ] コンフリクトの原因を説明できる。
- [ ] コンフリクトの解消手順を説明できる。
- [ ] コンフリクトが怖くない理由を説明できる。
