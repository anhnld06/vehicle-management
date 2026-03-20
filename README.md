# 車両管理システム (Vehicle Management System)

日本企業向けの車両管理ダッシュボードです。Next.js (App Router) と Ant Design で構築されています。

## 技術スタック

| 技術 | バージョン |
|------|------------|
| Next.js | 14 (App Router) |
| React | 18 |
| TypeScript | 5 |
| Ant Design | 5 |
| Recharts | 2 |

## 機能

- **ダッシュボード**: KPIサマリー、各種グラフ、車両一覧、アラート
- **車両管理**: 車両の一覧・検索・フィルター
- **予約管理**: 予約の確認・管理
- **整備管理**: 整備スケジュール・履歴
- **設定**: システム設定

### ダッシュボード詳細

- **KPIサマリー**: 車両総数、使用中、利用可能、整備中
- **グラフ**: ステータス分布（円グラフ）、利用状況（折れ線）、予約頻度（棒グラフ）
- **車両一覧テーブル**: 検索、フィルター、ページネーション
- **アラート**: 整備予定車両、予約競合

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | ESLint 実行 |

## プロジェクト構成

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ダッシュボード
│   ├── globals.css         # グローバルスタイル
│   ├── vehicles/           # 車両管理
│   ├── bookings/           # 予約管理
│   ├── maintenance/        # 整備管理
│   └── settings/           # 設定
├── components/
│   ├── layout/             # レイアウト（AppLayout, PlaceholderPage）
│   ├── dashboard/          # ダッシュボードコンポーネント
│   └── providers/          # プロバイダー（AntdProvider）
├── data/
│   └── mockData.ts         # モックデータ
└── types/
    └── vehicle.ts          # 型定義
```

## ライセンス

Private
