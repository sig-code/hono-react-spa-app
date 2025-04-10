import { createTheme, MantineColorsTuple, MantineThemeOverride } from '@mantine/core';

// .clinerules から取得したブランドカラー
const primary: MantineColorsTuple = [
  '#E6F0FF',
  '#CCE0FF',
  '#99C2FF',
  '#66A3FF',
  '#3894FF', // メインカラー
  '#2A7ACC',
  '#1C5999',
  '#0D3D66',
  '#052033',
  '#000A11'
];

const warning: MantineColorsTuple = [
  '#FFEBEB',
  '#FFD6D6',
  '#FFADAD',
  '#FF8585',
  '#FF5252', // メインカラー
  '#CC4242',
  '#993131',
  '#662121',
  '#331010',
  '#110505'
];

const accent: MantineColorsTuple = [
  '#E6FAFA',
  '#CCF5F5',
  '#99EBEB',
  '#66E0E0',
  '#29C7C7', // メインカラー
  '#219F9F',
  '#197777',
  '#104F4F',
  '#082727',
  '#020D0D'
];

// Mantineテーマの作成
export const theme: MantineThemeOverride = createTheme({
  colors: {
    primary,
    warning,
    accent,
  },
  primaryColor: 'primary',
  fontFamily: 'M PLUS Rounded 1c, sans-serif',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  radius: {
    xs: '2px',
    sm: '4px',
    md: '5px', // .clinerules の button radius
    lg: '8px',
    xl: '12px',
  },
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '15px', // .clinerules の base spacing
    lg: '20px',
    xl: '30px',
  },
  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 5px rgba(0, 0, 0, 0.05)',
    md: '0 2px 10px rgba(0, 0, 0, 0.1)', // .clinerules の default shadow
    lg: '0 4px 15px rgba(0, 0, 0, 0.15)',
    xl: '0 6px 20px rgba(0, 0, 0, 0.2)',
  },
  headings: {
    fontFamily: 'M PLUS Rounded 1c, sans-serif',
    fontWeight: '700', // .clinerules の bold weight
    sizes: {
      h1: { fontSize: '2rem' },
      h2: { fontSize: '1.75rem' },
      h3: { fontSize: '1.5rem' },
      h4: { fontSize: '1.25rem' },
      h5: { fontSize: '1.125rem' },
      h6: { fontSize: '1rem' },
    },
  },
  // コンポーネント単位でスタイルをオーバーライド
  components: {
    // すべてのテキスト関連コンポーネントにフォントを適用
    Text: {
      defaultProps: {
        ff: 'M PLUS Rounded 1c, sans-serif',
      },
    },
    Button: {
      defaultProps: {
        ff: 'M PLUS Rounded 1c, sans-serif',
      },
    },
    Input: {
      defaultProps: {
        ff: 'M PLUS Rounded 1c, sans-serif',
      },
    },
    Select: {
      defaultProps: {
        ff: 'M PLUS Rounded 1c, sans-serif',
      },
    },
    Textarea: {
      defaultProps: {
        ff: 'M PLUS Rounded 1c, sans-serif',
      },
    },
  },
  // カスタムプロパティは別途定義
});
