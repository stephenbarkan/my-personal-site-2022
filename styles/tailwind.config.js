module.exports = {
  mode: "jit",
  content: ["./**/*.njk"],
  theme: {
    extend: {
      screens: {
        xs: "501px",
      },
      spacing: {
        15: ".9375rem",
        "max-content": "max-content",
      },
      gridTemplateRows: {
        site: "auto minmax(0,1fr) auto",
      },
      gridTemplateColumns: {
        dl: "min-content 1fr",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      sans: ["var(--font-family)", "sans-serif"],
    },
    fontSize: {},
    borderRadius: {
      sm: "5px",
      DEFAULT: "8px",
      lg: "11px",
      xl: "20px",
      full: "999px",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(.2,.8,.2,1)",
      easeIn: "cubic-bezier(0.38, 0.01, 0.86, 0.52)",
      easeInOut: "ease-in-out",
      bounce: "cubic-bezier(0.34, 0.64, 0, 3.5)",
      "bounce-small": "cubic-bezier(.34, .64, 0, 1.8)",
    },
    boxShadow: {
      // shadows generated https://www.joshwcomeau.com/shadow-palette/
      // oomph: .03, crispy: 0, light position: centered like 1/3 up, resolution .75
      "inset-stroke": "0px 0px 0px 0.6px inset hsl(var(--global-shadow-color) /  15%)",
      "applet-header": "0px 1px 1px 0px hsl(var(--scoped-shadow-color) / 3%), 0px 1px 3px 0px hsl(var(--clr-solid) / 20%), 0px 0px 0px 0.6px hsl(var(--scoped-shadow-color) / 10%), inset 0 1px 2px -1px hsl(var(--applet-header-highlight))",
      "app-icon": "0px 1px 1px 0px hsl(var(--scoped-shadow-color) / 5%), 0px 1px 3px 0px hsl(var(--clr-solid) / 8%), 0 1px 1px 0px inset hsl(var(--applet-header-highlight), 15%), 0 -1px 1px 0px inset hsl(var(--scoped-shadow-color) / 15%), 0px 0px 0px 0.6px hsl(var(--scoped-shadow-color) / 12%)",
      "btn-basic": "0px 1px 2px hsl(var(--scoped-shadow-color) / 10%), 0px 0px 0px 0.6px hsl(var(--scoped-shadow-color) / 15%)",
      "btn-basic-inset": "0px 1px 3px -1px inset hsl(var(--scoped-shadow-color) / 15%), 0px 0px 0px 0.6px hsl(var(--scoped-shadow-color) / 20%)",
      "btn-highlight": "0px 1px 2px hsl(var(--scoped-shadow-color) / 20%), 0px 0px 0px 0.6px hsl(var(--btn-highlight-border) /  80%), 0px 1px 1px 0px hsl(var(--clr-solid) / 80%)",
      "btn-highlight-inset": "0px 1px 1px inset hsl(var(--btn-highlight-border) / 90%), 0px 0px 0px 0.6px hsl(var(--btn-highlight-border))",
      "list-inset": "0px 1px 3px -1px inset hsl(var(--scoped-shadow-color) / 15%), 0px 0px .6px inset hsl(var(--scoped-shadow-color) / 20%)",
      topbar: "0px 1px 1px hsl(var(--global-shadow-color) / 15%), 0px 1px 40px 0px hsl(var(--clr-solid) / 5%), 0px 0px 0px 0.6px hsl(var(--global-shadow-color) / 15%)",
      body: "0px 0px 40px 0px inset hsl(var(--clr-solid) / 20%)",
      "body-login": "0px 0px 120px -40px inset hsl(var(--clr-solid) / 60%)",
      "applet-idle": "0px 1.5px 2.3px hsl(var(--global-shadow-color) / 3%), 0px 3px 4.5px hsl(var(--global-shadow-color) / 8%), 0px 5.9px 8.9px hsl(var(--global-shadow-color) / 12%), 0 0 0 0.6px hsl(var(--global-shadow-color) / 16%)",
      "applet-active":
        " 0px 0px 3.5px hsl(var(--global-shadow-color) / 1%), 0px 0px 6px hsl(var(--global-shadow-color) / 2%), 0px 6px 10px hsl(var(--global-shadow-color) / 4%), 0px 8px 12px hsl(var(--global-shadow-color) / 8%), 0px 10px 16px -2px hsl(var(--global-shadow-color) / 12%), -0.1px 15px 25px -3px hsl(var(--global-shadow-color) / 14%), 0 0 0 0.6px hsl(var(--global-shadow-color) / 16%)",
    },
    dropShadow: {
      "app-icon": "0px 0px 3px hsl(var(--clr-solid) / 30%)",
    },
    backdropBlur: {
      DEFAULT: "20px",
      lg: "60px",
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      inherit: "inherit",
      display: {
        primary: "hsl(var(--display-primary))",
        secondary: "hsl(var(--display-secondary))",
        tertiary: "hsl(var(--display-tertiary))",
        "inverse-primary": "hsl(var(--display-inverse-primary))",
        "inverse-secondary": "hsl(var(--display-inverse-secondary))",
        "inverse-tertiary": "hsl(var(--display-inverse-tertiary))",
        link: "hsl(var(--display-link))",
      },
      ui: {
        "applet-bg": "hsl(var(--applet-bg) / <alpha-value>)",
        divider: "hsl(var(--scoped-shadow-color) / 8%)",
        shade: "hsl(var(--shade))",
        "topbar-bg": "hsl(var(--topbar-bg))",
        wallpaper: "hsl(var(--clr-wallpaper))",
      },
      btn: {
        bg: "hsl(var(--btn-bg))",
        border: "hsl(var(--btn-border))",
        "bg-hover": "hsl(var(--btn-bg-hover))",
        "highlight-bg": "hsl(var(--btn-highlight-bg))",
        "highlight-bg-hover": "hsl(var(--btn-highlight-bg-hover))",
      },
      btnSecondary: {
        bg: "hsl(var(--scoped-shadow-color) / 8%)",
        "bg-hover": "hsl(var(--scoped-shadow-color) / 12%)",
      },
      clr: {
        solid: "hsl(var(--clr-solid))",
        tint: "hsl(var(--clr-tint))",
        neutral: "hsl(var(--clr-neutral))",
      },
    },
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      typingDots: {
        "0%, 100%": {
          transform: "translateY(0)",
          opacity: 1,
        },

        "25%": {
          transform: "translateY(1px)",
        },

        "50%": {
          transform: "translateY(0)",
          opacity: 0.5,
        },

        "75%": {
          transform: "translateY(-1px)",
        },
      },
      loadingBar: {
        "0%": {
          transform: "translateX(-100%)",
        },
        "10%": {
          transform: "translateX(-90%)",
        },
        "35%": {
          transform: "translateX(-50%)",
        },
        "60%": {
          transform: "translateX(-40%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      slideUp: {
        "0%": {
          opacity: 0,
          transform: "translateY(.75rem)",
        },
        "50%": {
          opacity: 1,
        },
        "100%": {
          opacity: 1,
          transform: "translate(0)",
        },
      },
      clearTypingBubble: {
        "0%, 100%": {
          opacity: 0,
          transform: "translateY(.5rem)",
        },
        "15%, 85%": {
          opacity: 1,
          transform: "none",
        },
      },
    },
    animation: {
      spin: "spin 1s infinite linear",
      "spin-slow": "spin 20s infinite linear",
      "typing-dots": "typingDots 1s infinite linear",
      "slide-up": "slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      "clear-typing-bubble": "clearTypingBubble 1.75s linear both",
      "loading-bar": "loadingBar 1.5s linear both",
    },
  },
  variants: {},
  plugins: [],
};
