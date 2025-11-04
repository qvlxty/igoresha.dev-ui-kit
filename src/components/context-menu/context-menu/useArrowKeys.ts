import React from 'react'

export const useArrowKeys = (len: number, cb: (idx: number) => void, closeMenu: () => void): [number | null, (id:number) => void] => {
    const [idx,setIdx] = React.useState<number | null>(null)
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          ['ArrowDown','ArrowUp','Enter','Space'].includes(e.key) && setIdx((idx) => {
            e.preventDefault()
            if (idx === null) {
              if (e.key === 'ArrowDown') {
                return 0
              }
              if (e.key === 'ArrowUp') {
                return len - 1
              }
              return null
            }
            if (e.key === 'ArrowDown') {
              return idx + 1 < len
                    ? idx + 1
                    : 0
            }
            if (e.key === 'ArrowUp') {
              return idx > 0
                ? idx -  1
                : len - 1
            }
            if (e.key === 'Enter' || e.key === 'Space') {
              cb(idx)
              closeMenu()
            }
            return idx
          })
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
          document.removeEventListener('keydown', handleKeyDown)
        }
      }, [len])
   

    return [idx, setIdx]
}