import { useState, useCallback } from 'react'

/**
 * Hook to control the open/close state of the HrnetModal.
 *
 * @returns {{
 *   isOpen: boolean,
 *   open: () => void,
 *   close: () => void
 * }}
 */
export const useHrnetModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  return { isOpen, open, close }
}
