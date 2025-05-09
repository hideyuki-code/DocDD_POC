# `StatusBadge` テスト設計 (`components/common/StatusBadge.test.tsx`)

## 1. テスト方針 (再掲)
- **単体テスト**: コンポーネントの機能を個別検証
- **テストツール**: Jest + React Testing Library

## 2. テスト対象と観点
- `components/common/StatusBadge.tsx`
- 各ステータス（例: 'ongoing', 'accepting', 'full'）に応じた正しいテキストが表示されること。
- 各ステータスに応じた正しい色（TailwindCSSクラス）が適用されること。

## 3. テストパターン
- `status` prop が `'ongoing'` の場合:
  - "進行中" （または相当するテキスト）が表示される。
  - 進行中を示すスタイル（例: 緑系の背景色）が適用される。
- `status` prop が `'accepting'` の場合:
  - "受付中" （または相当するテキスト）が表示される。
  - 受付中を示すスタイル（例: 青系の背景色）が適用される。
- `status` prop が `'full'` の場合:
  - "満席" （または相当するテキスト）が表示される。
  - 満席を示すスタイル（例: 赤系の背景色）が適用される。 