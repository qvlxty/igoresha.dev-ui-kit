import { useTheme } from '../theming'

interface Props {
    avatarUrl?: string;
    size?: number;
    isOnline?: boolean
}

export const Avatar = ({
    avatarUrl = 'default.png',
    size = 20,
    isOnline,
}: Props) => {
    const theme = useTheme()
    return (
        <img style={{
            cursor: 'pointer',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: isOnline
                ? `2px solid ${theme.accent600}`
                : undefined
        }} src={avatarUrl} />
    )
}