import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as React$1 from 'react';
import React__default, { PropsWithChildren } from 'react';
import * as effector from 'effector';

interface Props$b {
    url?: string;
    $size?: number;
    $isOnline?: boolean;
    style?: React.CSSProperties;
}
declare const Avatar: ({ url, $size, $isOnline, style }: Props$b) => react_jsx_runtime.JSX.Element;

type Props$a = {
    nickname: string;
    style?: React.CSSProperties;
    isOnline?: boolean;
};
declare const AvatarThumb: ({ nickname, style, isOnline }: Props$a) => react_jsx_runtime.JSX.Element;

declare const lightTheme: {
    surfacePage: string;
    surfaceBase: string;
    surfaceElevated: string;
    surfaceHover: string;
    surfaceSelected: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textDisabled: string;
    textOnAccent: string;
    borderSubtle: string;
    borderDefault: string;
    borderStrong: string;
    borderDisabled: string;
    focusRing: string;
    actionPrimary: string;
    actionPrimaryHover: string;
    actionPrimaryActive: string;
    actionPrimaryText: string;
    actionSecondary: string;
    actionSecondaryHover: string;
    actionSecondaryActive: string;
    actionSecondaryText: string;
    actionDanger: string;
    actionDangerHover: string;
    actionDangerActive: string;
    actionDangerText: string;
    actionDisabled: string;
    success: string;
    warning: string;
    scrollbarThumb: string;
    scrollbarThumbHover: string;
    shadowColor: string;
    overlayBackdrop: string;
};

type Theme = typeof lightTheme;
declare const availableThemes: {
    dark: Theme;
    light: Theme;
};

type Props$9 = {
    overrideTheme?: typeof availableThemes;
};
declare const ThemeProvider: ({ children, overrideTheme }: React__default.PropsWithChildren<Props$9>) => react_jsx_runtime.JSX.Element;

type ThemedStyledProps = {
    theme: Theme;
};
declare module 'styled-components' {
    interface DefaultTheme extends Theme {
    }
}

declare const useTheme: () => Theme;
declare function themeVar(varName: keyof Theme): ({ theme }: ThemedStyledProps) => string;

declare const THEME_KEY = "THEME";
type ThemeItem = 'dark' | 'light';
declare const $currentTheme: effector.StoreWritable<"light" | "dark">;
declare const loadThemeFx: effector.Effect<void, "light" | "dark", Error>;
declare const toggleTheme: effector.EventCallable<void>;

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonProps = {
    $dashed?: boolean;
    $variant?: ButtonVariant;
    $size?: ButtonSize;
    $fullWidth?: boolean;
    $iconOnly?: boolean;
};
declare const Button: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<styled_components.FastOmit<styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>, never>, ButtonProps & ThemedStyledProps>> & string;
declare const LinkButton: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ButtonProps & ThemedStyledProps>> & string;

type DropdownItem<T> = {
    value: T;
    text: string;
    icon?: React__default.ReactNode;
    disabled?: boolean;
};
type Props$8<T> = {
    options: DropdownItem<T>[];
    placeholder?: string;
    selected?: T;
    headerIcon?: React__default.ReactNode;
    onOptionChange: (optionValue: T) => void;
    disabled?: boolean;
    maxMenuHeight?: number;
    width?: number | string;
    'aria-label'?: string;
};
declare const Dropdown: <T extends number | string | null>({ options, onOptionChange, selected, placeholder, headerIcon, disabled, maxMenuHeight, width, "aria-label": ariaLabel, }: Props$8<T>) => react_jsx_runtime.JSX.Element;

declare const Input: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
    onChange?: (text: string) => void;
    errorText?: string;
    hasError?: boolean;
    style?: React__default.CSSProperties;
} & React__default.RefAttributes<HTMLInputElement>>;

declare const Loader: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;

type Props$7 = {
    visible: boolean;
    onClose: () => void;
    children?: React__default.ReactNode;
    loading?: boolean;
    style?: React__default.CSSProperties;
};
declare const Modal: React__default.FC<Props$7>;

type Props$6 = {
    completed: number;
    style?: React.CSSProperties;
};
declare const ProgressBar: ({ completed, style }: Props$6) => react_jsx_runtime.JSX.Element;

declare const Range: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>, never>, never>> & string;

type Props$5 = {
    checked?: boolean;
    onChange?: () => void;
    disabled?: boolean;
};
declare const Switch: ({ checked, onChange, disabled }: Props$5) => react_jsx_runtime.JSX.Element;

type Props$4<T> = {
    options: {
        value: T;
        title?: React.ReactNode;
    }[];
    selected: T;
    onSet?: (v: T) => void;
};
declare const TabBar: <T>({ options, selected, onSet }: Props$4<T>) => react_jsx_runtime.JSX.Element;

declare const TextArea: React__default.ForwardRefExoticComponent<Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> & {
    onChange?: (text: string) => void;
    $errorText?: string;
    $hasError?: boolean;
} & React__default.RefAttributes<HTMLTextAreaElement>>;

type NavPanelItem = 'Separator' | {
    to: string;
    icon: React__default.ReactNode;
} | {
    onClick: () => void;
    icon: React__default.ReactNode;
};
type Props$3 = {
    links: NavPanelItem[];
    LinkElement: React__default.FC<{
        className: string;
        to: string;
        style?: React__default.CSSProperties;
        children: React__default.ReactNode;
    }>;
};
declare const NavPanel: ({ links, LinkElement }: Props$3) => react_jsx_runtime.JSX.Element;

type Props$2 = {
    containerStyle?: React__default.CSSProperties;
    title: React__default.ReactNode;
    titleIcon?: React__default.ReactNode;
};
declare const Settings: ({ children, containerStyle, title, titleIcon, }: PropsWithChildren<Props$2>) => react_jsx_runtime.JSX.Element;

type Props$1 = {
    icon?: React__default.ReactNode;
    title: string;
    description?: string;
    option: React__default.ReactElement;
    containerStyle?: React__default.CSSProperties;
};
declare const SettingRow: ({ title, icon, option, description, containerStyle }: Props$1) => react_jsx_runtime.JSX.Element;

declare const createContextMenu: <T = unknown>() => {
    ContextMenu: React__default.FunctionComponent<Props<T>>;
    openMenu: effector.EventCallable<{
        e: React__default.MouseEvent;
        payload?: T;
    }>;
    $payload: effector.StoreWritable<T | null>;
    closeMenu: effector.EventCallable<void>;
};
type Props<T> = {
    items: {
        icon?: React__default.ReactNode;
        action: (v: T) => void;
        name: string;
        filter?: (v: T) => boolean;
    }[];
    title?: React__default.ReactNode;
};

declare const GlobalStyled: React$1.NamedExoticComponent<styled_components.ExecutionProps & ThemedStyledProps>;

declare const MOBILE_WIDTH = 600;
declare const TABLET_WIDTH = 900;
declare const LARGE_WIDTH_PX = 1024;
declare const CONTROL_HEIGHT_PX: {
    readonly small: 32;
    readonly medium: 40;
    readonly large: 48;
};
declare const SPACING_PX: {
    readonly xxs: 4;
    readonly xs: 8;
    readonly sm: 12;
    readonly md: 16;
    readonly lg: 20;
    readonly xl: 24;
    readonly xxl: 32;
};
declare const BORDER_RADIUS_PX: {
    readonly small: 4;
    readonly medium: 6;
    readonly large: 8;
    readonly xlarge: 12;
    readonly pill: 999;
};
declare const FONT_SIZE_PX: {
    readonly small: 14;
    readonly medium: 16;
};
declare const MOTION_DURATION_MS: {
    readonly press: 80;
    readonly standard: 160;
};
declare const FOCUS_RING: {
    readonly widthPx: 3;
    readonly opacityPercent: 34;
    readonly offsetPx: 2;
};
declare const onSmWidth = "@media only screen and (max-width: 600px)";
declare const onMdWidth = "@media only screen and (max-width: 900px)";
declare const onLgWidth = "@media only screen and (max-width: 1024px)";

type UseArrowKeysOptions = {
    visible: boolean;
    length: number;
    onSelect: (index: number) => void;
    onClose: () => void;
    isItemDisabled?: (index: number) => boolean;
};
declare const getNextEnabledIndex: (length: number, from: number, direction: 1 | -1, isItemDisabled?: (index: number) => boolean) => number | null;
declare const useArrowKeys: ({ visible, length, onSelect, onClose, isItemDisabled, }: UseArrowKeysOptions) => [number | null, React__default.Dispatch<React__default.SetStateAction<number | null>>];

export { $currentTheme, Avatar, AvatarThumb, BORDER_RADIUS_PX, Button, type ButtonSize, type ButtonVariant, CONTROL_HEIGHT_PX, Dropdown, type DropdownItem, FOCUS_RING, FONT_SIZE_PX, GlobalStyled, Input, LARGE_WIDTH_PX, LinkButton, Loader, MOBILE_WIDTH, MOTION_DURATION_MS, Modal, NavPanel, ProgressBar, Range, SPACING_PX, SettingRow, Settings, Switch, TABLET_WIDTH, THEME_KEY, TabBar, TextArea, type Theme, type ThemeItem, ThemeProvider, type ThemedStyledProps, availableThemes, createContextMenu, getNextEnabledIndex, loadThemeFx, onLgWidth, onMdWidth, onSmWidth, themeVar, toggleTheme, useArrowKeys, useTheme };
