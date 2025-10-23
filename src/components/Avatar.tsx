import styled, { css } from 'styled-components';
import { themeVar } from '../theming';

interface Props {
    url?: string;
    $size?: number;
    $isOnline?: boolean
    style?: React.CSSProperties
}

export const Avatar = ({
    url,
    $size = 20,
    $isOnline,
    style
}: Props) => {
    return (
        <Image 
            $size={$size} 
            $isOnline={$isOnline} 
            src={url} 
            style={style}
        />
    )
}

const Image = styled.img<Props>`
    cursor: pointer;
    border-radius: 50%;
    width: ${({$size}) => $size}px;
    height: ${({$size}) => $size}px;
    ${({$isOnline}) => $isOnline && css`
        border: 2px solid ${themeVar('accent600')};
    `}
`