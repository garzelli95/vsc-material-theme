
export type ThemeSetting = {
  id: string;
  name: string;
  type: string;
  scheme: {
    defaultAccent: string;
    secondaryAccent: string;
    background: string;
    backgroundAlt: string;
    contrastBorder: string;
    sidebarForeground: string;
    scrollbars: string;
    comments: string;
    caret: string;
    findHighlight: string;
    foreground: string;
    focusBorder: string;
    guides: string;
    lineNumbers: string;
    invisibles: string;
    lineHighlight: string;
    selection: string;
    shadow: string;
    inputBackground: string;
    inputForeground: string;
    inputBorder: string;
    scrollbarsHover: string;
    statusbarForeground: string;
    listHoverForeground: string;
    tabActiveForeground: string;
    inactiveSelectionBackground: string;
    findMatchBackground: string;
    findMatchHighlightBackground: string;
    findMatchHighlightBorder: string;
    base: {
      white: string;
      red: string;
      green: string;
      blue: string;
      orange: string;
      cyan: string;
      yellow: string;
      purple: string;
      black: string;
    };
    alt: {
      teal: string;
      green: string;
      emerald: string;
      forest: string;
      pink: string;
      lime: string;
    };
  };
};
