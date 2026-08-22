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
  BORDER_RADIUS_PX: () => BORDER_RADIUS_PX,
  Button: () => Button,
  CONTROL_HEIGHT_PX: () => CONTROL_HEIGHT_PX,
  Dropdown: () => Dropdown,
  FOCUS_RING: () => FOCUS_RING,
  FONT_SIZE_PX: () => FONT_SIZE_PX,
  GlobalStyled: () => GlobalStyled,
  Input: () => Input,
  LARGE_WIDTH_PX: () => LARGE_WIDTH_PX,
  LinkButton: () => LinkButton,
  Loader: () => Loader,
  MOBILE_WIDTH: () => MOBILE_WIDTH,
  MOTION_DURATION_MS: () => MOTION_DURATION_MS,
  Modal: () => Modal,
  NavPanel: () => NavPanel,
  ProgressBar: () => ProgressBar,
  Range: () => Range,
  SPACING_PX: () => SPACING_PX,
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
  getNextEnabledIndex: () => getNextEnabledIndex,
  loadThemeFx: () => loadThemeFx,
  onLgWidth: () => onLgWidth,
  onMdWidth: () => onMdWidth,
  onSmWidth: () => onSmWidth,
  themeVar: () => themeVar,
  toggleTheme: () => toggleTheme,
  useArrowKeys: () => useArrowKeys,
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

// src/theming/themes/dark.ts
var darkTheme = {
  surfacePage: "#14131a",
  surfaceBase: "#1d1b24",
  surfaceElevated: "#25222e",
  surfaceHover: "#2e2a39",
  surfaceSelected: "#352b55",
  textPrimary: "#f7f4fa",
  textSecondary: "#d1cad9",
  textMuted: "#a9a1b3",
  textDisabled: "#797180",
  textOnAccent: "#15131a",
  borderSubtle: "#2c2934",
  borderDefault: "#3a3544",
  borderStrong: "#655c72",
  borderDisabled: "#332f3a",
  focusRing: "#a991ff",
  actionPrimary: "#a991ff",
  actionPrimaryHover: "#b7a6ff",
  actionPrimaryActive: "#9379f2",
  actionPrimaryText: "#15131a",
  actionSecondary: "#4ba9d8",
  actionSecondaryHover: "#75bde2",
  actionSecondaryActive: "#3192c3",
  actionSecondaryText: "#15131a",
  actionDanger: "#d9575c",
  actionDangerHover: "#ed7378",
  actionDangerActive: "#cc5a5f",
  actionDangerText: "#15131a",
  actionDisabled: "#302c37",
  success: "#43c98b",
  warning: "#e5b454",
  scrollbarThumb: "#655c72",
  scrollbarThumbHover: "#83778f",
  shadowColor: "rgba(0, 0, 0, 0.42)",
  overlayBackdrop: "rgba(3, 2, 6, 0.76)"
};

// src/theming/themes/light.ts
var lightTheme = {
  surfacePage: "#f7f7fa",
  surfaceBase: "#ffffff",
  surfaceElevated: "#ffffff",
  surfaceHover: "#f4f1f7",
  surfaceSelected: "#eee8ff",
  surfaceCaption: "#f7f7fa",
  textPrimary: "#17131f",
  textSecondary: "#4f485d",
  textMuted: "#657889",
  textDisabled: "#929aa5",
  textOnAccent: "#ffffff",
  borderSubtle: "#e8e5ed",
  borderDefault: "#d5cfdd",
  borderStrong: "#9b91a8",
  borderDisabled: "#e2dee7",
  focusRing: "#7654e8",
  actionPrimary: "#6c47d8",
  actionPrimaryHover: "#5c39c8",
  actionPrimaryActive: "#4d2daf",
  actionPrimaryText: "#ffffff",
  actionSecondary: "#1179ac",
  actionSecondaryHover: "#0c6793",
  actionSecondaryActive: "#095477",
  actionSecondaryText: "#ffffff",
  actionDanger: "#c9403e",
  actionDangerHover: "#9f2c31",
  actionDangerActive: "#852329",
  actionDangerText: "#ffffff",
  actionDisabled: "#e6e1ec",
  success: "#16865a",
  warning: "#9a6700",
  scrollbarThumb: "#a89fb4",
  scrollbarThumbHover: "#887c98",
  shadowColor: "rgba(34, 24, 48, 0.14)",
  overlayBackdrop: "rgba(10, 8, 14, 0.68)"
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
var ONLINE_BORDER_WIDTH_PX = 2;
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
    border-radius: 50%;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${({ $isOnline }) => $isOnline && import_styled_components3.css`
        border: ${ONLINE_BORDER_WIDTH_PX}px solid ${themeVar("success")};
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
var AVATAR_THUMB_SIZE_PX = 32;
var ONLINE_DOT_SIZE_PX = 12;
var ONLINE_DOT_BORDER_WIDTH_PX = 2;
var AvatarThumb = ({ nickname, style, isOnline }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Wrap, { style: { ...style, backgroundColor: stringToColor(nickname || "0") }, children: [
  isOnline && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Dot, {}),
  nickname.length > 0 && nickname[0].toUpperCase()
] });
var Dot = import_styled_components4.default.div`
    width: ${ONLINE_DOT_SIZE_PX}px;
    height: ${ONLINE_DOT_SIZE_PX}px;
    border-radius: 50%;
    background-color: ${themeVar("success")};
    border: ${ONLINE_DOT_BORDER_WIDTH_PX}px solid ${themeVar("surfaceBase")};
    position: absolute;
    right: 0;
    bottom: 0;
`;
var Wrap = import_styled_components4.default.div`
    position: relative;
    width: ${AVATAR_THUMB_SIZE_PX}px;
    height: ${AVATAR_THUMB_SIZE_PX}px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;

`;

// src/components/Button.tsx
var import_styled_components5 = __toESM(require("styled-components"));

// src/const.ts
var MOBILE_WIDTH = 600;
var TABLET_WIDTH = 900;
var LARGE_WIDTH_PX = 1024;
var CONTROL_HEIGHT_PX = {
  small: 32,
  medium: 40,
  large: 48
};
var SPACING_PX = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32
};
var BORDER_RADIUS_PX = {
  small: 4,
  medium: 6,
  large: 8,
  xlarge: 12,
  pill: 999
};
var FONT_SIZE_PX = {
  small: 14,
  medium: 16
};
var MOTION_DURATION_MS = {
  press: 80,
  standard: 160
};
var FOCUS_RING = {
  widthPx: 3,
  opacityPercent: 34,
  offsetPx: 2
};
var onSmWidth = `@media only screen and (max-width: ${MOBILE_WIDTH}px)`;
var onMdWidth = `@media only screen and (max-width: ${TABLET_WIDTH}px)`;
var onLgWidth = `@media only screen and (max-width: ${LARGE_WIDTH_PX}px)`;

// src/components/Button.tsx
var BUTTON_HORIZONTAL_PADDING_PX = {
  small: SPACING_PX.sm,
  medium: SPACING_PX.md,
  large: SPACING_PX.lg
};
var BUTTON_FONT_SIZE_PX = {
  small: FONT_SIZE_PX.small,
  medium: FONT_SIZE_PX.medium,
  large: FONT_SIZE_PX.medium
};
var BUTTON_BORDER_WIDTH_PX = 1;
var variantStyles = ({ theme: theme2, $variant = "default" }) => {
  const variant = $variant;
  if (variant === "primary") return import_styled_components5.css`
        color: ${theme2.actionPrimaryText};
        background: ${theme2.actionPrimary};
        border-color: transparent;
        &:hover:not(:disabled):not([aria-disabled='true']) { background: ${theme2.actionPrimaryHover}; }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme2.actionPrimaryActive}; }
    `;
  if (variant === "secondary") return import_styled_components5.css`
        color: ${theme2.actionSecondaryText};
        background: ${theme2.actionSecondary};
        border-color: transparent;
        &:hover:not(:disabled):not([aria-disabled='true']) { background: ${theme2.actionSecondaryHover}; }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme2.actionSecondaryActive}; }
    `;
  if (variant === "danger") return import_styled_components5.css`
        color: ${theme2.actionDangerText};
        background: ${theme2.actionDanger};
        border-color: transparent;
        &:hover:not(:disabled):not([aria-disabled='true']) { background: ${theme2.actionDangerHover}; }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme2.actionDangerActive}; }
    `;
  return import_styled_components5.css`
        color: ${theme2.textSecondary};
        background: ${theme2.surfaceBase};
        &:hover:not(:disabled):not([aria-disabled='true']) {
            color: ${theme2.textPrimary};
            background: ${theme2.surfaceHover};
            border-color: ${theme2.borderStrong};
        }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme2.surfaceSelected}; }
    `;
};
var sizeStyles = ({ $size = "medium", $iconOnly }) => {
  const height = CONTROL_HEIGHT_PX[$size];
  const horizontalPadding = BUTTON_HORIZONTAL_PADDING_PX[$size];
  return import_styled_components5.css`
        min-height: ${height}px;
        min-width: ${$iconOnly ? height : 0}px;
        padding: ${$iconOnly ? 0 : `0 ${horizontalPadding}px`};
        font-size: ${BUTTON_FONT_SIZE_PX[$size]}px;
    `;
};
var ButtonCss = import_styled_components5.css`
    ${sizeStyles}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${SPACING_PX.xs}px;
    width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};
    border: ${BUTTON_BORDER_WIDTH_PX}px ${({ $dashed }) => $dashed ? "dashed" : "solid"} ${themeVar("borderDefault")};
    border-radius: ${BORDER_RADIUS_PX.large}px;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    user-select: none;
    transition: background-color ${MOTION_DURATION_MS.standard}ms ease,
        border-color ${MOTION_DURATION_MS.standard}ms ease,
        color ${MOTION_DURATION_MS.standard}ms ease,
        box-shadow ${MOTION_DURATION_MS.standard}ms ease,
        transform ${MOTION_DURATION_MS.press}ms ease;

    svg { flex: 0 0 auto; }
    ${variantStyles}

    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
    }

    &:disabled,
    &[aria-disabled='true'] {
        color: ${themeVar("textDisabled")};
        background: ${themeVar("actionDisabled")};
        border-color: ${themeVar("borderDisabled")};
        box-shadow: none;
        cursor: not-allowed;
    }
`;
var Button = import_styled_components5.default.button.attrs({ type: "button" })`
    ${ButtonCss}
`;
var LinkButton = import_styled_components5.default.a`
    ${ButtonCss}
    &[aria-disabled='true'] { pointer-events: none; }
`;
Button.displayName = "Button";
LinkButton.displayName = "LinkButton";

// src/components/Dropdown.tsx
var import_react3 = __toESM(require("react"));
var import_ai = require("react-icons/ai");
var import_styled_components6 = __toESM(require("styled-components"));

// src/lib/useArrowKeys.ts
var import_react2 = __toESM(require("react"));
var noDisabledItems = () => false;
var getNextEnabledIndex = (length, from, direction, isItemDisabled = () => false) => {
  if (length === 0) return null;
  for (let step = 1; step <= length; step += 1) {
    const index = (from + direction * step + length) % length;
    if (!isItemDisabled(index)) return index;
  }
  return null;
};
var useArrowKeys = ({
  visible,
  length,
  onSelect,
  onClose,
  isItemDisabled = noDisabledItems
}) => {
  const [index, setIndex] = import_react2.default.useState(null);
  import_react2.default.useEffect(() => {
    if (!visible) setIndex(null);
  }, [visible]);
  import_react2.default.useEffect(() => {
    if (index !== null && (index >= length || isItemDisabled(index))) setIndex(null);
  }, [index, isItemDisabled, length]);
  import_react2.default.useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const start = index ?? (direction === 1 ? -1 : 0);
        setIndex(getNextEnabledIndex(length, start, direction, isItemDisabled));
        return;
      }
      if ((event.key === "Enter" || event.key === " ") && index !== null) {
        event.preventDefault();
        onSelect(index);
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [index, isItemDisabled, length, onClose, onSelect, visible]);
  return [index, setIndex];
};

// src/components/Dropdown.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var DEFAULT_DROPDOWN_WIDTH_PX = 240;
var DEFAULT_MENU_MAX_HEIGHT_PX = 320;
var MENU_MIN_HEIGHT_PX = 96;
var MENU_PLACEMENT_THRESHOLD_PX = 180;
var MENU_VIEWPORT_MARGIN_PX = SPACING_PX.sm;
var MENU_OFFSET_PX = BORDER_RADIUS_PX.medium;
var MENU_Z_INDEX = 20;
var MENU_ITEM_HORIZONTAL_PADDING_PX = 10;
var MENU_SHADOW_Y_PX = SPACING_PX.sm;
var MENU_SHADOW_BLUR_PX = SPACING_PX.xxl;
var SCROLLBAR_WIDTH_PX = SPACING_PX.xs;
var SCROLLBAR_THUMB_BORDER_PX = 2;
var CHEVRON_OPEN_ROTATION_DEG = 180;
var CONTROL_BORDER_WIDTH_PX = 1;
var Dropdown = ({
  options,
  onOptionChange,
  selected,
  placeholder = "Empty",
  headerIcon,
  disabled = false,
  maxMenuHeight = DEFAULT_MENU_MAX_HEIGHT_PX,
  width = DEFAULT_DROPDOWN_WIDTH_PX,
  "aria-label": ariaLabel
}) => {
  const [isOpen, setIsOpen] = import_react3.default.useState(false);
  const [placement, setPlacement] = import_react3.default.useState("bottom");
  const [availableHeight, setAvailableHeight] = import_react3.default.useState(maxMenuHeight);
  const containerRef = import_react3.default.useRef(null);
  const itemRefs = import_react3.default.useRef([]);
  const listId = import_react3.default.useId();
  const selectedIdx = options.findIndex((item) => item.value === selected);
  const selectedOption = selectedIdx >= 0 ? options[selectedIdx] : void 0;
  const closeMenu = import_react3.default.useCallback(() => {
    setIsOpen(false);
  }, []);
  const selectOption = import_react3.default.useCallback((item) => {
    if (item.disabled) return;
    onOptionChange(item.value);
    closeMenu();
  }, [closeMenu, onOptionChange]);
  const isItemDisabled = import_react3.default.useCallback(
    (index) => Boolean(options[index]?.disabled),
    [options]
  );
  const selectByIndex = import_react3.default.useCallback(
    (index) => selectOption(options[index]),
    [options, selectOption]
  );
  const [highlightedIdx, setHighlightedIdx] = useArrowKeys({
    visible: isOpen,
    length: options.length,
    onSelect: selectByIndex,
    onClose: closeMenu,
    isItemDisabled
  });
  const openMenu = import_react3.default.useCallback((preferredIdx) => {
    if (disabled || !options.length) return;
    const fallbackIdx = selectedIdx >= 0 && !options[selectedIdx].disabled ? selectedIdx : getNextEnabledIndex(options.length, -1, 1, isItemDisabled);
    setHighlightedIdx(preferredIdx ?? fallbackIdx);
    setIsOpen(true);
  }, [disabled, isItemDisabled, options, selectedIdx, setHighlightedIdx]);
  import_react3.default.useLayoutEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom - MENU_VIEWPORT_MARGIN_PX;
    const above = rect.top - MENU_VIEWPORT_MARGIN_PX;
    const nextPlacement = below < Math.min(MENU_PLACEMENT_THRESHOLD_PX, maxMenuHeight) && above > below ? "top" : "bottom";
    setPlacement(nextPlacement);
    setAvailableHeight(Math.max(
      MENU_MIN_HEIGHT_PX,
      Math.min(maxMenuHeight, nextPlacement === "top" ? above : below)
    ));
  }, [isOpen, maxMenuHeight]);
  import_react3.default.useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) closeMenu();
    };
    const handleResize = () => closeMenu();
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu, isOpen]);
  import_react3.default.useEffect(() => {
    if (isOpen && highlightedIdx !== null) {
      itemRefs.current[highlightedIdx]?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIdx, isOpen]);
  const onKeyDown = (event) => {
    if (!disabled && !isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const edge = direction === 1 ? -1 : 0;
      openMenu(getNextEnabledIndex(options.length, edge, direction, isItemDisabled));
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Container, { ref: containerRef, $width: width, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      Header,
      {
        type: "button",
        disabled,
        "aria-label": ariaLabel,
        "aria-haspopup": "listbox",
        "aria-expanded": isOpen,
        "aria-controls": isOpen ? listId : void 0,
        "aria-activedescendant": isOpen && highlightedIdx !== null ? `${listId}-${highlightedIdx}` : void 0,
        onClick: () => isOpen ? closeMenu() : openMenu(),
        onKeyDown,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(HeaderContent, { children: [
            selectedOption?.icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HeaderLeading, { children: selectedOption.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HeaderText, { $placeholder: !selectedOption, children: selectedOption?.text ?? placeholder })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HeaderTrailing, { $open: isOpen, children: headerIcon ?? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ai.AiOutlineDown, { "aria-hidden": true }) })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      List,
      {
        id: listId,
        role: "listbox",
        "aria-label": ariaLabel,
        $placement: placement,
        $maxHeight: availableHeight,
        children: options.map((item, index) => {
          const isSelected = item.value === selected;
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { role: "presentation", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            ListItem,
            {
              ref: (element) => {
                itemRefs.current[index] = element;
              },
              id: `${listId}-${index}`,
              type: "button",
              role: "option",
              "aria-selected": isSelected,
              disabled: item.disabled,
              $selected: isSelected,
              $highlighted: highlightedIdx === index,
              onPointerMove: () => !item.disabled && setHighlightedIdx(index),
              onClick: () => selectOption(item),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ItemContent, { children: [
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ItemIcon, { children: item.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ItemText, { children: item.text })
                ] }),
                isSelected && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ai.AiOutlineCheck, { "aria-hidden": true })
              ]
            }
          ) }, `${String(item.value)}-${index}`);
        })
      }
    )
  ] });
};
var Container = import_styled_components6.default.div`
    position: relative;
    width: ${({ $width }) => typeof $width === "number" ? `${$width}px` : $width};
    ${onSmWidth} { max-width: 100%; }
`;
var Header = import_styled_components6.default.button`
    width: 100%;
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    padding: 0 ${SPACING_PX.sm}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${SPACING_PX.sm}px;
    color: ${themeVar("textSecondary")};
    background: ${themeVar("surfaceBase")};
    border: ${CONTROL_BORDER_WIDTH_PX}px solid ${themeVar("borderDefault")};
    border-radius: ${BORDER_RADIUS_PX.large}px;
    cursor: pointer;
    text-align: left;
    transition: border-color ${MOTION_DURATION_MS.standard}ms ease,
        box-shadow ${MOTION_DURATION_MS.standard}ms ease,
        background ${MOTION_DURATION_MS.standard}ms ease;

    &:hover:not(:disabled) { border-color: ${themeVar("borderStrong")}; }
    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
    }
    &:disabled {
        color: ${themeVar("textDisabled")};
        background: ${themeVar("actionDisabled")};
        border-color: ${themeVar("borderDisabled")};
        cursor: not-allowed;
    }
`;
var HeaderContent = import_styled_components6.default.span`
    min-width: 0;
    display: flex;
    align-items: center;
    gap: ${SPACING_PX.xs}px;
`;
var HeaderLeading = import_styled_components6.default.span`display: flex; flex: 0 0 auto;`;
var HeaderText = import_styled_components6.default.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ $placeholder }) => $placeholder && import_styled_components6.css`color: ${themeVar("textMuted")};`}
`;
var HeaderTrailing = import_styled_components6.default.span`
    display: flex;
    flex: 0 0 auto;
    transform: rotate(${({ $open }) => $open ? CHEVRON_OPEN_ROTATION_DEG : 0}deg);
    transition: transform ${MOTION_DURATION_MS.standard}ms ease;
`;
var List = import_styled_components6.default.ul`
    position: absolute;
    ${({ $placement }) => $placement === "top" ? `bottom: calc(100% + ${MENU_OFFSET_PX}px);` : `top: calc(100% + ${MENU_OFFSET_PX}px);`}
    left: 0;
    z-index: ${MENU_Z_INDEX};
    width: 100%;
    max-height: ${({ $maxHeight }) => $maxHeight}px;
    padding: ${SPACING_PX.xxs}px;
    margin: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    scrollbar-color: ${themeVar("scrollbarThumb")} transparent;
    list-style: none;
    color: ${themeVar("textSecondary")};
    background: ${themeVar("surfaceElevated")};
    border: ${CONTROL_BORDER_WIDTH_PX}px solid ${themeVar("borderSubtle")};
    border-radius: ${BORDER_RADIUS_PX.large}px;
    box-shadow: 0 ${MENU_SHADOW_Y_PX}px ${MENU_SHADOW_BLUR_PX}px ${themeVar("shadowColor")};

    display: flex;
    flex-direction: column;
    gap: ${SPACING_PX.xxs}px;

    &::-webkit-scrollbar { width: ${SCROLLBAR_WIDTH_PX}px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb {
        background: ${themeVar("scrollbarThumb")};
        border: ${SCROLLBAR_THUMB_BORDER_PX}px solid ${themeVar("surfaceElevated")};
        border-radius: ${BORDER_RADIUS_PX.pill}px;
    }
    &::-webkit-scrollbar-thumb:hover { background: ${themeVar("scrollbarThumbHover")}; }
`;
var ListItem = import_styled_components6.default.button`
    width: 100%;
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    padding: ${SPACING_PX.xs}px ${MENU_ITEM_HORIZONTAL_PADDING_PX}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${SPACING_PX.sm}px;
    color: ${({ $selected, theme: theme2 }) => $selected ? theme2.actionPrimary : theme2.textSecondary};
    background: ${({ $selected, $highlighted, theme: theme2 }) => $selected ? theme2.surfaceSelected : $highlighted ? theme2.surfaceHover : "transparent"};
    border: 0;
    border-radius: ${BORDER_RADIUS_PX.medium}px;
    cursor: pointer;
    text-align: left;

    &:focus { outline: none; }
    &:disabled {
        color: ${themeVar("textDisabled")};
        cursor: not-allowed;
    }
`;
var ItemContent = import_styled_components6.default.span`
    min-width: 0;
    display: flex;
    align-items: center;
    gap: ${SPACING_PX.xs}px;
`;
var ItemIcon = import_styled_components6.default.span`display: flex; flex: 0 0 auto;`;
var ItemText = import_styled_components6.default.span`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`;

// src/components/Input.tsx
var import_react4 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var INPUT_BORDER_WIDTH_PX = 1;
var Input = import_react4.default.forwardRef(({
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
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    width: 100%;
    font-size: ${FONT_SIZE_PX.medium}px;
    padding: ${SPACING_PX.xs}px ${SPACING_PX.sm}px;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    background: ${themeVar("surfaceBase")};
    border: ${INPUT_BORDER_WIDTH_PX}px solid ${themeVar("borderDefault")};
    color: ${themeVar("textPrimary")};
    transition: border-color ${MOTION_DURATION_MS.standard}ms ease,
        box-shadow ${MOTION_DURATION_MS.standard}ms ease;
    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
        border-color: ${themeVar("focusRing")};
    }
    ${({ $hasError }) => $hasError && import_styled_components7.css`
        border-color: ${themeVar("actionDanger")};
    `}
    &::placeholder {
        color: ${themeVar("textMuted")};
    }
    &:disabled {
        color: ${themeVar("textDisabled")};
        background: ${themeVar("actionDisabled")};
        border-color: ${themeVar("borderDisabled")};
        cursor: not-allowed;
    }
`;
var ErrorText = import_styled_components7.default.div`
    color: ${themeVar("actionDanger")};
    font-size: ${FONT_SIZE_PX.small}px;
    margin-top: ${SPACING_PX.xxs}px;
`;

// src/components/Loader.tsx
var import_styled_components8 = __toESM(require("styled-components"));
var LOADER_SIZE_PX = 36;
var LOADER_BORDER_WIDTH_PX = 2;
var LOADER_ROTATION_DURATION_MS = 500;
var FULL_ROTATION_DEG = 360;
var Loader = import_styled_components8.default.div`
  border: ${LOADER_BORDER_WIDTH_PX}px solid ${themeVar("borderDefault")};
  border-top-color: ${themeVar("actionPrimary")};
  border-radius: 50%;
  width: ${LOADER_SIZE_PX}px;
  height: ${LOADER_SIZE_PX}px;
  animation: spin ${LOADER_ROTATION_DURATION_MS}ms linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(${FULL_ROTATION_DEG}deg); }
  }
`;
Loader.displayName = "Loader";

// src/components/Modal.tsx
var import_react5 = __toESM(require("react"));
var import_styled_components9 = __toESM(require("styled-components"));
var import_ai2 = require("react-icons/ai");
var import_jsx_runtime6 = require("react/jsx-runtime");
var MODAL_WIDTH_VIEWPORT_PERCENT = 85;
var MODAL_BORDER_WIDTH_PX = 1;
var MODAL_SHADOW_Y_PX = SPACING_PX.xl;
var MODAL_SHADOW_BLUR_PX = 64;
var MODAL_SCROLLBAR_WIDTH_PX = SPACING_PX.xs;
var MODAL_SCROLLBAR_THUMB_BORDER_PX = 2;
var MODAL_CLOSE_SCROLLBAR_GAP_PX = SPACING_PX.xs;
var MODAL_CLOSE_RIGHT_PX = SPACING_PX.md + MODAL_SCROLLBAR_WIDTH_PX + MODAL_CLOSE_SCROLLBAR_GAP_PX;
var OVERLAY_Z_INDEX = 20;
var OVERLAY_BLUR_PX = 5;
var Modal = ({ visible, onClose, children, loading = false, style }) => {
  import_react5.default.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);
  import_react5.default.useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, visible]);
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Overlay, { onClick: () => onClose(), style, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Container2, { role: "dialog", "aria-modal": "true", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ModalHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CloseButton, { type: "button", "aria-label": "Close modal", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ai2.AiOutlineClose, { "aria-hidden": true }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ModalContent, { $loading: loading, children: loading ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Loader, {}) : children })
  ] }) });
};
var Container2 = import_styled_components9.default.div`
    position: relative;
    background-color: ${themeVar("surfacePage")};
    width: min(${MODAL_WIDTH_VIEWPORT_PERCENT}vw, ${TABLET_WIDTH}px);
    padding: ${SPACING_PX.xl}px;
    max-width: ${TABLET_WIDTH}px;
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: ${MODAL_BORDER_WIDTH_PX}px solid ${themeVar("borderSubtle")};
    border-radius: ${BORDER_RADIUS_PX.xlarge}px;
    box-shadow: 0 ${MODAL_SHADOW_Y_PX}px ${MODAL_SHADOW_BLUR_PX}px ${themeVar("shadowColor")};
`;
var ModalHeader = import_styled_components9.default.div`
    position: absolute;
    top: ${SPACING_PX.md}px;
    right: ${MODAL_CLOSE_RIGHT_PX}px;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
var CloseButton = import_styled_components9.default.button`
    width: ${CONTROL_HEIGHT_PX.small}px;
    height: ${CONTROL_HEIGHT_PX.small}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: ${themeVar("textMuted")};
    background: transparent;
    border: 0;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    cursor: pointer;
    transition: color ${MOTION_DURATION_MS.standard}ms ease,
        background ${MOTION_DURATION_MS.standard}ms ease;

    &:hover {
        color: ${themeVar("textPrimary")};
        background: ${themeVar("surfaceHover")};
    }
    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
    }
`;
var ModalContent = import_styled_components9.default.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: ${themeVar("scrollbarThumb")} transparent;

    &::-webkit-scrollbar { width: ${MODAL_SCROLLBAR_WIDTH_PX}px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb {
        background: ${themeVar("scrollbarThumb")};
        border: ${MODAL_SCROLLBAR_THUMB_BORDER_PX}px solid ${themeVar("surfacePage")};
        border-radius: ${BORDER_RADIUS_PX.pill}px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${themeVar("scrollbarThumbHover")};
    }
    ${({ $loading }) => $loading && `
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;
var Overlay = import_styled_components9.default.div`
    z-index: ${OVERLAY_Z_INDEX};
    width: 100vw;
    height: 100dvh;
    padding: ${SPACING_PX.md}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed; 
    top: 0;
    left: 0;
    background-color: ${themeVar("overlayBackdrop")};
    overflow: hidden;
    overflow-anchor: auto;
    backdrop-filter: blur(${OVERLAY_BLUR_PX}px);
`;

// src/components/ProgressBar.tsx
var import_styled_components10 = __toESM(require("styled-components"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var PROGRESS_MIN_VISIBLE_PERCENT = 15;
var ProgressBar = ({ completed, style }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Container3, { style, children: completed > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Filter, { completed }) });
var Container3 = import_styled_components10.default.div`
    border-radius: ${BORDER_RADIUS_PX.pill}px;
    background-color: ${themeVar("borderSubtle")};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: ${SPACING_PX.xs}px;
`;
var Filter = import_styled_components10.default.div`
    height: 100%;
    width: ${({ completed }) => completed}%;
    max-width: 100%;
    min-width: ${PROGRESS_MIN_VISIBLE_PERCENT}%;
    border-radius: inherit;
    background-color: ${themeVar("actionPrimary")};
`;

// src/components/Range.tsx
var import_styled_components11 = __toESM(require("styled-components"));
var RANGE_HIT_AREA_HEIGHT_PX = 10;
var RANGE_TRACK_HEIGHT_PX = 2;
var RANGE_THUMB_SIZE_PX = 10;
var RANGE_FIREFOX_THUMB_SIZE_PX = 12;
var RANGE_THUMB_TRACK_OFFSET_PX = -4;
var RANGE_FOCUS_OFFSET_PX = 4;
var RANGE_DISABLED_OPACITY = 0.55;
var Range = import_styled_components11.default.input.attrs({ type: "range" })`
   &[type='range'] {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 100%;
    height: ${RANGE_HIT_AREA_HEIGHT_PX}px;
    cursor: pointer;
  }

  &[type='range']::-webkit-slider-runnable-track {
    height: ${RANGE_TRACK_HEIGHT_PX}px;
    background: ${themeVar("borderDefault")};
    border-radius: ${RANGE_TRACK_HEIGHT_PX}px;
  }

  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: ${BORDER_RADIUS_PX.small}px;
    height: ${RANGE_THUMB_SIZE_PX}px;
    width: ${RANGE_THUMB_SIZE_PX}px;
    background: ${themeVar("actionPrimary")};
    cursor: pointer;
    margin-top: ${RANGE_THUMB_TRACK_OFFSET_PX}px;
  }

  &[type='range']::-moz-range-track {
    height: ${RANGE_TRACK_HEIGHT_PX}px;
    background: ${themeVar("borderDefault")};
    border-radius: ${RANGE_TRACK_HEIGHT_PX}px;
  }

  &[type='range']::-moz-range-thumb {
    width: ${RANGE_FIREFOX_THUMB_SIZE_PX}px;
    height: ${RANGE_FIREFOX_THUMB_SIZE_PX}px;
    border: 0;
    border-radius: ${BORDER_RADIUS_PX.small}px;
    background: ${themeVar("actionPrimary")};
  }

  &[type='range']:focus-visible {
    outline: ${FOCUS_RING.widthPx}px solid color-mix(
      in srgb,
      ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
      transparent
    );
    outline-offset: ${RANGE_FOCUS_OFFSET_PX}px;
    border-radius: ${BORDER_RADIUS_PX.small}px;
  }

  &[type='range']:disabled { cursor: not-allowed; opacity: ${RANGE_DISABLED_OPACITY}; }
`;

// src/components/Switch.tsx
var import_styled_components12 = __toESM(require("styled-components"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var SWITCH_WIDTH_PX = 40;
var SWITCH_HEIGHT_PX = 18;
var SWITCH_THUMB_SIZE_PX = 12;
var SWITCH_THUMB_LEFT_PX = 4;
var SWITCH_THUMB_BOTTOM_PX = 3;
var SWITCH_THUMB_TRANSLATE_X_PX = 20;
var VISUALLY_HIDDEN_SIZE_PX = 1;
var Switch = ({ checked, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Container4, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Label, { className: "switch", children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Input2, { type: "checkbox", checked, onChange, disabled }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "slider round" })
] }) });
var Label = import_styled_components12.default.label`
    position: relative;
    display: block;
    width: ${SWITCH_WIDTH_PX}px;
    height: ${SWITCH_HEIGHT_PX}px;
    margin-left: 0;
    cursor: pointer;
    &:has(input:disabled) { cursor: not-allowed; }
`;
var Input2 = import_styled_components12.default.input`
    opacity: 0;
    position: absolute;
    width: ${VISUALLY_HIDDEN_SIZE_PX}px;
    height: ${VISUALLY_HIDDEN_SIZE_PX}px;
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
    background-color: ${themeVar("borderStrong")};
    transition: background-color ${MOTION_DURATION_MS.standard}ms ease,
      box-shadow ${MOTION_DURATION_MS.standard}ms ease;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${SWITCH_THUMB_SIZE_PX}px;
    width: ${SWITCH_THUMB_SIZE_PX}px;
    left: ${SWITCH_THUMB_LEFT_PX}px;
    bottom: ${SWITCH_THUMB_BOTTOM_PX}px;
    background-color: white;
    transition: transform ${MOTION_DURATION_MS.standard}ms ease;
  }

  
  input:checked + .slider {
    background-color: ${themeVar("actionPrimary")};
  }
  
  input:focus-visible + .slider {
    box-shadow: 0 0 0 ${FOCUS_RING.widthPx}px color-mix(
      in srgb,
      ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
      transparent
    );
  }
  input:disabled + .slider { 
    background-color: ${themeVar("actionDisabled")};
    cursor: not-allowed;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(${SWITCH_THUMB_TRANSLATE_X_PX}px);
    -ms-transform: translateX(${SWITCH_THUMB_TRANSLATE_X_PX}px);
    transform: translateX(${SWITCH_THUMB_TRANSLATE_X_PX}px);
  }

  .slider.round {
    border-radius: ${BORDER_RADIUS_PX.pill}px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
`;

// src/components/TabBar.tsx
var import_styled_components13 = __toESM(require("styled-components"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var TAB_HORIZONTAL_PADDING_PX = SPACING_PX.md;
var TAB_MOBILE_VERTICAL_PADDING_PX = 10;
var TAB_LIST_PADDING_PX = 3;
var TAB_FOCUS_OFFSET_PX = 1;
var TAB_LIST_BORDER_WIDTH_PX = 1;
var TabBar = ({ options, selected, onSet }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Container5, { children: options.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Item,
    {
      type: "button",
      $active: item.value === selected,
      onClick: () => onSet?.(item.value),
      children: item.title
    },
    index
  )) });
};
var Item = import_styled_components13.default.button`
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    white-space: nowrap;
    padding: ${SPACING_PX.xs}px ${TAB_HORIZONTAL_PADDING_PX}px;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    border: 0;
    background: transparent;
    font-size: ${FONT_SIZE_PX.medium}px;
    gap: ${SPACING_PX.sm}px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar("textMuted")};
    ${({ $active }) => $active && import_styled_components13.css`
        color: ${themeVar("actionPrimary")};
        background: ${themeVar("surfaceSelected")};
    `}
    &:hover {
        color: ${themeVar("actionPrimary")};
        background: ${themeVar("surfaceHover")};
    }
    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${TAB_FOCUS_OFFSET_PX}px;
    }
    cursor: pointer;

    ${onSmWidth} {
        padding: ${TAB_MOBILE_VERTICAL_PADDING_PX}px ${SPACING_PX.sm}px;
        font-size: ${FONT_SIZE_PX.small}px;
    }
`;
var Container5 = import_styled_components13.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${SPACING_PX.xxs}px;
    box-sizing: border-box;
    overflow-x: auto;
    padding: ${TAB_LIST_PADDING_PX}px;
    border: ${TAB_LIST_BORDER_WIDTH_PX}px solid ${themeVar("borderSubtle")};
    border-radius: ${BORDER_RADIUS_PX.xlarge}px;
    background: ${themeVar("surfacePage")};
`;

// src/components/TextArea.tsx
var import_styled_components14 = __toESM(require("styled-components"));
var import_react6 = __toESM(require("react"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var TEXT_AREA_BORDER_WIDTH_PX = 1;
var TextArea = import_react6.default.forwardRef(({
  onChange,
  $errorText,
  $hasError,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Wrapper,
    {
      ref,
      $hasError,
      onChange: (e) => onChange?.(e.target.value),
      ...props
    }
  ),
  $errorText && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ErrorText2, { children: $errorText })
] }));
var Wrapper = import_styled_components14.default.textarea`
    font-size: ${FONT_SIZE_PX.medium}px;
    padding: ${SPACING_PX.sm}px;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    background: ${themeVar("surfaceBase")};
    color: ${themeVar("textPrimary")};
    width: 100%;
    border: ${TEXT_AREA_BORDER_WIDTH_PX}px solid ${themeVar("borderDefault")};
    resize: vertical;
    transition: border-color ${MOTION_DURATION_MS.standard}ms ease,
        box-shadow ${MOTION_DURATION_MS.standard}ms ease;

    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
        border-color: ${themeVar("focusRing")};
    }
    ${({ $hasError }) => $hasError && import_styled_components14.css`
        border-color: ${themeVar("actionDanger")};
    `}
    &::placeholder { color: ${themeVar("textMuted")}; }
    &:disabled {
        color: ${themeVar("textDisabled")};
        background: ${themeVar("actionDisabled")};
        border-color: ${themeVar("borderDisabled")};
        cursor: not-allowed;
    }
`;
var ErrorText2 = import_styled_components14.default.div`
    color: ${themeVar("actionDanger")};
    font-size: ${FONT_SIZE_PX.small}px;
    margin-top: ${SPACING_PX.xxs}px;
`;

// src/components/NavPanel/NavPanel.tsx
var import_styled_components15 = __toESM(require("styled-components"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var NAV_PANEL_WIDTH_PX = 60;
var NAV_PANEL_Z_INDEX = 11;
var NAV_ITEM_BORDER_WIDTH_PX = 1;
var NavPanel = ({
  links,
  LinkElement
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Container6, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Wrapper2, { children: links.map((v, idx) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
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
    width: ${NAV_PANEL_WIDTH_PX}px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    border-right: ${NAV_ITEM_BORDER_WIDTH_PX}px solid ${themeVar("borderSubtle")};
    background: ${themeVar("surfaceBase")};
    background-size: cover;
    z-index: ${NAV_PANEL_Z_INDEX};
  
`;
var Wrapper2 = import_styled_components15.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${SPACING_PX.md}px;
    padding-top: ${SPACING_PX.sm}px;
    padding-bottom: ${SPACING_PX.sm}px;
    box-sizing: border-box;


    .link-element {
        display: flex;
        align-items: center;
        border: ${NAV_ITEM_BORDER_WIDTH_PX}px solid transparent;
        justify-content: center;
        outline: none;
        border-radius: 50%;
        padding: ${SPACING_PX.xs}px;
        cursor: pointer;
        color: ${themeVar("textMuted")};
        background: ${themeVar("surfaceBase")};
        & * {
            color: currentColor;
        }
        &:hover {
            color: ${themeVar("actionPrimary")};
            background-color: ${themeVar("surfaceHover")};
            border: ${NAV_ITEM_BORDER_WIDTH_PX}px solid ${themeVar("borderDefault")};
            svg {
                fill: currentColor;
                stroke: currentColor;
            }
        }
        &:focus-visible {
            outline: ${FOCUS_RING.widthPx}px solid color-mix(
                in srgb,
                ${themeVar("focusRing")} ${FOCUS_RING.opacityPercent}%,
                transparent
            );
            outline-offset: ${FOCUS_RING.offsetPx}px;
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
var SETTINGS_BOTTOM_PADDING_PX = 86;
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
  padding-left: ${SPACING_PX.xl}px;
  padding-right: ${SPACING_PX.xl}px;
  padding-bottom: ${SETTINGS_BOTTOM_PADDING_PX}px;
  box-sizing: border-box;
  gap: ${SPACING_PX.sm}px;
`;
var Header2 = import_styled_components16.default.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: ${SPACING_PX.sm}px;
`;

// src/components/Settings/SettingRow.tsx
var import_styled_components17 = __toESM(require("styled-components"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var SETTING_ROW_GAP_PX = 10;
var SETTING_ROW_BORDER_WIDTH_PX = 1;
var SETTING_DESCRIPTION_MAX_WIDTH_PX = 360;
var SETTING_ICON_BASELINE_OFFSET_PX = -2;
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
    padding: ${SPACING_PX.sm}px;
    width: 100%;
    box-sizing: border-box;
    gap: ${SETTING_ROW_GAP_PX}px;
    align-items: center;
    border-top: ${SETTING_ROW_BORDER_WIDTH_PX}px solid ${themeVar("borderSubtle")};
    &:first-child {
        border-top: ${SETTING_ROW_BORDER_WIDTH_PX}px solid transparent;
    }
`;
var Title = import_styled_components17.default.div`
    font-size: ${FONT_SIZE_PX.medium}px;
    flex: 1;
    svg {
        margin-right: ${SPACING_PX.xs}px;
        margin-bottom: ${SETTING_ICON_BASELINE_OFFSET_PX}px;
    }    
`;
var Description = import_styled_components17.default.div`
    font-size: ${FONT_SIZE_PX.small}px;
    color: ${themeVar("textMuted")};
    background-color: ${themeVar("surfaceHover")};
    margin-top: ${BORDER_RADIUS_PX.medium}px;
    max-width: ${SETTING_DESCRIPTION_MAX_WIDTH_PX}px;
    padding: ${SPACING_PX.xs}px;
    border-radius: ${BORDER_RADIUS_PX.xlarge}px;

`;

// src/context-menu/create-context-menu.tsx
var import_react7 = __toESM(require("react"));
var import_effector_react2 = require("effector-react");
var import_effector2 = require("effector");
var import_styled_components18 = __toESM(require("styled-components"));
var import_jsx_runtime14 = require("react/jsx-runtime");
var CONTEXT_MENU_WIDTH_PX = 220;
var CONTEXT_MENU_ITEM_HEIGHT_PX = 26;
var CONTEXT_MENU_VIEWPORT_PADDING_PX = SPACING_PX.sm;
var CONTEXT_MENU_Z_INDEX = 990;
var CONTEXT_MENU_BORDER_WIDTH_PX = 1;
var CONTEXT_MENU_FONT_SIZE_PX = 13;
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
      top = e.clientY - height - CONTEXT_MENU_VIEWPORT_PADDING_PX;
    } else {
      top = e.clientY;
    }
    if (window.innerWidth / 2 < e.clientX) {
      left = e.clientX - CONTEXT_MENU_WIDTH_PX;
    } else {
      left = e.clientX;
    }
    return { left, top, payload };
  });
  const ContextMenu = ({ items, title }) => {
    const [left, top, payload] = (0, import_effector_react2.useUnit)([$left, $top, $payload]);
    const clearContextMenu = import_react7.default.useCallback(() => {
      closeMenu();
    }, []);
    const itemsToRender = import_react7.default.useMemo(() => {
      return items.filter((v) => v.filter ? v.filter(payload) : true);
    }, [items, payload]);
    import_react7.default.useEffect(() => {
      setHeight(itemsToRender.length * CONTEXT_MENU_ITEM_HEIGHT_PX);
    }, [itemsToRender]);
    import_react7.default.useEffect(() => {
      document.addEventListener("click", clearContextMenu);
      return () => {
        document.removeEventListener("click", clearContextMenu);
      };
    }, []);
    const [selectedIdx, setSelectedIdx] = useArrowKeys({
      visible: payload !== null,
      length: itemsToRender.length,
      onSelect: (id) => itemsToRender[id].action(payload),
      onClose: closeMenu
    });
    if (payload === null) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      Motion,
      {
        onContextMenuCapture: (e) => e.preventDefault(),
        style: { left, top },
        children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TitleWrapper, { children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MenuWrapper, { children: itemsToRender.map((item, index) => {
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
        ]
      }
    );
  };
  return {
    ContextMenu,
    openMenu,
    $payload,
    closeMenu
  };
};
var Motion = import_styled_components18.default.div`
    position: fixed;
    width: 0;
    height: 0;
    left:0;
    z-index: ${CONTEXT_MENU_Z_INDEX};
    overflow: visible;
    &::-webkit-scrollbar {
        width: 0px;
    }
    `;
var MenuWrapper = import_styled_components18.default.div`
    border: ${CONTEXT_MENU_BORDER_WIDTH_PX}px solid ${themeVar("borderSubtle")};
    background-color: ${themeVar("surfaceElevated")};
    color: ${themeVar("textPrimary")};
    position: relative;
    border-radius: ${BORDER_RADIUS_PX.medium}px;
    max-width: ${CONTEXT_MENU_WIDTH_PX}px;
    width: ${CONTEXT_MENU_WIDTH_PX}px;
    padding: ${SPACING_PX.xxs}px;
`;
var IconWrapper = import_styled_components18.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: ${SPACING_PX.xs}px;
    padding-right: ${SPACING_PX.xs}px;
`;
var TitleWrapper = import_styled_components18.default.div`
    padding: ${BORDER_RADIUS_PX.medium}px;
`;
var MenuItem = import_styled_components18.default.button`
    padding: ${BORDER_RADIUS_PX.medium}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${CONTEXT_MENU_FONT_SIZE_PX}px;
    color: ${themeVar("textPrimary")};
    background: none;
    outline: none;
    height: ${CONTEXT_MENU_ITEM_HEIGHT_PX}px;
    border: 0;
    width: 100%;
    cursor: pointer;
    ${({ $active }) => $active && import_styled_components18.css`
        background-color: ${themeVar("surfaceHover")};
        color: ${themeVar("actionPrimary")};
    `}
`;

// src/theming/global.styled.tsx
var import_styled_components19 = require("styled-components");
var GlobalStyled = import_styled_components19.createGlobalStyle`
    :root {
        color-scheme: light dark;
    }

    body {
        margin: 0;
        padding: 0;
        color: ${themeVar("textPrimary")};
        background-color: ${themeVar("surfacePage")};
    }

    body,
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.5;
    }

    button,
    input,
    textarea,
    select {
        font: inherit;
    }

    button,
    a,
    input,
    textarea,
    select {
        -webkit-tap-highlight-color: transparent;
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
        color: ${themeVar("actionPrimary")};
        text-decoration: none;
    }

    h1, h2, h3 {
        padding: 0;
        margin: 0;
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $currentTheme,
  Avatar,
  AvatarThumb,
  BORDER_RADIUS_PX,
  Button,
  CONTROL_HEIGHT_PX,
  Dropdown,
  FOCUS_RING,
  FONT_SIZE_PX,
  GlobalStyled,
  Input,
  LARGE_WIDTH_PX,
  LinkButton,
  Loader,
  MOBILE_WIDTH,
  MOTION_DURATION_MS,
  Modal,
  NavPanel,
  ProgressBar,
  Range,
  SPACING_PX,
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
  getNextEnabledIndex,
  loadThemeFx,
  onLgWidth,
  onMdWidth,
  onSmWidth,
  themeVar,
  toggleTheme,
  useArrowKeys,
  useTheme
});
