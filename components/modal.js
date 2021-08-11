import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ isVisible, setVisible, children }) {
  const handleClose = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    if (e.target === e.currentTarget) {
      setVisible(!isVisible)
    }
  }
  return (
    <motion.div
      className="fixed w-screen h-screen top-0 left-0 flex z-50 items-center justify-center"
      style={{ backgroundColor: 'rgba(000,000,000,0.5)' }}
      onClick={handleClose}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-96 flex flex-col justify-center align-center max-w-prose mx-auto p-8 rounded-2xl bg-gray-lightest"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
