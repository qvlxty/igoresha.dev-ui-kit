import { stringToColor } from "../lib/gen-color-string";
import styled from "styled-components";
import { themeVar } from "../theming";

type Props = {
    nickname: string,
    style?: React.CSSProperties
}

export const AvatarThumb = ({ nickname, style }: Props) => (
    <Wrap style={{ ...style, backgroundColor: stringToColor(nickname || '0') }} >
        {nickname.length > 0 && nickname[0].toUpperCase()}
    </Wrap>
)

const Wrap = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar('backgroundColor')};

`