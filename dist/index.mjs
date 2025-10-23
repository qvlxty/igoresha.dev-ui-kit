// src/components/Avatar.tsx
import styled, { css } from "styled-components";

// src/theming/ThemeProvider.tsx
import {
  ThemeProvider as Provider
} from "styled-components";
import { useUnit } from "effector-react";

// src/theming/model/public.ts
import { createEvent } from "effector";

// src/theming/model/const.ts
var THEME_KEY = "THEME";
var MOBILE_WIDTH = 600;
var TABLET_WIDTH = 900;
var LARGE_WIDTH_PX = 1024;
var onSmWidth = `@media only screen and (max-width: ${MOBILE_WIDTH}px)`;
var onMdWidth = `@media only screen and (max-width: ${TABLET_WIDTH}px)`;
var onLgWidth = `@media only screen and (max-width: ${LARGE_WIDTH_PX}px)`;

// src/lib/create-persisted-store.ts
import { createDomain, sample } from "effector";
var createPersistedStore = ({
  d = createDomain(),
  defaultValue,
  key,
  serializer = JSON.stringify,
  deserializer = JSON.parse
}) => {
  const $store = d.store(defaultValue);
  const loadFx = d.effect();
  const saveFx = d.effect();
  $store.on(loadFx.doneData, (_, d2) => d2).on(saveFx.done, (_, { params }) => params);
  sample({
    clock: $store.updates,
    target: saveFx
  });
  loadFx.use(() => {
    const d2 = localStorage.getItem(key);
    if (d2 === null) {
      return defaultValue;
    }
    return deserializer(d2);
  });
  saveFx.use((p) => {
    localStorage.setItem(key, serializer(p));
  });
  return {
    loadFx,
    saveFx,
    $store
  };
};

// src/theming/model/public.ts
var theme = createPersistedStore({ defaultValue: "light", key: THEME_KEY });
var $currentTheme = theme.$store;
var loadThemeFx = theme.loadFx;
var toggleTheme = createEvent();

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

// src/theming/ThemeProvider.tsx
import { jsx } from "react/jsx-runtime";

// src/theming/helpers.ts
import React from "react";
import { ThemeContext } from "styled-components";
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
var AvatarThumb = ({ nickname, style }) => /* @__PURE__ */ jsx3(Wrap, { style: { ...style, backgroundColor: stringToColor(nickname) }, children: nickname[0].toUpperCase() });
var Wrap = styled2.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar("backgroundColor")};

`;

// src/components/Badge.tsx
import styled3, { css as css2 } from "styled-components";
import { jsx as jsx4 } from "react/jsx-runtime";
var Badge = ({ children, color = "accent", size, style }) => {
  return /* @__PURE__ */ jsx4(
    StatusWrapper,
    {
      size,
      color,
      style,
      children
    }
  );
};
var StatusWrapper = styled3.div`
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
  
  ${({ size }) => size && css2`
      font-size: ${size}px;
  `}
`;

// src/components/Button.tsx
import styled4, { css as css3 } from "styled-components";
var ButtonCss = css3`
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px ${({ $dashed }) => $dashed ? "dashed" : "solid"} ${themeVar("default500")};
    background: ${themeVar("default800")};
    color: ${themeVar("default400")};
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    ${({ $haveIcon }) => $haveIcon && css3`
        svg {
            margin-right: 8px;
        }
    `}
    &:hover {
        color: ${themeVar("default800")};
        background: ${themeVar("default500")};
        transition: 0.2s;
    }
    ${({ $primary }) => $primary && css3`
        background: ${themeVar("accent500")};
        color: #fff;
        border: none;
        &:hover {
            color: #fff;
            background: ${themeVar("accent400")};
        }
    `}
    ${({ $secondary }) => $secondary && css3`
        background: ${themeVar("secondary500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("secondary400")};
            color: #fff;
        }
    `}
    ${({ $danger }) => $danger && css3`
        background: ${themeVar("error500")};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar("error400")};
            color: #fff;
        }
    `}
`;
var Button = styled4.button`
    ${ButtonCss}
`;
var LinkButton = styled4.a`
    ${ButtonCss}
    text-decoration: none;
`;

// src/components/Dropdown.tsx
import React2 from "react";
import styled5 from "styled-components";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(DropDownContainer, { ref, children: [
    /* @__PURE__ */ jsxs(DropDownHeader, { onClick: toggleList, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        selectedText && /* @__PURE__ */ jsx5("div", { children: selectedText }),
        !selectedText && /* @__PURE__ */ jsx5("div", { children: placeholder })
      ] }),
      headerIcon
    ] }),
    isOpen && /* @__PURE__ */ jsx5(DropDownWrapper, { children: /* @__PURE__ */ jsx5(DropDownListContainer, { children: /* @__PURE__ */ jsx5(DropDownList, { children: options.map((item) => /* @__PURE__ */ jsxs(
      ListItem,
      {
        onClick: () => onOptionClicked(item),
        children: [
          /* @__PURE__ */ jsx5("div", { children: item.text }),
          /* @__PURE__ */ jsx5("div", { children: item.icon })
        ]
      },
      item.value
    )) }) }) })
  ] });
};
var DropDownContainer = styled5.div`
    width: 240px;
    ${onSmWidth} {
        width: 100%;
    }
`;
var DropDownHeader = styled5.div`
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
var DropDownWrapper = styled5.div`
    position: relative;
    z-index: 1;

`;
var DropDownListContainer = styled5.div`
    position: absolute;
    height: 0;
    border-radius: 4px;
    margin-top: 0px;
    width: 240px;
    right:0;
`;
var DropDownList = styled5.ul`
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
var ListItem = styled5.li`
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
import styled6, { css as css4 } from "styled-components";
import { Fragment, jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = React3.forwardRef(({
  onChange,
  errorText,
  hasError,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx6(
      InputWrapper,
      {
        onChange: (e) => onChange?.(e.target.value),
        ref,
        $hasError: hasError,
        ...props
      }
    ),
    errorText && /* @__PURE__ */ jsx6(ErrorText, { children: errorText })
  ] });
});
var InputWrapper = styled6.input`
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
    ${({ $hasError }) => $hasError && css4`
        border-color: ${themeVar("error500")};
    `}
    &::placeholder {
        color: ${themeVar("default500")};
        font-weight: 300;
    }
`;
var ErrorText = styled6.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;

// src/components/Loader.tsx
import styled7 from "styled-components";
var Loader = styled7.div`
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

// src/components/Modal.tsx
import React4 from "react";
import styled8 from "styled-components";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Modal = ({ visible, onClose, children, loading = false, style }) => {
  React4.useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [visible]);
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ jsxs3(Overlay, { onClick: () => onClose(), style, children: [
    loading && /* @__PURE__ */ jsx7(Loader, {}),
    !loading && /* @__PURE__ */ jsx7(Container, { onClick: (e) => e.stopPropagation(), children })
  ] });
};
var Container = styled8.div`
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
var Overlay = styled8.div`
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
import styled9 from "styled-components";
import { jsx as jsx8 } from "react/jsx-runtime";
var ProgressBar = ({ completed, style }) => /* @__PURE__ */ jsx8(Container2, { style, children: /* @__PURE__ */ jsx8(Filter, { completed }) });
var Container2 = styled9.div`
    border-radius: 50px;
    background-color: ${themeVar("default400")};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: 40px;
`;
var Filter = styled9.div`
    height: 40px;
    width: ${({ completed }) => completed}%;
    max-width: 100%;
    min-width: 15%;
    border-radius: inherit;
    background-color: ${themeVar("default700")};
`;

// src/components/Range.tsx
import styled10 from "styled-components";
var Range = styled10.input.attrs({ type: "range" })`
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
import styled11 from "styled-components";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Switch = ({ checked, onChange, disabled }) => /* @__PURE__ */ jsx9(Container3, { children: /* @__PURE__ */ jsxs4(Label, { className: "switch", children: [
  /* @__PURE__ */ jsx9(Input2, { type: "checkbox", checked, onChange, disabled }),
  /* @__PURE__ */ jsx9("span", { className: "slider round" })
] }) });
var Label = styled11.label`
    position: relative;
    display: block;
    width: 40px;
    height: 18px;
    margin-left: 0;
`;
var Input2 = styled11.input`
    opacity: 0;
    width: 0;
    height: 0;
`;
var Container3 = styled11.div`
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
import styled12, { css as css6 } from "styled-components";
import { jsx as jsx10 } from "react/jsx-runtime";
var TabBar = ({ options, selected, onSet }) => {
  return /* @__PURE__ */ jsx10(Container4, { children: options.map((item, index) => /* @__PURE__ */ jsx10(
    Item,
    {
      $active: item.value === selected,
      onClick: () => onSet(item.value),
      children: item.title
    },
    index
  )) });
};
var Item = styled12.div`
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
    ${({ $active }) => $active && css6`
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
var Container4 = styled12.div`
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
import styled13, { css as css7 } from "styled-components";
import React5 from "react";
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var TextArea = React5.forwardRef(({
  onChange,
  $errorText,
  $hasError,
  ...props
}, ref) => /* @__PURE__ */ jsxs5(Fragment2, { children: [
  /* @__PURE__ */ jsx11(
    Wrapper,
    {
      ref,
      $hasError,
      onChange: (e) => onChange?.(e.target.value),
      ...props
    }
  ),
  $errorText && /* @__PURE__ */ jsx11(ErrorText2, { children: $errorText })
] }));
var Wrapper = styled13.textarea`
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
    ${({ $hasError }) => $hasError && css7`
        border-color: ${themeVar("error500")};
    `}
`;
var ErrorText2 = styled13.div`
    color: ${themeVar("error500")};
    font-size: 14px;
    margin-top: 4px;
`;
export {
  Avatar,
  AvatarThumb,
  Badge,
  Button,
  Dropdown,
  Input,
  LinkButton,
  Loader,
  Modal,
  ProgressBar,
  Range,
  Switch,
  TabBar,
  TextArea
};
