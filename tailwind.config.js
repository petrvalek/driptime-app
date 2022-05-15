module.exports = {
  content: [],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    // ...
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    minHeight: (theme) => ({
      0: "0",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "640px",
        xl: "640px",
        "2xl": "640px",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.375rem",
      xl: "1.8125rem",
      "2xl": "3rem",
    },

    colors: {
      Primary: "#2a5853",
      Secondary: "#f3c872",
      Background: {
        "Base-100": "#fdf6e8",
        "Base-200": "#fbedd0",
      },
      Additional: {
        Water: "#69d2f3",
        Coffee: "#5f3c25",
        GreenGray: "#b6c6be",
      },
      Allerts: {
        Warning: "#f3c872",
        Error: "#eb5757",
        Success: "#6fcf97",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.375rem",
      xl: "1.5rem",
      "2xl": "1.8125rem",
      "3xl": "3rem",
    },
    fontFamily: {
      montserrat: "Montserrat",
      "patrick-hand": "Patrick Hand",
    },
    boxShadow: {
      Default: "0px 8px 24px 0px rgba(0,0,0,0.05)",
    },
    borderRadius: {
      none: "0",
      xs: "0.125rem",
      sm: "0.3125rem",
      default: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
    },
  },
  daisyui: {
    themes: [
      {
        driptime: {
          primary: "#2a5853",
          "primary-content": "#ffffff",

          secondary: "#f3c872",

          accent: "#2a5853",
          "accent-content": "#ffffff",

          neutral: "#191D24",

          "base-100": "#fdf6e8",
          "base-200": "#fbedd0",

          info: "#69d2f3",

          success: "#f3c872",

          warning: "#FBBD23",

          error: "#eb5757",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "none",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
