import { createGlobalStyle, ThemeProvider } from "styled-components";

const CSSReset = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  input, button, textarea {
    outline: none;
    border: none;
    background: no-repeat;
    font-family: 'Poppins', sans-serif
  }
  textarea {
    resize: none
  }
  input, select, option, textarea {
    font-family: "Poppins", sans-serif
  }
  input, button, textarea, select {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    border: none
  }

  abbr, a {
    text-decoration: none
  }
`;

const theme = {
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.375rem", // 22px
    "3xl": "1.5rem", // 24px
    "4xl": "1.625rem", // 26px
    "5xl": "1.75", // 28px
    "6xl": "1.875rem", // 30px
    "7xl": "2rem", // 32px
    "8xl": "2.125rem", // 34px
    "9xl": "2.25rem", // 36px
    xxl: "2.375rem", // 38px
  },
  colors: {
    p1: "#237CFB",
    p2: "#3A4569",
    p3: "#D8DCE9",
    p4: "#F7FAFF",
    p6: "#101010",
    p7: "#3A4569",
    g1: "linear-gradient(98.54deg, #237CFB 0%, #4F97FF 0%, #4F97FF 100%)",
  },
  fontWeight: {
    bold: 700,
    "semi-bold": 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
};

const StyledComponentTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);

export default StyledComponentTheme;
