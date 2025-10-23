// src/components/Avatar.tsx
import styled, { css } from "styled-components";

// src/theming/ThemeProvider.tsx
import {
  ThemeProvider as Provider
} from "styled-components";
import { useUnit } from "effector-react";

// src/lib/create-theme-store.ts
import { createDomain, sample } from "effector";
var createThemeStore = ({
  d = createDomain(),
  defaultValue,
  key
}) => {
  const $store = d.store(defaultValue);
  const loadFx = d.effect();
  const saveFx = d.effect();
  const toggleEvent = d.event();
  $store.on(loadFx.doneData, (_, d2) => d2).on(saveFx.done, (_, { params }) => params).on(toggleEvent, (s) => s === "light" ? "dark" : "light");
  sample({
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
import { jsx } from "react/jsx-runtime";
var ThemeProvider = ({ children, overrideTheme = availableThemes }) => {
  const theme2 = useUnit($currentTheme);
  return /* @__PURE__ */ jsx(Provider, { theme: overrideTheme[theme2], children });
};

// src/theming/helpers.ts
import React from "react";
import { ThemeContext } from "styled-components";
var useTheme = () => {
  const theme2 = React.useContext(ThemeContext);
  return theme2;
};
function themeVar(varName) {
  return function s({ theme: theme2 }) {
    return theme2[varName];
  };
}

// src/components/Avatar.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Avatar = ({
  url,
  $size = 20,
  $isOnline,
  style
}) => {
  return /* @__PURE__ */ jsx2(
    Image,
    {
      $size,
      $isOnline,
      src: url,
      style
    }
  );
};
var Image = styled.img`
    cursor: pointer;
    border-radius: 50%;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${({ $isOnline }) => $isOnline && css`
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
import styled2 from "styled-components";
import { jsx as jsx3 } from "react/jsx-runtime";
var AvatarThumb = ({ nickname, style }) => /* @__PURE__ */ jsx3(Wrap, { style: { ...style, backgroundColor: stringToColor(nickname || "0") }, children: nickname.length > 0 && nickname[0].toUpperCase() });
var Wrap = styled2.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar("backgroundColor")};

`;

// src/components/Button.tsx
import styled3, { css as css2 } from "styled-components";
var ButtonCss = css2`
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px ${({ $dashed }) => $dashed ? "dashed" : "solid"} ${themeVar("default500")};
    background: ${themeVar("default800")};
    color: ${themeVar("default400")};
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    ${({ $haveIcon }) => $haveIcon && css2`
        svg {
            margin-right: 8px;
        }
    `}
    &:hover {
        color: ${themeVar("default800")};
        background: ${themeVar("default500")};
        transition: 0.2s;
    }
    ${({ $primary }) => $primary && css2`
        background: ${themeVar("accent500")};
        color: #fff;
        border: none;
        &:hover {
            color: #fff;
            background: ${themeVar("accent400")};
        }
    `}
    ${({ $secondary }) => $secondary && css2`
        background: ${themeVar("secondary500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("secondary400")};
            color: #fff;
        }
    `}
    ${({ $danger }) => $danger && css2`
        background: ${themeVar("error500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("error400")};
            color: #fff;
        }
    `}
`;
var Button = styled3.button`
    ${ButtonCss}
`;
var LinkButton = styled3.a`
    ${ButtonCss}
    text-decoration: none;
`;
Button.displayName = "Button";
LinkButton.displayName = "LinkButton";

// src/components/Dropdown.tsx
import React2 from "react";
import styled4 from "styled-components";

// src/const.ts
var MOBILE_WIDTH = 600;
var TABLET_WIDTH = 900;
var LARGE_WIDTH_PX = 1024;
var onSmWidth = `@media only screen and (max-width: ${MOBILE_WIDTH}px)`;
var onMdWidth = `@media only screen and (max-width: ${TABLET_WIDTH}px)`;
var onLgWidth = `@media only screen and (max-width: ${LARGE_WIDTH_PX}px)`;

// src/components/Dropdown.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var Dropdown = ({ options, onOptionChange, selected, placeholder = "Empty", headerIcon }) => {
  const [isOpen, setIsOpen] = React2.useState(false);
  const toggleList = () => setIsOpen(!isOpen);
  const selectedText = options.find((cat) => cat.value === selected)?.text;
  const onOptionClicked = (item) => {
    onOptionChange(item.value);
    toggleList();
  };
  const ref = React2.useRef(null);
  React2.useEffect(() => {
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
  return /* @__PURE__ */ jsxs(Container, { ref, children: [
    /* @__PURE__ */ jsxs(Header, { onClick: toggleList, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        selectedText && /* @__PURE__ */ jsx4("div", { children: selectedText }),
        !selectedText && /* @__PURE__ */ jsx4("div", { children: placeholder })
      ] }),
      headerIcon
    ] }),
    isOpen && /* @__PURE__ */ jsx4(Wrapper, { children: /* @__PURE__ */ jsx4(ListContainer, { children: /* @__PURE__ */ jsx4(List, { children: options.map((item) => /* @__PURE__ */ jsxs(
      ListItem,
      {
        onClick: () => onOptionClicked(item),
        children: [
          /* @__PURE__ */ jsx4("div", { children: item.text }),
          /* @__PURE__ */ jsx4("div", { children: item.icon })
        ]
      },
      item.value
    )) }) }) })
  ] });
};
var Container = styled4.div`
    width: 240px;
    ${onSmWidth} {
        width: 100%;
    }
`;
var Header = styled4.div`
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
var Wrapper = styled4.div`
    position: relative;
    z-index: 1;

`;
var ListContainer = styled4.div`
    position: absolute;
    height: 0;
    border-radius: 4px;
    margin-top: 0px;
    width: 240px;
    right:0;
`;
var List = styled4.ul`
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
var ListItem = styled4.li`
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
import React3 from "react";
import styled5, { css as css3 } from "styled-components";
import { Fragment, jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = React3.forwardRef(({
  onChange,
  errorText,
  hasError,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx5(
      InputWrapper,
      {
        onChange: (e) => onChange?.(e.target.value),
        ref,
        $hasError: hasError,
        ...props
      }
    ),
    errorText && /* @__PURE__ */ jsx5(ErrorText, { children: errorText })
  ] });
});
var InputWrapper = styled5.input`
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
    ${({ $hasError }) => $hasError && css3`
        border-color: ${themeVar("error500")};
    `}
    &::placeholder {
        color: ${themeVar("default500")};
        font-weight: 300;
    }
`;
var ErrorText = styled5.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;

// src/components/Loader.tsx
import styled6 from "styled-components";
var Loader = styled6.div`
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
import React4 from "react";
import styled7 from "styled-components";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var Modal = ({ visible, onClose, children, loading = false, style }) => {
  React4.useEffect(() => {
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
  return /* @__PURE__ */ jsxs3(Overlay, { onClick: () => onClose(), style, children: [
    loading && /* @__PURE__ */ jsx6(Loader, {}),
    !loading && /* @__PURE__ */ jsx6(Container2, { onClick: (e) => e.stopPropagation(), children })
  ] });
};
var Container2 = styled7.div`
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
var Overlay = styled7.div`
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
import styled8 from "styled-components";
import { jsx as jsx7 } from "react/jsx-runtime";
var ProgressBar = ({ completed, style }) => /* @__PURE__ */ jsx7(Container3, { style, children: /* @__PURE__ */ jsx7(Filter, { completed }) });
var Container3 = styled8.div`
    border-radius: 50px;
    background-color: ${themeVar("default400")};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: 40px;
`;
var Filter = styled8.div`
    height: 40px;
    width: ${({ completed }) => completed}%;
    max-width: 100%;
    min-width: 15%;
    border-radius: inherit;
    background-color: ${themeVar("default700")};
`;

// src/components/Range.tsx
import styled9 from "styled-components";
var Range = styled9.input.attrs({ type: "range" })`
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
import styled10 from "styled-components";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var Switch = ({ checked, onChange, disabled }) => /* @__PURE__ */ jsx8(Container4, { children: /* @__PURE__ */ jsxs4(Label, { className: "switch", children: [
  /* @__PURE__ */ jsx8(Input2, { type: "checkbox", checked, onChange, disabled }),
  /* @__PURE__ */ jsx8("span", { className: "slider round" })
] }) });
var Label = styled10.label`
    position: relative;
    display: block;
    width: 40px;
    height: 18px;
    margin-left: 0;
`;
var Input2 = styled10.input`
    opacity: 0;
    width: 0;
    height: 0;
`;
var Container4 = styled10.div`
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
import styled11, { css as css4 } from "styled-components";
import { jsx as jsx9 } from "react/jsx-runtime";
var TabBar = ({ options, selected, onSet }) => {
  return /* @__PURE__ */ jsx9(Container5, { children: options.map((item, index) => /* @__PURE__ */ jsx9(
    Item,
    {
      $active: item.value === selected,
      onClick: () => onSet?.(item.value),
      children: item.title
    },
    index
  )) });
};
var Item = styled11.div`
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
    ${({ $active }) => $active && css4`
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
var Container5 = styled11.div`
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
import styled12, { css as css5 } from "styled-components";
import React5 from "react";
import { Fragment as Fragment2, jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var TextArea = React5.forwardRef(({
  onChange,
  $errorText,
  $hasError,
  ...props
}, ref) => /* @__PURE__ */ jsxs5(Fragment2, { children: [
  /* @__PURE__ */ jsx10(
    Wrapper2,
    {
      ref,
      $hasError,
      onChange: (e) => onChange?.(e.target.value),
      ...props
    }
  ),
  $errorText && /* @__PURE__ */ jsx10(ErrorText2, { children: $errorText })
] }));
var Wrapper2 = styled12.textarea`
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
    ${({ $hasError }) => $hasError && css5`
        border-color: ${themeVar("error500")};
    `}
`;
var ErrorText2 = styled12.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;

// src/components/NavPanel/NavPanel.tsx
import styled13 from "styled-components";
import { Fragment as Fragment3, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var NavPanel = ({
  links,
  LinkElement
}) => {
  return /* @__PURE__ */ jsx11(Container6, { children: /* @__PURE__ */ jsx11(Wrapper3, { children: links.map((v, idx) => /* @__PURE__ */ jsxs6(Fragment3, { children: [
    v === "Separator" && /* @__PURE__ */ jsx11(Separator, {}, idx),
    v !== "Separator" && /* @__PURE__ */ jsxs6(Fragment3, { children: [
      "to" in v && /* @__PURE__ */ jsx11(
        LinkElement,
        {
          className: "link-element",
          to: v.to,
          children: v.icon
        },
        idx
      ),
      "onClick" in v && /* @__PURE__ */ jsx11(
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
var Container6 = styled13.div`
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
var Wrapper3 = styled13.div`
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
var Separator = styled13.div`
    flex-shrink: 1;
    flex-grow: 1;
`;

// src/theming/global.styled.tsx
import { createGlobalStyle } from "styled-components";
var GlobalStyled = createGlobalStyle`
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

    @font-face {
        font-family: Roboto mono;
        src: url('/fonts/RobotoMono-Regular.ttf');
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
    }

    h1, h2, h3 {
        padding: 0;
        margin: 0;
    }
`;
export {
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
  Switch,
  TABLET_WIDTH,
  THEME_KEY,
  TabBar,
  TextArea,
  ThemeProvider,
  availableThemes,
  loadThemeFx,
  onLgWidth,
  onMdWidth,
  onSmWidth,
  themeVar,
  toggleTheme,
  useTheme
};
