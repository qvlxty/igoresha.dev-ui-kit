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
  Button: () => Button,
  Dropdown: () => Dropdown,
  GlobalStyled: () => GlobalStyled,
  Input: () => Input,
  LARGE_WIDTH_PX: () => LARGE_WIDTH_PX,
  LinkButton: () => LinkButton,
  Loader: () => Loader,
  MOBILE_WIDTH: () => MOBILE_WIDTH,
  Modal: () => Modal,
  NavPanel: () => NavPanel,
  ProgressBar: () => ProgressBar,
  Range: () => Range,
  SettingRow: () => SettingRow,
  Settings: () => Settings,
  Switch: () => Switch,
  TABLET_WIDTH: () => TABLET_WIDTH,
  THEME_KEY: () => THEME_KEY,
  TabBar: () => TabBar,
  TextArea: () => TextArea,
  ThemeProvider: () => ThemeProvider,
  availableThemes: () => availableThemes,
  createContextMenu: () => createContextMenu,
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
  secondary500: "#29a0e6",
  secondary400: "#125780",
  error500: "#c9403e",
  error400: "#631413"
};

// src/theming/themes/index.ts
var availableThemes = {
  dark: darkTheme,
  light: lightTheme
};

// src/theming/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeProvider = ({ children, overrideTheme = availableThemes }) => {
  const theme2 = (0, import_effector_react.useUnit)($currentTheme);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_styled_components.ThemeProvider, { theme: overrideTheme[theme2], children });
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
function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}
function intToRGB(i) {
  var c = (i & 16777215).toString(16).toUpperCase();
  return "00000".substring(0, 6 - c.length) + c;
}
var stringToColor = (str) => {
  return `#${intToRGB(hashCode(str))}`;
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

// src/components/Button.tsx
var import_styled_components5 = __toESM(require("styled-components"));
var ButtonCss = import_styled_components5.css`
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px ${({ $dashed }) => $dashed ? "dashed" : "solid"} ${themeVar("default500")};
    background: ${themeVar("default800")};
    color: ${themeVar("default400")};
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    ${({ $haveIcon }) => $haveIcon && import_styled_components5.css`
        svg {
            margin-right: 8px;
        }
    `}
    &:hover {
        color: ${themeVar("default800")};
        background: ${themeVar("default500")};
        transition: 0.2s;
    }
    ${({ $primary }) => $primary && import_styled_components5.css`
        background: ${themeVar("accent500")};
        color: #fff;
        border: none;
        &:hover {
            color: #fff;
            background: ${themeVar("accent400")};
        }
    `}
    ${({ $secondary }) => $secondary && import_styled_components5.css`
        background: ${themeVar("secondary500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("secondary400")};
            color: #fff;
        }
    `}
    ${({ $danger }) => $danger && import_styled_components5.css`
        background: ${themeVar("error500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("error400")};
            color: #fff;
        }
    `}
`;
var Button = import_styled_components5.default.button`
    ${ButtonCss}
`;
var LinkButton = import_styled_components5.default.a`
    ${ButtonCss}
    text-decoration: none;
`;
Button.displayName = "Button";
LinkButton.displayName = "LinkButton";

// src/components/Dropdown.tsx
var import_react2 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));

// src/const.ts
var MOBILE_WIDTH = 600;
var TABLET_WIDTH = 900;
var LARGE_WIDTH_PX = 1024;
var onSmWidth = `@media only screen and (max-width: ${MOBILE_WIDTH}px)`;
var onMdWidth = `@media only screen and (max-width: ${TABLET_WIDTH}px)`;
var onLgWidth = `@media only screen and (max-width: ${LARGE_WIDTH_PX}px)`;

// src/components/Dropdown.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Container, { ref, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Header, { onClick: toggleList, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        selectedText && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: selectedText }),
        !selectedText && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: placeholder })
      ] }),
      headerIcon
    ] }),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ListContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(List, { children: options.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      ListItem,
      {
        onClick: () => onOptionClicked(item),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: item.text }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: item.icon })
        ]
      },
      item.value
    )) }) }) })
  ] });
};
var Container = import_styled_components6.default.div`
    width: 240px;
    ${onSmWidth} {
        width: 100%;
    }
`;
var Header = import_styled_components6.default.div`
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
var Wrapper = import_styled_components6.default.div`
    position: relative;
    z-index: 1;

`;
var ListContainer = import_styled_components6.default.div`
    position: absolute;
    height: 0;
    border-radius: 4px;
    margin-top: 0px;
    width: 240px;
    right:0;
`;
var List = import_styled_components6.default.ul`
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
var ListItem = import_styled_components6.default.li`
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
var import_styled_components7 = __toESM(require("styled-components"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Input = import_react3.default.forwardRef(({
  onChange,
  errorText,
  hasError,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      InputWrapper,
      {
        onChange: (e) => onChange?.(e.target.value),
        ref,
        $hasError: hasError,
        ...props
      }
    ),
    errorText && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ErrorText, { children: errorText })
  ] });
});
var InputWrapper = import_styled_components7.default.input`
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
    ${({ $hasError }) => $hasError && import_styled_components7.css`
        border-color: ${themeVar("error500")};
    `}
    &::placeholder {
        color: ${themeVar("default500")};
        font-weight: 300;
    }
`;
var ErrorText = import_styled_components7.default.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;

// src/components/Loader.tsx
var import_styled_components8 = __toESM(require("styled-components"));
var Loader = import_styled_components8.default.div`
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
var import_styled_components9 = __toESM(require("styled-components"));
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Overlay, { onClick: () => onClose(), style, children: [
    loading && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Loader, {}),
    !loading && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Container2, { onClick: (e) => e.stopPropagation(), children })
  ] });
};
var Container2 = import_styled_components9.default.div`
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
var Overlay = import_styled_components9.default.div`
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
var import_styled_components10 = __toESM(require("styled-components"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var ProgressBar = ({ completed, style }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Container3, { style, children: completed > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Filter, { completed }) });
var Container3 = import_styled_components10.default.div`
    border-radius: 50px;
    background-color: ${themeVar("default400")};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: 40px;
`;
var Filter = import_styled_components10.default.div`
    height: 100%;
    width: ${({ completed }) => completed}%;
    max-width: 100%;
    min-width: 15%;
    border-radius: inherit;
    background-color: ${themeVar("default700")};
`;

// src/components/Range.tsx
var import_styled_components11 = __toESM(require("styled-components"));
var Range = import_styled_components11.default.input.attrs({ type: "range" })`
  &[type='range'] {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid ${themeVar("default700")};
    background-color: ${themeVar("default800")};
    box-sizing: border-box;
    width: 100%;
    height: 12px;
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
    background: ${themeVar("accent700")};
    cursor: pointer;
    margin-top: -8px; 
  }
  overflow: hidden;
`;

// src/components/Switch.tsx
var import_styled_components12 = __toESM(require("styled-components"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var Switch = ({ checked, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Container4, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Label, { className: "switch", children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Input2, { type: "checkbox", checked, onChange, disabled }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "slider round" })
] }) });
var Label = import_styled_components12.default.label`
    position: relative;
    display: block;
    width: 40px;
    height: 18px;
    margin-left: 0;
`;
var Input2 = import_styled_components12.default.input`
    opacity: 0;
    width: 0;
    height: 0;
`;
var Container4 = import_styled_components12.default.div`
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
var import_styled_components13 = __toESM(require("styled-components"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var TabBar = ({ options, selected, onSet }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Container5, { children: options.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Item,
    {
      $active: item.value === selected,
      onClick: () => onSet?.(item.value),
      children: item.title
    },
    index
  )) });
};
var Item = import_styled_components13.default.div`
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
    ${({ $active }) => $active && import_styled_components13.css`
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
var Container5 = import_styled_components13.default.div`
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
var import_styled_components14 = __toESM(require("styled-components"));
var import_react5 = __toESM(require("react"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var TextArea = import_react5.default.forwardRef(({
  onChange,
  $errorText,
  $hasError,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Wrapper2,
    {
      ref,
      $hasError,
      onChange: (e) => onChange?.(e.target.value),
      ...props
    }
  ),
  $errorText && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ErrorText2, { children: $errorText })
] }));
var Wrapper2 = import_styled_components14.default.textarea`
    font-size: 16px;
    font-family: 'roboto';
    padding: 16px;
    border-radius: 4px;
    background: ${themeVar("contentBg")};
    color: ${themeVar("fontColor")};
    width: 100%;
    border: 1px solid ${themeVar("default800")};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #${themeVar("accent600")};
    }
    ${({ $hasError }) => $hasError && import_styled_components14.css`
        border-color: ${themeVar("error500")};
    `}
`;
var ErrorText2 = import_styled_components14.default.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;

// src/components/NavPanel/NavPanel.tsx
var import_styled_components15 = __toESM(require("styled-components"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var NavPanel = ({
  links,
  LinkElement
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Container6, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Wrapper3, { children: links.map((v, idx) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    v === "Separator" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Separator, {}, idx),
    v !== "Separator" && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      "to" in v && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        LinkElement,
        {
          className: "link-element",
          to: v.to,
          children: v.icon
        },
        idx
      ),
      "onClick" in v && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          className: "link-element",
          onClick: v.onClick,
          children: v.icon
        },
        idx
      )
    ] })
  ] })) }) });
};
var Container6 = import_styled_components15.default.div`
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
var Wrapper3 = import_styled_components15.default.div`
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
        outline: none;
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
        background: ${themeVar("default800")};
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
var Separator = import_styled_components15.default.div`
    flex-shrink: 1;
    flex-grow: 1;
`;

// src/components/Settings/Settings.tsx
var import_styled_components16 = __toESM(require("styled-components"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var Settings = ({
  children,
  containerStyle,
  title,
  titleIcon
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    Container7,
    {
      style: containerStyle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Header2, { children: [
          titleIcon,
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { children: title })
        ] }),
        children
      ]
    }
  );
};
var Container7 = import_styled_components16.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 86px;
  box-sizing: border-box;
  gap: 12px;
`;
var Header2 = import_styled_components16.default.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
`;

// src/components/Settings/SettingRow.tsx
var import_styled_components17 = __toESM(require("styled-components"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var SettingRow = ({ title, icon, option, description, containerStyle }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Container8, { style: containerStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Title, { children: [
      icon,
      title,
      description && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Description, { children: description })
    ] }),
    option
  ] });
};
var Container8 = import_styled_components17.default.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
    gap: 10px;
    align-items: center;
    border-top: 1px solid ${themeVar("default700")};
    &:first-child {
        border-top: 1px solid #00000000;
    }
`;
var Title = import_styled_components17.default.div`
    font-size: 16px;
    flex: 1;
    svg {
        margin-right: 8px;
        margin-bottom: -2px;
    }    
`;
var Description = import_styled_components17.default.div`
    font-size: 14px;
    background-color: ${themeVar("default400")}09;
    margin-top: 6px;
    max-width: 360px;
    padding: 8px;
    border-radius: 12px;

`;

// src/components/context-menu/create-context-menu.tsx
var import_react7 = __toESM(require("react"));
var import_effector_react2 = require("effector-react");
var import_effector2 = require("effector");
var import_styled_components18 = __toESM(require("styled-components"));

// src/components/context-menu/context-menu/useArrowKeys.ts
var import_react6 = __toESM(require("react"));
var useArrowKeys = (visible, len, cb, closeMenu) => {
  const [idx, setIdx] = import_react6.default.useState(null);
  import_react6.default.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!visible) {
        return;
      }
      ["ArrowDown", "ArrowUp", "Enter", "Space"].includes(e.key) && setIdx((idx2) => {
        e.preventDefault();
        if (idx2 === null) {
          if (e.key === "ArrowDown") {
            return 0;
          }
          if (e.key === "ArrowUp") {
            return len - 1;
          }
          return null;
        }
        if (e.key === "ArrowDown") {
          return idx2 + 1 < len ? idx2 + 1 : 0;
        }
        if (e.key === "ArrowUp") {
          return idx2 > 0 ? idx2 - 1 : len - 1;
        }
        if (e.key === "Enter" || e.key === "Space") {
          cb(idx2);
          closeMenu();
        }
        return idx2;
      });
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [len, visible]);
  return [idx, setIdx];
};

// src/components/context-menu/create-context-menu.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var createContextMenu = () => {
  const $payload = (0, import_effector2.createStore)(null);
  const $top = (0, import_effector2.createStore)(0);
  const $left = (0, import_effector2.createStore)(0);
  const $height = (0, import_effector2.createStore)(0);
  const setHeight = (0, import_effector2.createEvent)();
  const openMenuFx = (0, import_effector2.createEffect)();
  const openMenu = (0, import_effector2.createEvent)();
  const closeMenu = (0, import_effector2.createEvent)();
  $payload.on(openMenuFx.doneData, (_, d) => {
    if (typeof d.payload === "undefined") {
      return true;
    }
    return d.payload;
  }).reset(closeMenu);
  $top.on(openMenuFx.doneData, (_, s) => s.top);
  $left.on(openMenuFx.doneData, (_, s) => s.left);
  $height.on(setHeight, (_, s) => s);
  (0, import_effector2.sample)({
    clock: openMenu,
    source: $height,
    fn: (a, { e, payload }) => ({
      e,
      payload,
      height: a
    }),
    target: openMenuFx
  });
  openMenuFx.use(({ e, height, payload }) => {
    let left = 0;
    let top = 0;
    if (window.innerHeight / 2 < e.clientY) {
      top = e.clientY - height;
    } else {
      top = e.clientY;
    }
    if (window.innerWidth / 2 < e.clientX) {
      left = e.clientX - height;
    } else {
      left = e.clientX;
    }
    return { left, top, payload };
  });
  const ContextMenu = ({ items }) => {
    const [left, top, payload] = (0, import_effector_react2.useUnit)([$left, $top, $payload]);
    const clearContextMenu = import_react7.default.useCallback(() => {
      closeMenu();
    }, []);
    import_react7.default.useEffect(() => {
      setHeight(items.length * MENU_ITEM_HEIGHT_PX);
    }, [items]);
    import_react7.default.useEffect(() => {
      document.addEventListener("click", clearContextMenu);
      return () => {
        document.removeEventListener("click", clearContextMenu);
      };
    }, []);
    const [selectedIdx, setSelectedIdx] = useArrowKeys(
      payload !== null,
      items.length,
      (id) => items[id].action(payload),
      closeMenu
    );
    if (payload === null) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Motion,
      {
        onContextMenuCapture: (e) => e.preventDefault(),
        style: { left, top },
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MenuWrapper, { children: items.map((item, index) => {
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            MenuItem,
            {
              onMouseEnter: () => setSelectedIdx(index),
              $active: index === selectedIdx,
              onClick: () => item.action(payload),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(IconWrapper, { children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: item.name })
              ]
            },
            index
          );
        }) })
      }
    );
  };
  return {
    ContextMenu,
    openMenu
  };
};
var MENU_ITEM_HEIGHT_PX = 10;
var Motion = import_styled_components18.default.div`
    position: fixed;
    width: 0;
    height: 0;
    left:0;
    z-index: 990;
    overflow: visible;
    &::-webkit-scrollbar {
        width: 0px;
    }
    `;
var MenuWrapper = import_styled_components18.default.div`
    border: 2px solid ${themeVar("default700")};
    background-color: ${themeVar("default800")};
    color: white;
    position: relative;
    border-radius: 6px;
    max-width: 220px;
    width: 220px;
    padding: 4px;
`;
var IconWrapper = import_styled_components18.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
`;
var MenuItem = import_styled_components18.default.button`
    padding: 6px;
    display: flex;
    height: ${MENU_ITEM_HEIGHT_PX};
    flex-direction: row;
    align-items: center;
    font-size: 13px;
    color: ${themeVar("fontColor")};
    background: none;
    outline: none;
    border: 0;
    width: 100%;
    cursor: pointer;
    ${({ $active }) => $active && import_styled_components18.css`
        background-color: ${themeVar("default700")};
        color: ${themeVar("default300")};
    `}
`;

// src/theming/global.styled.tsx
var import_styled_components19 = require("styled-components");
var GlobalStyled = import_styled_components19.createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Roboto;
        color: ${themeVar("fontColor")};
        background-color: ${themeVar("backgroundColor")};
    }

    body,
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }

    label {
        font-weight: 300;
        font-size: 14px;
        margin-left: 4px;
    }

    body {
        background: ${themeVar("backgroundColor")};
        font-family: 'Roboto';
        margin: 0;
        color: ${themeVar("fontColor")};
        padding: 0;
    }


    @keyframes fadeout
    { 
        from { opacity: 0;}
        to { opacity: 1}
    }

    @-webkit-keyframes fadeout 
    {
        from { opacity: 0;}
        to {opacity: 1;}
    }

    a {
        color: ${themeVar("accent500")};
        text-decoration: none;
    }

    h1, h2, h3 {
        padding: 0;
        margin: 0;
    }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $currentTheme,
  Avatar,
  AvatarThumb,
  Button,
  Dropdown,
  GlobalStyled,
  Input,
  LARGE_WIDTH_PX,
  LinkButton,
  Loader,
  MOBILE_WIDTH,
  Modal,
  NavPanel,
  ProgressBar,
  Range,
  SettingRow,
  Settings,
  Switch,
  TABLET_WIDTH,
  THEME_KEY,
  TabBar,
  TextArea,
  ThemeProvider,
  availableThemes,
  createContextMenu,
  loadThemeFx,
  onLgWidth,
  onMdWidth,
  onSmWidth,
  themeVar,
  toggleTheme,
  useTheme
});
