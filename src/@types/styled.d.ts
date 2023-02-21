import 'styled-components';

interface PaletteColor {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;

    palette: {
      common: {
        dark: string;
        light: string;
      };
      primary: PaletteColor;
      secondary: PaletteColor;
      third: PaletteColor;
      fourth: PaletteColor;
    };

    typography: {
      fontFamily: {
        primary: string;
      };
    };
  }
}
