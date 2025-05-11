# `StatusBadge.tsx` (`components/common/StatusBadge.tsx`) 詳細設計

-   **役割**: レッスンのステータスに応じて、色分けされたバッジ風のUIを表示する。
-   **入力 (Props)**:
    -   `status: LessonStatus`: 表示対象のレッスンのステータス (`'ongoing'`, `'accepting'`, `'full'`)。
-   **出力**: ステータスに応じたテキストとスタイルが適用されたUI要素。
-   **状態 (State)**: なし (Propsに基づいて表示を決定する純粋な表示コンポーネント)。
-   **主要ロジック**:
    -   受け取った `status` prop の値に応じて、表示するテキスト（例: "進行中", "受付中", "満席"）と適用するTailwindCSSのクラス（背景色、文字色など）を決定する。
        -   `ongoing`: 緑系の背景 (例: `bg-green-100 text-green-800`)
        -   `accepting`: 青系の背景 (例: `bg-blue-100 text-blue-800`)
        -   `full`: 赤系の背景 (例: `bg-red-100 text-red-800`)
    -   決定したテキストとスタイルで `<span>` や `<div>` タグをレンダリングする。 