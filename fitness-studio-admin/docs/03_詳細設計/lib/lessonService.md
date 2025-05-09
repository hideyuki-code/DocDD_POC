# `lessonService.ts` (`lib/lessonService.ts`) 詳細設計

-   **役割**: 静的JSONファイル (`data/lessons.json`) からレッスンデータを読み込み、提供する。
-   **主要関数**:
    -   `getLessons(): Promise<Lesson[]>`:
        -   `data/lessons.json` ファイルを非同期で読み込み、内容をパースして `Lesson[]` 型のデータとして返す。
        -   ファイル読み込み処理を含むため、非同期関数 (async/await) として実装する。
        -   エラーハンドリング（ファイルが存在しない場合、JSONパースに失敗した場合など）を考慮する。
        -   **注意:** Next.jsの環境（サーバーサイドかクライアントサイドか）によって、ファイルの読み込み方法が異なる点に留意する。
            -   サーバーコンポーネントやAPIルートなどサーバーサイドで実行される場合は Node.js の `fs` モジュールを使用可能。
            -   クライアントサイドで直接読み込む場合は `fetch` API や `import data from '../../data/lessons.json'` のような形（Next.jsのバージョンや設定による）を検討。
            -   本デモでは、`app` ディレクトリのページコンポーネント (`page.tsx`) がサーバーコンポーネントとして動作することを想定し、サーバーサイドでのファイル読み込みを基本とする。

- **使用箇所**:
  - `app/schedule/today/page.tsx` (TodayLessonsPage) から呼び出され、レッスンデータを取得するために使用される。