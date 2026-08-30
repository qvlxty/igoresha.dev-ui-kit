import React from 'react'
import styled from 'styled-components'
import { themeVar } from '../theming'
import { Loader } from './Loader'
import {
    BORDER_RADIUS_PX,
    CONTROL_HEIGHT_PX,
    FOCUS_RING,
    MOTION_DURATION_MS,
    SPACING_PX,
    TABLET_WIDTH,
} from '../const'
import { AiOutlineClose } from 'react-icons/ai'

const MODAL_WIDTH_VIEWPORT_PERCENT = 85
const MODAL_BORDER_WIDTH_PX = 1
const MODAL_SHADOW_Y_PX = SPACING_PX.xl
const MODAL_SHADOW_BLUR_PX = 64
const MODAL_SCROLLBAR_WIDTH_PX = SPACING_PX.xs
const MODAL_SCROLLBAR_THUMB_BORDER_PX = 2
const MODAL_CLOSE_SCROLLBAR_GAP_PX = SPACING_PX.xs
const MODAL_CLOSE_RIGHT_PX = SPACING_PX.md
    + MODAL_SCROLLBAR_WIDTH_PX
    + MODAL_CLOSE_SCROLLBAR_GAP_PX
const OVERLAY_Z_INDEX = 20
const OVERLAY_BLUR_PX = 5

let bodyScrollLockCount = 0
let bodyOverflowBeforeLock = ''

const lockBodyScroll = () => {
    if (bodyScrollLockCount === 0) {
        bodyOverflowBeforeLock = document.body.style.overflow
        document.body.style.overflow = 'hidden'
    }
    bodyScrollLockCount += 1
}

const unlockBodyScroll = () => {
    bodyScrollLockCount = Math.max(0, bodyScrollLockCount - 1)
    if (bodyScrollLockCount === 0) {
        document.body.style.overflow = bodyOverflowBeforeLock
        bodyOverflowBeforeLock = ''
    }
}

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
        if (!visible) return

        lockBodyScroll()
        return unlockBodyScroll
    }, [visible])

    React.useEffect(() => {
        if (!visible) return
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [onClose, visible])

    if (!visible) {
        return null
    }
    return (
        <Overlay onClick={() => onClose()} style={style}>
            <Container role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <CloseButton type="button" aria-label="Close modal" onClick={onClose}>
                        <AiOutlineClose aria-hidden />
                    </CloseButton>
                </ModalHeader>
                <ModalContent $loading={loading}>
                    {loading ? <Loader /> : children}
                </ModalContent>
            </Container>
        </Overlay>
    )
}

const Container = styled.div`
    position: relative;
    background-color: ${themeVar('surfacePage')};
    width: min(${MODAL_WIDTH_VIEWPORT_PERCENT}vw, ${TABLET_WIDTH}px);
    padding: ${SPACING_PX.xl}px;
    max-width: ${TABLET_WIDTH}px;
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: ${MODAL_BORDER_WIDTH_PX}px solid ${themeVar('borderSubtle')};
    border-radius: ${BORDER_RADIUS_PX.xlarge}px;
    box-shadow: 0 ${MODAL_SHADOW_Y_PX}px ${MODAL_SHADOW_BLUR_PX}px ${themeVar('shadowColor')};
`

const ModalHeader = styled.div`
    position: absolute;
    top: ${SPACING_PX.md}px;
    right: ${MODAL_CLOSE_RIGHT_PX}px;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const CloseButton = styled.button`
    width: ${CONTROL_HEIGHT_PX.small}px;
    height: ${CONTROL_HEIGHT_PX.small}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: ${themeVar('textMuted')};
    background: transparent;
    border: 0;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    cursor: pointer;
    transition: color ${MOTION_DURATION_MS.standard}ms ease,
        background ${MOTION_DURATION_MS.standard}ms ease;

    &:hover {
        color: ${themeVar('textPrimary')};
        background: ${themeVar('surfaceHover')};
    }
    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
    }
`

const ModalContent = styled.div<{ $loading: boolean }>`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: ${themeVar('scrollbarThumb')} transparent;

    &::-webkit-scrollbar { width: ${MODAL_SCROLLBAR_WIDTH_PX}px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb {
        background: ${themeVar('scrollbarThumb')};
        border: ${MODAL_SCROLLBAR_THUMB_BORDER_PX}px solid ${themeVar('surfacePage')};
        border-radius: ${BORDER_RADIUS_PX.pill}px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${themeVar('scrollbarThumbHover')};
    }
    ${({ $loading }) => $loading && `
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`

const Overlay = styled.div`
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
    background-color: ${themeVar('overlayBackdrop')};
    overflow: hidden;
    overflow-anchor: auto;
    backdrop-filter: blur(${OVERLAY_BLUR_PX}px);
`
