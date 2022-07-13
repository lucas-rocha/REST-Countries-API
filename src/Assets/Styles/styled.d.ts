import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    background: {
      primary: string;
      secondary: string;
    };

    colors: {
      primary: string;
      secondary: string;
    };

    shadow: {
      primary: string;
    };

    text: {
      primary: string;
    };
  }
}
