// Vercelのサーバーレス関数のエントリーポイント
// このファイルはビルド時にdistディレクトリにコピーされる

// ESMモジュールとして動作するように設定
export * from "../apps/api/dist/index.js";
