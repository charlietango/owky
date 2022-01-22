import { DefaultTheme } from 'styled-components';

const black100 = '#212529';
const black90 = '#343A40';
const black80 = '#495057';
const black70 = '#6C757D';
const black60 = '#ADB5BD';
const black50 = '#CED4DA';
const black40 = '#DEE2E6';
const black30 = '#E9ECEF';
const black20 = '#F8F9FA';

const lightTheme: DefaultTheme = {
  backgroundColor: '#FFFFFF',
  backgroundColorSecondary: '#E9ECEF',
  textColorPrimary: '#212529',
  textColorSecondary: '#6C757D',
  textColorAction: '#FFFFFF',
  accentColor: '#007AFF',
  accentColorPressed: '#0167D6',
  logoColor: '#F8F9FA',
  borderColorLight: '#CED4DA',
  borderColorFocus: '#212529',
  borderColorBlur: '#6C757D',
  dangerColor: '#FF3B30',
  transparent10: '#ffffff33',
  transparent30: '#ffffff77',
  transparent100: '#ffffff00',
};

const darkTheme: DefaultTheme = {
  backgroundColor: '#212529',
  backgroundColorSecondary: '#343A40',
  textColorPrimary: '#F8F9FA',
  textColorSecondary: '#E9ECEF',
  textColorAction: '#FFFFFF',
  accentColor: '#007AFF',
  accentColorPressed: '#0167D6',
  logoColor: '#F8F9FA',
  dangerColor: '#E70C00',
  borderColorLight: '#CED4DA',
  borderColorFocus: '#212529',
  borderColorBlur: '#6C757D',
  transparent10: '#ffffff33',
  transparent30: '#ffffff77',
  transparent100: '#ffffff00',
};

export { lightTheme, darkTheme };
