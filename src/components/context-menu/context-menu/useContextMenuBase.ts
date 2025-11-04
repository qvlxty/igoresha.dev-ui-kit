import { EventCallable } from 'effector'
import React from 'react'


export const useContextMenuBase = (
    ref: React.RefObject<HTMLElement | null>,
    arrDeps: React.DependencyList = [],
    openMenu: EventCallable<PointerEvent>
) => {
    const handleOpenContextMenu = React.useCallback((e: PointerEvent) => {
        e.preventDefault()
        openMenu(e)
    }, arrDeps)


    React.useEffect(() => {
        ref.current?.addEventListener('contextmenu', handleOpenContextMenu)
        return () => {
            ref.current?.removeEventListener('contextmenu', handleOpenContextMenu)
        }
    }, arrDeps)

    return ref
}