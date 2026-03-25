import { stringToColor } from "../lib/gen-color-string";
import styled from "styled-components";
import { themeVar } from "../theming";

type Props = {
    nickname: string,
    style?: React.CSSProperties
    isOnline?: boolean
}

export const AvatarThumb = ({ nickname, style, isOnline }: Props) => (
    <Wrap style={{ ...style, backgroundColor: stringToColor(nickname || '0') }} >
        {isOnline && <Dot />}
        {nickname.length > 0 && nickname[0].toUpperCase()}
    </Wrap>
)

const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #07b868;
    position: absolute;
    right: 0;
    bottom: 0;
`

const Wrap = styled.div`
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar('backgroundColor')};

`