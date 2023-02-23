module.exports = {
  mode: "jit",
  content: ["./**/*.njk"],
  darkMode: "class",
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
      "inset-stroke": "var(--shadow-inset-stroke)",
      "applet-header": "var(--shadow-applet-header)",
      "app-icon": "var(--shadow-app-icon)",
      "btn-basic": "var(--shadow-btn-basic)",
      "btn-basic-inset": "var(--shadow-btn-basic-inset)",
      "btn-highlight": "var(--shadow-btn-highlight)",
      "btn-highlight-inset": "var(--shadow-btn-highlight-inset)",
      "list-inset": "var(--shadow-list-inset)",
      topbar: "var(--shadow-topbar)",
      body: "var(--shadow-body)",
      "body-login": "var(--shadow-body-login)",
      "applet-idle": "var(--shadow-applet-idle)",
      "applet-active": "var(--shadow-applet-active)",
      cursor: "var(--shadow-cursor)",
    },
    dropShadow: {
      "app-icon": "0px 0px 3px hsl(var(--clr-solid) / 30%)",
    },
    backdropBlur: {
      xs: "0.5px",
      sm: "8px",
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
        "applet-bg": "hsl(var(--applet-bg))",
        "applet-bg-base": "hsl(var(--applet-bg-base) / <alpha-value>)",
        divider: "hsl(var(--divider))",
        shade: "hsl(var(--shade))",
        "topbar-bg": "hsl(var(--topbar-bg))",
        wallpaper: "hsl(var(--clr-wallpaper))",
      },
      btn: {
        bg: "hsl(var(--btn-bg))",
        "bg-hover": "hsl(var(--btn-bg-hover))",
        "highlight-bg": "hsl(var(--btn-highlight-bg))",
        "highlight-bg-hover": "hsl(var(--btn-highlight-bg-hover))",
      },
      btnSecondary: {
        bg: "hsl(var(--btn-secondary-bg) / 8%)",
        "bg-hover": "hsl(var(--btn-secondary-bg) / 12%)",
      },
      clr: {
        solid: "hsl(var(--clr-solid))",
        tint: "hsl(var(--clr-tint))",
        neutral: "hsl(var(--clr-neutral))",
      },
    },
    backgroundImage: {
      "dot-pattern-light": "url(/images/dot-pattern-light.svg)",
      "dot-pattern-dark": "url(/images/dot-pattern-dark.svg)",
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
