# `page.tsx` (`app/schedule/today/page.tsx`) 詳細設計

-   **役割**: 本日のレッスン一覧を表示するメインページ。データ取得、状態管理、レッスンアイテムのレンダリングを行う。
-   **入力 (Props)**: なし (Next.js のページコンポーネントとして動作)
-   **出力**: レッスン一覧のUIを画面に表示。
-   **状態 (State)**:
    -   `lessons: Lesson[]`: `lessonService.getLessons()` から非同期で取得したレッスンデータの配列。初期値は空配列 `[]`。
    -   `isLoading: boolean`: レッスンデータ取得中のローディング状態を示すフラグ。初期値は `true`。
    -   `error: Error | null`: データ取得時にエラーが発生した場合のエラーオブジェクト。初期値は `null`。
    -   (オプション) `selectedLessonId: string | null`: ユーザーが何らかの操作で特定のレッスンを選択した場合のID。
-   **主要ロジック**:
    -   マウント時 (`useEffect` フック内) に `lessonService.getLessons()` を呼び出し、レッスンデータを取得。
    -   取得成功時は `lessons` state を更新し、`isLoading` を `false` にする。
    -   取得失敗時は `error` state を更新し、`isLoading` を `false` にする。
    -   `isLoading` が `true` の間はローディング表示を行う。
    -   `error` が存在する場合はエラーメッセージを表示する。
    -   `lessons` 配列をループ処理し、各レッスン情報を表示。各レッスンのステータス表示には `StatusBadge` コンポーネントを利用する。
    -   (オプション) レッスンステータス変更機能がある場合、対応するインタラクションハンドラを実装。 