# 03 ブランチ運用とマージ

## 1. この章のゴール
- main / develop / feature の役割を説明できる。
- feature ブランチを切って作業し、develop にマージできる。
- なぜ main で直接作業しないのかを説明できる。

## 2. 概念の説明（図や比喩を使ってわかりやすく）
- main は「公開済みの完成版」、develop は「統合作業の場」、feature は「個別の作業台」。
- main で作業するのは「展示中の作品に直接絵の具を塗る」ようなリスクがあるため避けます。

## 3. 実際の操作手順（git コマンド）
1. develop ブランチを作成して移動する。
   ```bash
   git checkout -b develop
   git push -u origin develop
   ```
2. feature ブランチを作成する。
   ```bash
   git checkout -b feature/add-notes
   ```
3. 作業して commit する。
   ```bash
   echo "feature work" >> README.md
   git add README.md
   git commit -m "Add notes section"
   ```
4. develop にマージする。
   ```bash
   git checkout develop
   git merge feature/add-notes
   git push origin develop
   ```

## 4. よくあるミス・つまずきポイント
- main で作業してしまい、提出用の履歴が汚れる。
- feature ブランチを push せずに PR を作れない。
- merge 前に develop を最新化していない。

## 5. AIに聞いてみよう（質問例）
- 「main で作業しない理由を、初心者向けに説明して」
- 「feature ブランチの命名ルールの良い例は？」
- 「develop にマージする前に確認すべきことは？」

## 6. ハンズオン課題（成果物提出を想定）
- `feature/add-profile` ブランチを作成し、自己紹介セクションを追加する。
- develop にマージして push し、GitHub 上で差分が反映されることを確認する。

## 7. チェックリスト（理解確認）
- [ ] main / develop / feature の役割を説明できる。
- [ ] feature ブランチで作業し、develop にマージできた。
- [ ] main で作業しない理由を説明できる。
