import { stringToColor } from "../lib/gen-color-string";
import styled from "styled-components";
import { themeVar } from "../theming";

const AVATAR_THUMB_SIZE_PX = 32
const ONLINE_DOT_SIZE_PX = 12
const ONLINE_DOT_BORDER_WIDTH_PX = 2

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
    width: ${ONLINE_DOT_SIZE_PX}px;
    height: ${ONLINE_DOT_SIZE_PX}px;
    border-radius: 50%;
    background-color: ${themeVar('success')};
    border: ${ONLINE_DOT_BORDER_WIDTH_PX}px solid ${themeVar('surfaceBase')};
    position: absolute;
    right: 0;
    bottom: 0;
`

const Wrap = styled.div`
    position: relative;
    width: ${AVATAR_THUMB_SIZE_PX}px;
    height: ${AVATAR_THUMB_SIZE_PX}px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;

`
