# git-curriculum

Git / GitHub 学習用プログラム（Markdown）です。`index.json` が目次・メタ情報、`chapters/` が本文になります。
初心者向けに **Sourcetree（GUI）+ VS Code** を前提にし、スクリーンショット無しでも進められるよう文章だけで手順を説明しています。

## Validate

`index.json` と `chapters/` の整合性チェック（パス存在・タイトル一致・`hasAssignment`・提出/完了セクション・提出ブランチ名）:

```bash
node scripts/validate-index.mjs
```

## Structure

- `index.json`: プログラム構造（Unit/lesson）
- `chapters/*.md`: レッスン本文
