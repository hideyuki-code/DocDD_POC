# 型定義 (`types/index.ts`) 詳細

-   **役割**: プロジェクト全体で使用するTypeScriptの型を定義する。

## 主要な型定義

```typescript
// docs/02_基本設計/images/lesson_list_ui.png を参考にしたステータス型
export type LessonStatus = 'ongoing' | 'accepting' | 'full'; // 例: 「進行中」「受付中」「満席」

export interface Lesson {
  id: string;
  name: string;
  status: LessonStatus;
  // UIイメージにあれば time, instructor, capacity, reserved も追加検討
  time?: string; // 例: "10:00-11:00"
  instructor?: string;
  capacity?: number;
  reserved?: number;
}

// 注意: 以前のデータモデル設計にあった Attendee 関連の型は、
// 現在のデモスコープでは使用しないためここでは省略しています。
```

## データモデルの基本構造 (参考)

### レッスンモデル (Lesson)
| 項目名       | データ型 | 説明                                     |
|--------------|----------|------------------------------------------|
| id           | string   | レッスンの一意識別子                       |
| name         | string   | レッスン名                               |
| status       | string   | ステータス (例: "ongoing", "accepting", "full") |
| time         | string?  | レッスン時間 (例: "10:00-11:00") (オプション) |
| instructor   | string?  | 担当インストラクター名 (オプション)        |
| capacity     | number?  | 定員数 (オプション)                        |
| reserved     | number?  | 予約数 (オプション)                        | 