import React, { Dispatch, ReactNode, SetStateAction } from 'react';

const Color = {
  LIGHT_GREEN: '#33ff99',
  LIGHT_BLUE: '#66b2ff',
  LIGHT_GRAY: '#c0c0c0',
  // WHITE = "#FFF",
  BLACK: '#000',
} as const;
type ColorKey = keyof typeof Color;
type ColorValue = (typeof Color)[ColorKey];

export interface Theme {
  '--primary': ColorValue;
  '--secondary': ColorValue;
  '--leftPanel': ColorValue;
  '--text': ColorValue;
}

export type ThemeType = 'dark' | 'light';

// button.defaultProps = {
//     theme: {
//       main: "#BF4F74"
//     }
//   }

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    '--primary': Color.LIGHT_BLUE,
    '--secondary': Color.LIGHT_GREEN,
    '--leftPanel': Color.LIGHT_GRAY,
    '--text': Color.BLACK,
  },
  dark: {
    '--primary': Color.LIGHT_BLUE,
    '--secondary': Color.LIGHT_GREEN,
    '--leftPanel': Color.LIGHT_GRAY,
    '--text': Color.BLACK,
  },
};

// const dark = {
//   main: "mediumseagreen"
// };

// const light = {
//   main: "mediumseagreen"
// };

// const invertTheme = ({ fg, bg }) => ({
//   fg: bg,
//   bg: fg
// });

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>> | null;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES['light'],
  setCurrentTheme: null,
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('light');
  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
