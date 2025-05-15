// Color system with multiple shades
export const colorSystem = {
  primary: {
    100: '#E6F2FF',
    200: '#CCE5FF',
    300: '#99CBFF',
    400: '#66B0FF',
    500: '#007AFF', // Primary color
    600: '#0062CC',
    700: '#004999',
    800: '#003166',
    900: '#001833',
  },
  secondary: {
    100: '#EEFAFF',
    200: '#DCF5FE',
    300: '#B9EBFD',
    400: '#97E0FC',
    500: '#5AC8FA', // Secondary color
    600: '#28A0D8',
    700: '#0078B5',
    800: '#005992',
    900: '#003A5F',
  },
  accent: {
    100: '#FFE9ED',
    200: '#FFD2DB',
    300: '#FFA5B8',
    400: '#FF7994',
    500: '#FF2D55', // Accent color
    600: '#E60033',
    700: '#B30028',
    800: '#80001C',
    900: '#4D0011',
  },
  success: {
    100: '#E6F9ED',
    200: '#CCF2DA',
    300: '#99E6B5',
    400: '#66D990',
    500: '#34C759', // Success color
    600: '#28A745',
    700: '#1E7E34',
    800: '#145523',
    900: '#0A2C11',
  },
  warning: {
    100: '#FFF9E6',
    200: '#FFF2CC',
    300: '#FFE699',
    400: '#FFD966',
    500: '#FFCC00', // Warning color
    600: '#E6B800',
    700: '#B38F00',
    800: '#806600',
    900: '#4D3D00',
  },
  error: {
    100: '#FFEEEE',
    200: '#FFDDDD',
    300: '#FFBBBB',
    400: '#FF9999',
    500: '#FF3B30', // Error color
    600: '#CC2F26',
    700: '#99231D',
    800: '#661713',
    900: '#330C0A',
  },
  gray: {
    100: '#F5F5F7',
    200: '#EBEBED',
    300: '#D6D6D8',
    400: '#C7C7C9',
    500: '#8E8E93',
    600: '#636366',
    700: '#48484A',
    800: '#2C2C2E',
    900: '#1C1C1E',
  },
};

export const lightTheme = {
  body: colorSystem.gray[100],
  text: colorSystem.gray[900],
  textSecondary: colorSystem.gray[600],
  primary: colorSystem.primary[500],
  primaryLight: colorSystem.primary[400],
  primaryDark: colorSystem.primary[600],
  secondary: colorSystem.secondary[500],
  secondaryLight: colorSystem.secondary[400],
  secondaryDark: colorSystem.secondary[600],
  accent: colorSystem.accent[500],
  accentLight: colorSystem.accent[400],
  accentDark: colorSystem.accent[600],
  success: colorSystem.success[500],
  warning: colorSystem.warning[500],
  error: colorSystem.error[500],
  card: '#FFFFFF',
  cardHover: colorSystem.gray[200],
  border: colorSystem.gray[300],
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const darkTheme = {
  body: colorSystem.gray[900],
  text: colorSystem.gray[100],
  textSecondary: colorSystem.gray[400],
  primary: colorSystem.primary[500],
  primaryLight: colorSystem.primary[400],
  primaryDark: colorSystem.primary[600],
  secondary: colorSystem.secondary[500],
  secondaryLight: colorSystem.secondary[400],
  secondaryDark: colorSystem.secondary[600],
  accent: colorSystem.accent[500],
  accentLight: colorSystem.accent[400],
  accentDark: colorSystem.accent[600],
  success: colorSystem.success[500],
  warning: colorSystem.warning[500],
  error: colorSystem.error[500],
  card: colorSystem.gray[800],
  cardHover: colorSystem.gray[700],
  border: colorSystem.gray[700],
  shadow: 'rgba(0, 0, 0, 0.5)',
};

// Spacing system based on 8px
export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
  xxxl: '80px',
};

// Media breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};