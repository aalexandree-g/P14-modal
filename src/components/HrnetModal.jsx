import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * HrnetModal component.
 *
 * Accessible modal dialog for React applications.
 * Handles Escape key, click-outside closing and focus management.
 *
 * @component
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is visible.
 * @param {string|JSX.Element} props.title - Modal title.
 * @param {string|JSX.Element} [props.message] - Optional message content.
 * @param {"success"|"error"} [props.variant="success"] - Visual style.
 * @param {Function} props.onClose - Callback fired when the modal should close.
 *
 * @returns {JSX.Element|null}
 */
const HrnetModal = ({ isOpen, title, message, variant = 'success', onClose }) => {
  const modalRef = useRef(null)

  // close with escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // automatic focus
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal__overlay" role="presentation" onClick={onClose}>
      <div
        className={`modal modal--${variant}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="modal__title">
          {title}
        </h2>

        {message && <p className="modal__message">{message}</p>}

        <button className="modal__button" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  )
}

HrnetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.oneOf(['success', 'error']),
  onClose: PropTypes.func.isRequired,
}

export default HrnetModal
