// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    backgroundColorSecondary: string;
    splashScreenBackgroundColor: string;
    textColorPrimary: string;
    textColorSecondary: string;
    textColorAction: string;
    accentColor: string;
    accentColorPressed: string;
    logoColor: string;
    borderColorLight: string;
    borderColorFocus: string;
    borderColorBlur: string;
    dangerColor: string;
    transparent10: string;
    transparent30: string;
    transparent100: string;
  }
}
