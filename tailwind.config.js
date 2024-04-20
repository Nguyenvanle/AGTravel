/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Cơ bản cho Roboto
        "roboto-black": ["Roboto-Black", "sans-serif"],
        "roboto-black-italic": ["Roboto-BlackItalic", "sans-serif"],
        "roboto-bold": ["Roboto-Bold", "sans-serif"],
        "roboto-bold-italic": ["Roboto-BoldItalic", "sans-serif"],
        "roboto-italic": ["Roboto-Italic", "sans-serif"],
        "roboto-light": ["Roboto-Light", "sans-serif"],
        "roboto-light-italic": ["Roboto-LightItalic", "sans-serif"],
        "roboto-medium": ["Roboto-Medium", "sans-serif"],
        "roboto-medium-italic": ["Roboto-MediumItalic", "sans-serif"],
        "roboto-regular": ["Roboto-Regular", "sans-serif"], // Roboto mà không cần chỉ rõ 'Regular' vì đây là kiểu mặc định
        "roboto-thin": ["Roboto-Thin", "sans-serif"],
        "roboto-thin-italic": ["Roboto-ThinItalic", "sans-serif"],

        "roboto-slab": ["RobotoSlab-Regular", "serif"], // Mặc định cho Roboto Slab
        "roboto-slab-black": ["RobotoSlab-Black", "serif"],
        "roboto-slab-bold": ["RobotoSlab-Bold", "serif"],
        "roboto-slab-extra-bold": ["RobotoSlab-ExtraBold", "serif"],
        "roboto-slab-extra-light": ["RobotoSlab-ExtraLight", "serif"],
        "roboto-slab-light": ["RobotoSlab-Light", "serif"],
        "roboto-slab-medium": ["RobotoSlab-Medium", "serif"],
        // 'roboto-slab-regular' không cần thiết nếu đã có 'roboto-slab'
        "roboto-slab-semi-bold": ["RobotoSlab-SemiBold", "serif"],
        "roboto-slab-thin": ["RobotoSlab-Thin", "serif"],

        "roboto-condensed": ["RobotoCondensed-Regular", "sans-serif"],
        "roboto-condensed-black": ["RobotoCondensed-Black", "sans-serif"],
        "roboto-condensed-black-italic": [
          "RobotoCondensed-BlackItalic",
          "sans-serif",
        ],
        "roboto-condensed-bold": ["RobotoCondensed-Bold", "sans-serif"],
        "roboto-condensed-bold-italic": [
          "RobotoCondensed-BoldItalic",
          "sans-serif",
        ],
        "roboto-condensed-extra-bold": [
          "RobotoCondensed-ExtraBold",
          "sans-serif",
        ],
        "roboto-condensed-extra-bold-italic": [
          "RobotoCondensed-ExtraBoldItalic",
          "sans-serif",
        ],
        "roboto-condensed-extra-light": [
          "RobotoCondensed-ExtraLight",
          "sans-serif",
        ],
        "roboto-condensed-extra-light-italic": [
          "RobotoCondensed-ExtraLightItalic",
          "sans-serif",
        ],
        "roboto-condensed-italic": ["RobotoCondensed-Italic", "sans-serif"],
        "roboto-condensed-light": ["RobotoCondensed-Light", "sans-serif"],
        "roboto-condensed-light-italic": [
          "RobotoCondensed-LightItalic",
          "sans-serif",
        ],
        "roboto-condensed-medium": ["RobotoCondensed-Medium", "sans-serif"],
        "roboto-condensed-medium-italic": [
          "RobotoCondensed-MediumItalic",
          "sans-serif",
        ],
        "roboto-condensed-semi-bold": [
          "RobotoCondensed-SemiBold",
          "sans-serif",
        ],
        "roboto-condensed-semi-bold-italic": [
          "RobotoCondensed-SemiBoldItalic",
          "sans-serif",
        ],
        "roboto-condensed-thin": ["RobotoCondensed-Thin", "sans-serif"],
        "roboto-condensed-thin-italic": [
          "RobotoCondensed-ThinItalic",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
