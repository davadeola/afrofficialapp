import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#0D0D0D",
  secondary: "#FEFEFE",
  accent1: "#F2E205",
  accent2: "#E97D8A",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "PTSansRegular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: "PTSansBold",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: "PTSansBold",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: "PTSansBold",
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: "PTSansBold",
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: "PTSansRegular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "PTSansRegular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "PTSansRegular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "PTSansRegular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};
