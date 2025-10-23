import React from 'react'
import styled from 'styled-components'
import { themeVar } from '../theming'
import { Loader } from './Loader'
import { TABLET_WIDTH } from '../const'

type Props = {
    visible: boolean,
    onClose: () => void,
    children?: React.ReactNode,
    loading?: boolean,
    style?: React.CSSProperties
}

export const Modal: React.FC<Props> = (
    { visible, onClose, children, loading = false, style }
) => {
    React.useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [visible])

    if (!visible) {
        return null
    }
    return (
        <Overlay onClick={() => onClose()} style={style}>
            {loading && <Loader />}
            {!loading && (
                <Container onClick={(e) => e.stopPropagation()}>
                    {children}
                </Container>
            )}
        </Overlay>
    )
}

const Container = styled.div`
    background-color: ${themeVar('backgroundColor')};
    width: 85vw;
    padding: 30px;
    min-width: 320px;
    max-width: ${TABLET_WIDTH}px;
    max-height: 100vh;
    height: 100%;
    overflow-y: auto;
    box-shadow: 0, 0, 8px, #111;
`

const Overlay = styled.div`
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
`