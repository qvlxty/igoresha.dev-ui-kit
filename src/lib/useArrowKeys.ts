import React from 'react'

type UseArrowKeysOptions = {
  visible: boolean
  length: number
  onSelect: (index: number) => void
  onClose: () => void
  isItemDisabled?: (index: number) => boolean
}

const noDisabledItems = () => false

export const getNextEnabledIndex = (
  length: number,
  from: number,
  direction: 1 | -1,
  isItemDisabled: (index: number) => boolean = () => false,
) => {
  if (length === 0) return null
  for (let step = 1; step <= length; step += 1) {
    const index = (from + direction * step + length) % length
    if (!isItemDisabled(index)) return index
  }
  return null
}

export const useArrowKeys = ({
  visible,
  length,
  onSelect,
  onClose,
  isItemDisabled = noDisabledItems,
}: UseArrowKeysOptions): [
  number | null,
  React.Dispatch<React.SetStateAction<number | null>>,
] => {
  const [index, setIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (!visible) setIndex(null)
  }, [visible])

  React.useEffect(() => {
    if (index !== null && (index >= length || isItemDisabled(index))) setIndex(null)
  }, [index, isItemDisabled, length])

  React.useEffect(() => {
    if (!visible) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        const direction = event.key === 'ArrowDown' ? 1 : -1
        const start = index ?? (direction === 1 ? -1 : 0)
        setIndex(getNextEnabledIndex(length, start, direction, isItemDisabled))
        return
      }

      if ((event.key === 'Enter' || event.key === ' ') && index !== null) {
        event.preventDefault()
        onSelect(index)
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [index, isItemDisabled, length, onClose, onSelect, visible])

  return [index, setIndex]
}
