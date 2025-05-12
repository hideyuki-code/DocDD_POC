---
description: 
globs: 
alwaysApply: true
---
# プロジェクト構成・開発方針

## プロジェクトの目的

このプロジェクトは、AI駆動開発のデモンストレーションを行うことを目的としています。
フィットネス/ヨガスタジオの管理者とインストラクター向けの管理システムにおける「本日のレッスン一覧」機能の実装を通じて、ドキュメントベースでのAIとの協調作業を探求します。

## 技術スタック

- フロントエンドフレームワーク: Next.js 14（App Router使用）
- スタイリング: TailwindCSS
- 言語: TypeScript 5.0以上
- テストフレームワーク: Jest + React Testing Library
- データソース（初期フェーズ）: 静的JSONファイル
- パッケージマネージャー: npm または yarn
- 開発環境推奨: VS Code + Cursor AI

## 開発環境の立ち上げ

```
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
# ブラウザで http://localhost:3000 を開く
```

## テストの実行方法

```
# テストの実行
npm test
# または
npx jest
```

- テストコードは **`docdd-poc/src/tests` ディレクトリ内**に、元のソースコードのディレクトリ構造を反映する形で配置してください。
- **Next.js App Router内のコンポーネントやページ (`src/app/...`) のテストファイルも、このルールに従い、対応するパス構造を `src/tests/` 以下に作成します。**
- **コンポーネントやページファイルと同階層に `__tests__` ディレクトリを作成する方式は採用しません。**
- 例1: `src/components/Button.tsx` のテストは `src/tests/components/Button.test.tsx` に配置します。
- 例2: `src/app/schedule/today/page.tsx` のテストは `src/tests/app/schedule/today/page.test.tsx` に配置します。
- Jest + React Testing Library でユニットテストが実行されます。

## テスト運用ルール

- テストを作成した場合は、必ず全てのテストがpassするまで検証してください。
- テストが失敗している状態でのコミット・プッシュは禁止です。
- package.json には必ず test スクリプトを含めること:
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest"
  }
  ```
- **テストケースの記述言語**:
  - Jestの `describe` ブロックや `it` ブロックのテストケース名は、日本語で記述することを推奨します。これにより、テストの意図が明確になり、チーム内のコミュニケーションが円滑になることが期待されます。
    ```typescript
    // 例
    describe('レッスン一覧表示機能', () => {
      it('データ取得成功時、レッスン情報が正しく表示されること', () => {
        // ... test code ...
      });

      it('データ取得失敗時、エラーメッセージが表示されること', () => {
        // ... test code ...
      });
    });
    ```
  - ただし、エラーメッセージの期待値など、コード内で扱う文字列リテラルについては、対象システムの言語仕様（日本語または英語）に合わせます。

## Jest設定ルール

- jest.config.mjs には必ず以下の設定を含めること:
  - moduleNameMapper 設定でパスエイリアス（@/）の解決を行う
  ```javascript
  const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
  }
  ```
- モジュールのモック化を行う場合は、適切なモック方法を選択する:
  - 外部モジュールのモック: jest.mock() を使用
  - 内部関数のモック: テスト専用の内部関数（例: _internals）を使用して制御する

## 開発ディレクトリ運用ルール

- **作業はすべて `docdd-poc` ディレクトリ内で行う**
  - ファイル・ディレクトリ作成は必ず `docdd-poc/` 配下に行う
  - `docs/` ディレクトリは例外的に `docdd-poc` の外（リポジトリ直下）に存在する

- **作業前と作業中に必ず現在のディレクトリを確認する**
  ```bash
  pwd  # 出力が /Users/kitakatahideyuki/Desktop/AI駆動/docdd-poc であることを確認
  ```

- **ディレクトリ・ファイル操作時の安全策**
  - 相対パスを使う場合は特に注意する
  - 不安な場合は絶対パスを使用する
    ```bash
    # 悪い例（カレントディレクトリに依存）
    mkdir -p src/types
    
    # 良い例
    mkdir -p /Users/kitakatahideyuki/Desktop/AI駆動/docdd-poc/src/types
    # または
    cd /Users/kitakatahideyuki/Desktop/AI駆動/docdd-poc && mkdir -p src/types
    ```

- **ディレクトリ作成時の追加安全策**
  - 新しいディレクトリを作成する前に、既存のディレクトリ構造を確認する
  ```bash
  ls -la /Users/kitakatahideyuki/Desktop/AI駆動/docdd-poc  # 既存構造を確認
  ```
  
- **操作後の検証ステップを必ず実行**
  ```bash
  # 単純な確認
  ls -la /Users/kitakatahideyuki/Desktop/AI駆動/docdd-poc/src
  
  # より詳細な確認（特定のディレクトリが正しい場所に作成されたか確認）
  find /Users/kitakatahideyuki/Desktop/AI駆動/docdd-poc -type d -name "components" | grep -v "node_modules"
  ```

- **パス変数の活用**
  - 長いパスは変数に格納して再利用する
  ```bash
  # シェルスクリプトや作業セッションで
  BASE_DIR="/Users/kitakatahideyuki/Desktop/AI駆動/docdd-poc"
  mkdir -p "$BASE_DIR/src/components"
  ```

- **必ずディレクトリ構造図に従う**
  - 上記の「ディレクトリ構造（例）」を常に参照する
  - ファイル配置は設計書と一致させること

## 環境情報

- Next.js 14（App Router）
- TypeScript 5.x
- Tailwind CSS
- Jest + React Testing Library

## 実装の進め方

- `docs/` 配下の設計ドキュメント（要件定義・基本設計・詳細設計）をもとに、アプリの各機能・コンポーネントを実装してください。
- 実装タスクは `docs/開発タスクチェックリスト_最終デモ版.md` にまとめてあります。
- チェックリストに沿って、一つずつ着実に実装・テスト・確認を進めてください。

## チェックリスト運用ルール

- 実装を進める際は必ずチェックリストのタスクに対応するチェックボックスにチェックを入れる
  ```markdown
  - [x] 完了したタスク
  - [ ] まだ完了していないタスク
  ```
- 各タスクは定義された「完了の目安」に到達した段階でチェックを入れること
- テストを伴うタスクは、テストが正常に通過したことを確認してからチェックすること
- 複数のタスクを並行して進めず、1つのタスクを完了させてからチェックを入れ、次のタスクに進むこと
- タスク遂行中にトラブルが発生した場合、該当タスク項目の直下に `*トラブル発生: (Tn) [トラブルの簡単な概要]*` という形式で1行追記し、詳細は後述の「トラブル記録ルール」に従いチェックリスト末尾に記録する。(Tn はトラブル番号)

## トラブル記録ルール

- 実装中に発生したトラブルは必ずチェックリストの最後に記録すること
- チェックリストの各タスク項目に記録したトラブル概要 (Tn) と紐づけて、以下のフォーマットで詳細を記録する:
  ```markdown
  ## 実装中に発生したトラブル
  
  ### トラブル番号 (Tn): [トラブルの簡潔なタイトル]
  - **発生タスク**: [関連するチェックリストのタスク名]
  - **現象**: トラブルの具体的な症状
  - **原因**: 判明した原因
  - **解決方法**: 実施した対応策
  - **教訓**: 次回から気をつけるべき点
  ```
- トラブル解決後も記録は削除せず、プロジェクト全体の知見として保持する
- チーム内で同様のトラブルを防ぐため、できるだけ詳細に記録する
- AIアシスタントは、ユーザーからの指示があった場合、またはタスク完了報告時にトラブル記録の有無を確認し、未記録であれば記録を促す。

## ディレクトリ構造（例）

```
AI駆動/
├── docdd-poc/                # アプリ本体（Next.js, TypeScript, Tailwind CSS）
│   ├── src/                  # アプリのソースコード
│   │   ├── app/              # Next.js App Router用ディレクトリ
│   │   ├── components/       # UIコンポーネント
│   │   ├── lib/              # ライブラリ・サービス層
│   │   ├── types/            # 型定義
│   │   ├── tests/            # テストコード（本体構造を反映）
│   │   └── data/             # 静的データ (例: JSONファイル)
│   ├── public/               # 静的ファイル（画像・アイコン等）
│   ├── node_modules/         # 依存パッケージ
│   ├── .next/                # Next.jsビルド成果物
│   ├── jest.config.mjs       # Jest設定ファイル
│   ├── jest.setup.ts         # Jestセットアップファイル
│   ├── tsconfig.json         # TypeScript設定
│   ├── tailwind.config.ts    # Tailwind CSS設定
│   ├── postcss.config.mjs    # PostCSS設定
│   ├── next.config.mjs       # Next.js設定
│   ├── package.json          # パッケージ管理
│   ├── package-lock.json     # パッケージロック
│   ├── .eslintrc.json        # ESLint設定
│   ├── .gitignore            # Git管理除外ファイル
│   └── ...                   # その他設定ファイル
│
├── docs/                     # ドキュメント（設計・要件・タスク管理等）
│   ├── 01_要件定義/          # 要件定義ドキュメント
│   │   └── 要件定義.md
│   ├── 02_基本設計/          # 基本設計ドキュメント
│   │   ├── 基本設計.md
│   │   └── images/
│   ├── 03_詳細設計/          # 詳細設計ドキュメント
│   │   ├── 設計概要.md
│   │   └── src/              # 詳細設計ドキュメントもsrc構造を反映
│   │       ├── app/
│   │       ├── components/
│   │       ├── lib/
│   │       ├── tests/      # テスト設計ドキュメント
│   │       └── types/
│   └── 開発タスクチェックリスト_最終デモ版.md # 実装タスク一覧
│
├── README.md                 # プロジェクト概要・セットアップ手順
└── ...                       # その他（必要に応じて追加）
```