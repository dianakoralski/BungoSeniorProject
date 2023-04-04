import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontFamily: "Lato, Helvetica, sans-serif",
    color: "#787676",
  },
  tabpanel: {
    border: "2px solid",
    borderColor: "#787676",
    borderBottomRadius: "lg",
    borderTopRightRadius: "lg",
  },
});

// define custom sizes
const sizes = {
  xl: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      fontSize: "xl",
      py: "4",
      px: "6",
    },
    tabpanel: {
      py: "4",
      px: "6",
    },
  }),
};

// define custom variants
const defaultVariant = definePartsStyle((props) => {
  return {
    tab: {
      _selected: {
        fontWeight: "semibold",
        textDecoration: "underline",
        color: "black",
      },
    },
    tablist: {
      borderBottom: "2x solid",
      borderColor: "inherit",
    },
    tabpanel: {
      border: "0px solid",
      textAlign: "center",
    },
  };
});

const variants = {
  default: defaultVariant,
};

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  size: "xl",
  variant: "default",
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
