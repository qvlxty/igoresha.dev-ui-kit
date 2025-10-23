"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  $currentTheme: () => $currentTheme,
  Avatar: () => Avatar,
  AvatarThumb: () => AvatarThumb,
  Badge: () => Badge,
  Button: () => Button,
  Dropdown: () => Dropdown,
  Input: () => Input,
  LARGE_WIDTH_PX: () => LARGE_WIDTH_PX,
  LinkButton: () => LinkButton,
  Loader: () => Loader,
  MOBILE_WIDTH: () => MOBILE_WIDTH,
  Modal: () => Modal,
  NavPanel: () => NavPanel,
  ProgressBar: () => ProgressBar,
  Range: () => Range,
  Switch: () => Switch,
  TABLET_WIDTH: () => TABLET_WIDTH,
  THEME_KEY: () => THEME_KEY,
  TabBar: () => TabBar,
  TextArea: () => TextArea,
  ThemeProvider: () => ThemeProvider,
  loadThemeFx: () => loadThemeFx,
  onLgWidth: () => onLgWidth,
  onMdWidth: () => onMdWidth,
  onSmWidth: () => onSmWidth,
  themeVar: () => themeVar,
  toggleTheme: () => toggleTheme,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(index_exports);

// src/components/Avatar.tsx
var import_styled_components3 = __toESM(require("styled-components"));

// src/theming/ThemeProvider.tsx
var import_styled_components = require("styled-components");
var import_effector_react = require("effector-react");

// src/lib/create-theme-store.ts
var import_effector = require("effector");
var createThemeStore = ({
  d = (0, import_effector.createDomain)(),
  defaultValue,
  key
}) => {
  const $store = d.store(defaultValue);
  const loadFx = d.effect();
  const saveFx = d.effect();
  const toggleEvent = d.event();
  $store.on(loadFx.doneData, (_, d2) => d2).on(saveFx.done, (_, { params }) => params).on(toggleEvent, (s) => s === "light" ? "dark" : "light");
  (0, import_effector.sample)({
    clock: $store.updates,
    target: saveFx
  });
  loadFx.use(() => {
    const d2 = localStorage.getItem(key);
    if (d2 === null) {
      return defaultValue;
    }
    return JSON.parse(d2);
  });
  saveFx.use((p) => {
    localStorage.setItem(key, JSON.stringify(p));
  });
  return {
    loadFx,
    saveFx,
    $store,
    toggleEvent
  };
};

// src/theming/model.ts
var THEME_KEY = "THEME";
var MOBILE_WIDTH = 600;
var TABLET_WIDTH = 900;
var LARGE_WIDTH_PX = 1024;
var onSmWidth = `@media only screen and (max-width: ${MOBILE_WIDTH}px)`;
var onMdWidth = `@media only screen and (max-width: ${TABLET_WIDTH}px)`;
var onLgWidth = `@media only screen and (max-width: ${LARGE_WIDTH_PX}px)`;
var theme = createThemeStore({ defaultValue: "light", key: THEME_KEY });
var $currentTheme = theme.$store;
var loadThemeFx = theme.loadFx;
var toggleTheme = theme.toggleEvent;

// src/theming/themes/light.ts
var lightTheme = {
  backgroundColor: "#FAFAFA",
  contentBg: "#fff",
  fontColor: "#080111",
  accent700: "#5530cf",
  accent600: "#7e51f5",
  accent500: "#a572ff",
  accent400: "#cc95ff",
  accent300: "#f4b9ff",
  default800: "#eff3f5",
  default700: "#dfe6ec",
  default600: "#c0cdd8",
  default500: "#a3b7c7",
  default400: "#90a8bb",
  default300: "#718fa8",
  secondary500: "#29a0e6",
  secondary400: "#125780",
  error500: "#c9403e",
  error400: "#631413"
};

// src/theming/themes/dark.ts
var darkTheme = {
  ...lightTheme,
  backgroundColor: "#15151e",
  contentBg: "#1d1d24",
  fontColor: "#ffffff",
  accent700: "#ccc1f0",
  accent600: "#aa98e7",
  accent500: "#8f76df",
  accent400: "#775ad8",
  accent300: "#5530cf",
  default800: "#15151e",
  default700: "#2a2a3c",
  default600: "#3f3f5a",
  default500: "#8888aa",
  default400: "#a5a5c0",
  default300: "#b5b5d0",
  error: "#F53333"
};

// src/theming/themes/index.ts
var availableThemes = {
  dark: darkTheme,
  light: lightTheme
};

// src/theming/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeProvider = ({ children }) => {
  const theme2 = (0, import_effector_react.useUnit)($currentTheme);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_styled_components.ThemeProvider, { theme: availableThemes[theme2], children });
};

// src/theming/helpers.ts
var import_react = __toESM(require("react"));
var import_styled_components2 = require("styled-components");
var useTheme = () => {
  const theme2 = import_react.default.useContext(import_styled_components2.ThemeContext);
  return theme2;
};
function themeVar(varName) {
  return function s({ theme: theme2 }) {
    return theme2[varName];
  };
}

// src/components/Avatar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Avatar = ({
  url,
  $size = 20,
  $isOnline,
  style
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Image,
    {
      $size,
      $isOnline,
      src: url,
      style
    }
  );
};
var Image = import_styled_components3.default.img`
    cursor: pointer;
    border-radius: 50%;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${({ $isOnline }) => $isOnline && import_styled_components3.css`
        border: 2px solid ${themeVar("accent600")};
    `}
`;

// src/lib/gen-color-string.ts
var stringToColor = (str, startHash = 0) => {
  let hash = 0;
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((startHash << 5) - startHash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = hash >> i * 8 & 255;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;
};

// src/components/AvatarThumb.tsx
var import_styled_components4 = __toESM(require("styled-components"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var AvatarThumb = ({ nickname, style }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Wrap, { style: { ...style, backgroundColor: stringToColor(nickname || "0") }, children: nickname.length > 0 && nickname[0].toUpperCase() });
var Wrap = import_styled_components4.default.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar("backgroundColor")};

`;

// src/components/Badge.tsx
var import_styled_components5 = __toESM(require("styled-components"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Badge = ({ children, color = "accent", size, style }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    StatusWrapper,
    {
      size,
      color,
      style,
      children
    }
  );
};
var StatusWrapper = import_styled_components5.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${themeVar("fontColor")};
  border: 3px solid ${({ color = "accent", theme: theme2 }) => theme2[`${color}500`]};
  background-color: ${({ color = "accent", theme: theme2 }) => theme2[`${color}400`]};
  border-radius: 4px;
  padding: 6px;
  padding-left: 15px;
  padding-right: 15px;
  
  ${({ size }) => size && import_styled_components5.css`
      font-size: ${size}px;
  `}
`;

// src/components/Button.tsx
var import_styled_components6 = __toESM(require("styled-components"));
var ButtonCss = import_styled_components6.css`
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px ${({ $dashed }) => $dashed ? "dashed" : "solid"} ${themeVar("default500")};
    background: ${themeVar("default800")};
    color: ${themeVar("default400")};
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    ${({ $haveIcon }) => $haveIcon && import_styled_components6.css`
        svg {
            margin-right: 8px;
        }
    `}
    &:hover {
        color: ${themeVar("default800")};
        background: ${themeVar("default500")};
        transition: 0.2s;
    }
    ${({ $primary }) => $primary && import_styled_components6.css`
        background: ${themeVar("accent500")};
        color: #fff;
        border: none;
        &:hover {
            color: #fff;
            background: ${themeVar("accent400")};
        }
    `}
    ${({ $secondary }) => $secondary && import_styled_components6.css`
        background: ${themeVar("secondary500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("secondary400")};
            color: #fff;
        }
    `}
    ${({ $danger }) => $danger && import_styled_components6.css`
        background: ${themeVar("error500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("error400")};
            color: #fff;
        }
    `}
`;
var Button = import_styled_components6.default.button`
    ${ButtonCss}
`;
var LinkButton = import_styled_components6.default.a`
    ${ButtonCss}
    text-decoration: none;
`;
Button.displayName = "Button";
LinkButton.displayName = "LinkButton";

// src/components/Dropdown.tsx
var import_react2 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Dropdown = ({ options, onOptionChange, selected, placeholder = "Empty", headerIcon }) => {
  const [isOpen, setIsOpen] = import_react2.default.useState(false);
  const toggleList = () => setIsOpen(!isOpen);
  const selectedText = options.find((cat) => cat.value === selected)?.text;
  const onOptionClicked = (item) => {
    onOptionChange(item.value);
    toggleList();
  };
  const ref = import_react2.default.useRef(null);
  import_react2.default.useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DropDownContainer, { ref, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DropDownHeader, { onClick: toggleList, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        selectedText && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: selectedText }),
        !selectedText && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: placeholder })
      ] }),
      headerIcon
    ] }),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DropDownWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DropDownListContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DropDownList, { children: options.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      ListItem,
      {
        onClick: () => onOptionClicked(item),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: item.text }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: item.icon })
        ]
      },
      item.value
    )) }) }) })
  ] });
};
var DropDownContainer = import_styled_components7.default.div`
    width: 240px;
    ${onSmWidth} {
        width: 100%;
    }
`;
var DropDownHeader = import_styled_components7.default.div`
    border-radius: 4px;
    border: 1px solid ${themeVar("default800")};
    padding: 14px;
    font-weight: 400;
    color: ${themeVar("default300")};   
    box-sizing: border-box;
    max-height: 40px;
    background: ${themeVar("contentBg")};
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        border: 1px solid ${themeVar("default600")};
    }
`;
var DropDownWrapper = import_styled_components7.default.div`
    position: relative;
    z-index: 1;

`;
var DropDownListContainer = import_styled_components7.default.div`
    position: absolute;
    height: 0;
    border-radius: 4px;
    margin-top: 0px;
    width: 240px;
    right:0;
`;
var DropDownList = import_styled_components7.default.ul`
    padding: 0;
    margin: 0;
    margin-top: -4px;
    background: ${themeVar("contentBg")};
    
    border: 1px solid ${themeVar("default700")};
    border-radius: 4px;
    color: ${themeVar("accent500")};

    box-shadow: 0px 12px 24px 2px #11111111;
    box-sizing: border-box;

    max-height: 80vh;
    overflow-y: auto;
`;
var ListItem = import_styled_components7.default.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-top: 12px;
    color: ${themeVar("default400")};
    animation: fadeout 0.5s;
    border-radius: 4px;
    user-select: none;
    &:hover {
        color: ${themeVar("default300")};
        cursor: pointer; 
    }
`;

// src/components/Input.tsx
var import_react3 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var Input = import_react3.default.forwardRef(({
  onChange,
  errorText,
  hasError,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      InputWrapper,
      {
        onChange: (e) => onChange?.(e.target.value),
        ref,
        $hasError: hasError,
        ...props
      }
    ),
    errorText && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ErrorText, { children: errorText })
  ] });
});
var InputWrapper = import_styled_components8.default.input`
    flex-direction: row;
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    background: ${themeVar("contentBg")};
    border: 1px solid ${themeVar("default800")};
    color: ${themeVar("fontColor")};
    &:focus {
        outline: none;
        border: 1px solid ${themeVar("default600")};
    }
    ${({ $hasError }) => $hasError && import_styled_components8.css`
        border-color: ${themeVar("error500")};
    `}
    &::placeholder {
        color: ${themeVar("default500")};
        font-weight: 300;
    }
`;
var ErrorText = import_styled_components8.default.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;

// src/components/Loader.tsx
var import_styled_components9 = __toESM(require("styled-components"));
var Loader = import_styled_components9.default.div`
  border: 2px solid ${themeVar("default300")};
  border-top: 2px solid ${themeVar("default700")}; 
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
Loader.displayName = "Loader";

// src/components/Modal.tsx
var import_react4 = __toESM(require("react"));
var import_styled_components10 = __toESM(require("styled-components"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var Modal = ({ visible, onClose, children, loading = false, style }) => {
  import_react4.default.useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Overlay, { onClick: () => onClose(), style, children: [
    loading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Loader, {}),
    !loading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Container, { onClick: (e) => e.stopPropagation(), children })
  ] });
};
var Container = import_styled_components10.default.div`
    background-color: ${themeVar("backgroundColor")};
    width: 85vw;
    padding: 30px;
    min-width: 320px;
    max-width: ${TABLET_WIDTH}px;
    max-height: 100vh;
    height: 100%;
    overflow-y: auto;
    box-shadow: 0, 0, 8px, #111;
`;
var Overlay = import_styled_components10.default.div`
    z-index: 20;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed; 
    top: 0;
    left: 0;
    background-color: #11111199;
    overflow: hidden;
    overflow-anchor: auto;
    backdrop-filter: blur(5px);
`;

// src/components/ProgressBar.tsx
var import_styled_components11 = __toESM(require("styled-components"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var ProgressBar = ({ completed, style }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Container2, { style, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Filter, { completed }) });
var Container2 = import_styled_components11.default.div`
    border-radius: 50px;
    background-color: ${themeVar("default400")};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: 40px;
`;
var Filter = import_styled_components11.default.div`
    height: 40px;
    width: ${({ completed }) => completed}%;
    max-width: 100%;
    min-width: 15%;
    border-radius: inherit;
    background-color: ${themeVar("default700")};
`;

// src/components/Range.tsx
var import_styled_components12 = __toESM(require("styled-components"));
var Range = import_styled_components12.default.input.attrs({ type: "range" })`
  &[type='range'] {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid ${themeVar("default700")};
    background-color: ${themeVar("default800")};
    box-sizing: border-box;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    cursor: pointer;
  }
  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
  }
  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 120px;
    width: 10px;
    background: ${themeVar("accent500")};
    cursor: pointer;
    margin-top: -8px; 
  }
  overflow: hidden;
`;

// src/components/Switch.tsx
var import_styled_components13 = __toESM(require("styled-components"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var Switch = ({ checked, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Container3, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Label, { className: "switch", children: [
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Input2, { type: "checkbox", checked, onChange, disabled }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "slider round" })
] }) });
var Label = import_styled_components13.default.label`
    position: relative;
    display: block;
    width: 40px;
    height: 18px;
    margin-left: 0;
`;
var Input2 = import_styled_components13.default.input`
    opacity: 0;
    width: 0;
    height: 0;
`;
var Container3 = import_styled_components13.default.div`
& {
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${themeVar("default500")};
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  
  input:checked + .slider {
    background-color: ${themeVar("accent500")};
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px ${themeVar("accent500")};
  }
  input:disabled + .slider { 
    background-color: ${themeVar("default600")};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
`;

// src/components/TabBar.tsx
var import_styled_components14 = __toESM(require("styled-components"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var TabBar = ({ options, selected, onSet }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Container4, { children: options.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Item,
    {
      $active: item.value === selected,
      onClick: () => onSet?.(item.value),
      children: item.title
    },
    index
  )) });
};
var Item = import_styled_components14.default.div`
    font-size: 16px;
    white-space: nowrap;
    padding: 16px 18px;
    border-radius: 8px;
    font-size: 18px;
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar("default400")};
    ${({ $active }) => $active && import_styled_components14.css`
        color: ${themeVar("accent500")};
    `}
    &:hover {
        color: ${themeVar("accent500")};
    }
    cursor: pointer;

    ${onSmWidth} {
        padding: 10px 12px;
        font-size: 14px;
    }
`;
var Container4 = import_styled_components14.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    box-sizing: border-box;
    overflow-x: auto;
    border: 0.5px solid ${themeVar("default700")};
    border-radius: 16px;
`;

// src/components/TextArea.tsx
var import_styled_components15 = __toESM(require("styled-components"));
var import_react5 = __toESM(require("react"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextArea = import_react5.default.forwardRef(({
  onChange,
  $errorText,
  $hasError,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    Wrapper,
    {
      ref,
      $hasError,
      onChange: (e) => onChange?.(e.target.value),
      ...props
    }
  ),
  $errorText && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ErrorText2, { children: $errorText })
] }));
var Wrapper = import_styled_components15.default.textarea`
    font-size: 16px;
    font-family: 'roboto';
    padding: 10px;
    border-radius: 4px;
    background: ${themeVar("contentBg")};
    color: ${themeVar("fontColor")};
    width: 100%;
    border: 1px solid ${themeVar("default800")};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #${themeVar("accent600")};
    }
    ${({ $hasError }) => $hasError && import_styled_components15.css`
        border-color: ${themeVar("error500")};
    `}
`;
var ErrorText2 = import_styled_components15.default.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;

// src/components/NavPanel.tsx
var import_styled_components16 = __toESM(require("styled-components"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var NavPanel = ({
  links,
  LinkElement
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Container5, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Wrapper2, { children: links.map((v, idx) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    v === "Separator" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Separator, {}, idx),
    v !== "Separator" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      LinkElement,
      {
        className: "link-element",
        to: v.to,
        children: v.icon
      },
      idx
    )
  ] })) }) });
};
var Container5 = import_styled_components16.default.div`
    width: 60px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    border-right: 1px solid ${themeVar("default700")};
    background: ${themeVar("default800")};
    background-size: cover;
    z-index: 11;
  
`;
var Wrapper2 = import_styled_components16.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    box-sizing: border-box;


    .link-element {
        display: flex;
        align-items: center;
        border: 1px solid #00000000;
        justify-content: center;

        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
        & * {
            color: ${themeVar("default500")};
        }
        &:hover {
            background-color: ${themeVar("default800")};
            border: 1px solid ${themeVar("default700")};
            svg {
                fill: ${themeVar("default600")};
                stroke: ${themeVar("default600")};
            }
        }
    }
`;
var Separator = import_styled_components16.default.div`
    flex-shrink: 1;
    flex-grow: 1;
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $currentTheme,
  Avatar,
  AvatarThumb,
  Badge,
  Button,
  Dropdown,
  Input,
  LARGE_WIDTH_PX,
  LinkButton,
  Loader,
  MOBILE_WIDTH,
  Modal,
  NavPanel,
  ProgressBar,
  Range,
  Switch,
  TABLET_WIDTH,
  THEME_KEY,
  TabBar,
  TextArea,
  ThemeProvider,
  loadThemeFx,
  onLgWidth,
  onMdWidth,
  onSmWidth,
  themeVar,
  toggleTheme,
  useTheme
});
