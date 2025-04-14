import { type MantineColorsTuple, type MantineThemeOverride, createTheme } from "@mantine/core";

// .clinerules から取得したブランド設定
const BRAND = {
  colors: {
    primary: "#3894FF",
    warning: "#FF5252",
    accent: "#29C7C7",
    background: {
      yellow: "#F7D666",
      white: "#FFFFFF",
      lightGray: "#EEEEEE",
    },
    text: {
      dark: "#000000",
    },
  },
  fontFamily: "M PLUS Rounded 1c, sans-serif",
  fontSource: "https://fonts.google.com/specimen/M+PLUS+Rounded+1c",
  fontWeights: {
    medium: 500,
    bold: 700,
  },
  spacing: {
    base: "15px",
  },
  borderRadius: {
    button: "5px",
  },
  shadows: {
    default: {
      color: "#000000",
      opacity: "10%",
      offsetX: "0",
      offsetY: "2px",
      blur: "10px",
      // Mantineで使用するためのCSS形式
      css: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
  },
};

// カラーパレットの生成 - Mantine v7ではインデックス6がデフォルトで使用される
const primary: MantineColorsTuple = [
  "#E6F0FF", // 0: 最も明るい
  "#CCE0FF", // 1
  "#99C2FF", // 2
  "#66A3FF", // 3
  "#3894FF", // 4
  "#2A7ACC", // 5
  BRAND.colors.primary, // 6: デフォルトで使用される色 - ブランドのプライマリカラー
  "#1C5999", // 7
  "#0D3D66", // 8
  "#000A11", // 9: 最も暗い
];

const warning: MantineColorsTuple = [
  "#FFEBEB", // 0: 最も明るい
  "#FFD6D6", // 1
  "#FFADAD", // 2
  "#FF8585", // 3
  "#FF5252", // 4
  "#CC4242", // 5
  BRAND.colors.warning, // 6: デフォルトで使用される色 - ブランドの警告カラー
  "#993131", // 7
  "#662121", // 8
  "#110505", // 9: 最も暗い
];

const accent: MantineColorsTuple = [
  "#E6FAFA", // 0: 最も明るい
  "#CCF5F5", // 1
  "#99EBEB", // 2
  "#66E0E0", // 3
  "#29C7C7", // 4
  "#219F9F", // 5
  BRAND.colors.accent, // 6: デフォルトで使用される色 - ブランドのアクセントカラー
  "#197777", // 7
  "#104F4F", // 8
  "#020D0D", // 9: 最も暗い
];

// Mantineテーマの作成 - Mantine v7に合わせた設定
export const theme: MantineThemeOverride = createTheme({
  // カラーパレットの設定
  colors: {
    primary,
    warning,
    accent,
  },
  // プライマリカラーの設定
  primaryColor: "primary",
  // フォント設定 - より詳細に指定
  fontFamily: BRAND.fontFamily,
  // すべてのテキスト要素に適用されるフォントファミリー
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  // フォントサイズ設定
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  // 角丸設定
  radius: {
    xs: "2px",
    sm: "4px",
    md: BRAND.borderRadius.button, // ボタンの角丸
    lg: "8px",
    xl: "12px",
  },
  // スペーシング設定
  spacing: {
    xs: "5px",
    sm: "10px",
    md: BRAND.spacing.base, // 基本スペーシング
    lg: "20px",
    xl: "30px",
  },
  // シャドウ設定
  shadows: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 5px rgba(0, 0, 0, 0.05)",
    md: BRAND.shadows.default.css, // デフォルトシャドウ
    lg: "0 4px 15px rgba(0, 0, 0, 0.15)",
    xl: "0 6px 20px rgba(0, 0, 0, 0.2)",
  },
  // 見出し設定（シンプルに）
  headings: {
    fontFamily: BRAND.fontFamily,
    fontWeight: "700",
  },
});
