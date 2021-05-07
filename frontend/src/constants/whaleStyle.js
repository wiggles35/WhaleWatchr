// Consstant styles to stay consistent throughout components
export const fontFamily = {
    black: "Helvetica Neue",
    bold: "HelveticaNeue-Bold",
    extraBold: "'HelveticaNeue-CondensedBold'",
    extraLight: "HelveticaNeue-UltraLight",
    light: "HelveticaNeue-Light",
    medium: "HelveticaNeue-Medium",
    thin: "HelveticaNeue-Thin",
}

export const radius = {
    s: 5,
    m: 8,
    l: 16,
};

export const fontSize = {
    h1: 56,
    h2: 40,
    h3: 28,
    h4: 20,
    paragraph: 14,
    small: 12,
    xs: 10,
};

export const colors = {
    text: "#000",
    primary: "#fff",
    textInput: "#b8e6f5",
    secondary: "#5575e7",
    formAccent: "#3893b0",
    secondaryWashedOut: "#879eed",
    accent: "#fd4d4d",
    accentHover: "#fd6868",
    accentDisabled: "#f5bfbf",
    black: "#000",
};

const textBase = {
    fontFamily: fontFamily.black,
    color: colors.text,
};

export const h1 = {
    ...textBase,
    lineHeight: 90,
    fontSize: fontSize.h1,
    fontWeight: "700",
};

export const h2 = {
    ...textBase,
    lineHeight: 64,
    fontSize: fontSize.h2,
    fontWeight: "700",
};
  
export const h3 = {
    ...textBase,
    lineHeight: 45,
    fontSize: fontSize.h3,
    fontWeight: "700",
};
  
export const h4 = {
    ...textBase,
    lineHeight: 32,
    fontSize: fontSize.h4,
    fontWeight: "700",
};
  
export const paragraph = {
    ...textBase,
    fontWeight: "500",
    fontSize: fontSize.paragraph,
    lineHeight: 22,
};
  
export const paragraphBold = {
    ...paragraph,
    fontWeight: "700",
};
  
export const small = {
    ...textBase,
    fontWeight: "500",
    fontSize: fontSize.small,
    lineHeight: 22,
};
  
export const smallBold = {
    ...small,
    fontWeight: "700",
};
  
export const xsmall = {
    ...textBase,
    fontWeight: "500",
    fontSize: fontSize.xs,
    lineHeight: 16,
};
  
export const xsmallBold = {
    ...xsmall,
    fontWeight: "700",
};