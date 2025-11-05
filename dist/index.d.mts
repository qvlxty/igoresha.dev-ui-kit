import * as react_jsx_runtime from 'react/jsx-runtime';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as React$1 from 'react';
import React__default, { PropsWithChildren } from 'react';
import * as styled_components from 'styled-components';
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
};
declare const AvatarThumb: ({ nickname, style }: Props$a) => react_jsx_runtime.JSX.Element;

declare const lightTheme: {
    backgroundColor: string;
    contentBg: string;
    fontColor: string;
    accent700: string;
    accent600: string;
    accent500: string;
    accent400: string;
    accent300: string;
    default800: string;
    default700: string;
    default600: string;
    default500: string;
    default400: string;
    default300: string;
    secondary500: string;
    secondary400: string;
    error500: string;
    error400: string;
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

type ButtonProps = {
    $haveIcon?: boolean;
    $primary?: boolean;
    $secondary?: boolean;
    $danger?: boolean;
    $dashed?: boolean;
};
declare const Button: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps & ThemedStyledProps>> & string;
declare const LinkButton: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ButtonProps & ThemedStyledProps>> & string;

type Item<T> = {
    value: T;
    text: string;
    icon?: React__default.ReactNode;
};
type Props$8<T> = {
    options: Item<T>[];
    placeholder?: string;
    selected?: T;
    headerIcon?: React__default.ReactNode;
    onOptionChange: (optionValue: T) => void;
};
declare const Dropdown: <T extends number | string>({ options, onOptionChange, selected, placeholder, headerIcon }: Props$8<T>) => react_jsx_runtime.JSX.Element;

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

declare const createContextMenu: () => {
    ContextMenu: React__default.FunctionComponent<Props>;
    useContextMenu: (ref: React__default.RefObject<HTMLElement | null>, arrDeps?: React__default.DependencyList) => React__default.RefObject<HTMLElement | null>;
};
type Props = {
    items: {
        icon: React__default.ReactNode;
        action: () => void;
        name: string;
    }[];
};

declare const GlobalStyled: React$1.NamedExoticComponent<styled_components.ExecutionProps & ThemedStyledProps>;

declare const MOBILE_WIDTH = 600;
declare const TABLET_WIDTH = 900;
declare const LARGE_WIDTH_PX = 1024;
declare const onSmWidth = "@media only screen and (max-width: 600px)";
declare const onMdWidth = "@media only screen and (max-width: 900px)";
declare const onLgWidth = "@media only screen and (max-width: 1024px)";

export { $currentTheme, Avatar, AvatarThumb, Button, Dropdown, GlobalStyled, Input, LARGE_WIDTH_PX, LinkButton, Loader, MOBILE_WIDTH, Modal, NavPanel, ProgressBar, Range, SettingRow, Settings, Switch, TABLET_WIDTH, THEME_KEY, TabBar, TextArea, type Theme, type ThemeItem, ThemeProvider, type ThemedStyledProps, availableThemes, createContextMenu, loadThemeFx, onLgWidth, onMdWidth, onSmWidth, themeVar, toggleTheme, useTheme };
