import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default from 'react';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as styled_components from 'styled-components';

interface Props$7 {
    avatarUrl?: string;
    size?: number;
    isOnline?: boolean;
}
declare const Avatar: ({ avatarUrl, size, isOnline, }: Props$7) => react_jsx_runtime.JSX.Element;

type Props$6 = {
    nickname: string;
    style?: React.CSSProperties;
};
declare const AvatarThumb: ({ nickname, style }: Props$6) => react_jsx_runtime.JSX.Element;

type Props$5 = {
    color?: 'accent' | 'default';
    size?: number;
};
declare const Badge: ({ children, color, size }: React__default.PropsWithChildren<Props$5>) => react_jsx_runtime.JSX.Element;

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

type ThemedStyledProps = {
    theme: Theme;
};
declare module 'styled-components' {
    interface DefaultTheme extends Theme {
    }
}

type ButtonProps = {
    $haveIcon?: boolean;
    $primary?: boolean;
    $secondary?: boolean;
    $danger?: boolean;
};
declare const Button: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps & ThemedStyledProps>> & string;
declare const LinkButton: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ButtonProps & ThemedStyledProps>> & string;

type Item<T> = {
    value: T;
    text: string;
    icon?: React__default.ReactNode;
};
type Props$4<T> = {
    options: Item<T>[];
    placeholder?: string;
    selected?: T;
    headerIcon?: React__default.ReactNode;
    onOptionChange: (optionValue: T) => void;
};
declare const Dropdown: <T>({ options, onOptionChange, selected, placeholder, headerIcon }: Props$4<T>) => react_jsx_runtime.JSX.Element;

declare const Input: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
    onChange?: (text: string) => void;
    errorText?: string;
    hasError?: boolean;
} & React__default.RefAttributes<HTMLInputElement>>;

declare const Loader: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;

type Props$3 = {
    visible: boolean;
    onClose: () => void;
    children?: React__default.ReactNode;
    loading?: boolean;
};
declare const Modal: React__default.FC<Props$3>;

type Props$2 = {
    completed: number;
};
declare const ProgressBar: ({ completed }: Props$2) => react_jsx_runtime.JSX.Element;

declare const Range: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>, never>, never>> & string;

type Props$1 = {
    checked: boolean;
    onChange: (state: any) => void;
    disabled?: boolean;
};
declare const Switch: ({ checked, onChange, disabled }: Props$1) => react_jsx_runtime.JSX.Element;

type Props<T> = {
    options: {
        value: T;
        title?: React.ReactNode;
    }[];
    selected: T;
    onSet: (v: T) => void;
};
declare const TabBar: <T>({ options, selected, onSet }: Props<T>) => react_jsx_runtime.JSX.Element;

declare const TextArea: React__default.ForwardRefExoticComponent<Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> & {
    onChange?: (text: string) => void;
    errorText?: string;
    hasError?: boolean;
} & React__default.RefAttributes<HTMLTextAreaElement>>;

export { Avatar, AvatarThumb, Badge, Button, Dropdown, Input, LinkButton, Loader, Modal, ProgressBar, Range, Switch, TabBar, TextArea };
