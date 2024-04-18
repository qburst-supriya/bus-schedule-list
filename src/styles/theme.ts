// import styled, {css} from 'styled-components'

export interface Theme {
    '--primary': Color;
    '--secondary': Color;
    '--background': Color;
    '--text': Color;
}

// enum Color {
//     LIGHT_GREEN = "#33ff99",
//     LIGHT_BLUE = "#66b2ff",
//     LIGHT_GRAY = "#c0c0c0",
//     WHITE = "#FFF",
//     BLACK = "#000",
//   }

  export type ThemeType = 'dark' | 'light';

// button.defaultProps = {
//     theme: {
//       main: "#BF4F74"
//     }
//   }

  export const THEMES: Record<ThemeType, Theme> = {
    light: {
      "--primary": Color.LIGHT_BLUE,
      "--secondary": Color.LIGHT_GREEN,
      "--background": Color.LIGHT_GRAY,
      "--text": Color.BLACK

    },
    dark: {
        "--primary": Color.LIGHT_BLUE,
        "--secondary": Color.LIGHT_GREEN,
        "--background": Color.LIGHT_GRAY,
        "--text": Color.BLACK
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