import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    isOpen && document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])
  if (!isOpen) return null

  return (
    <>
      {createPortal(
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-200 opacity-90"></div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
              <div className="relative bg-white rounded-lg shadow-lg w-80 mx-auto "></div>
              <div className="w-full">
                <div className="flex justify-between items-center p-4 bg-violet-50">
                  <h3 className="text-md font-bold">{title}</h3>
                  <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        className="heroicon-ui"
                        d="M6.71 6.71a1 1 0 011.42 0L12 10.59l3.88-3.88a1 1 0 111.42 1.42L13.41 12l3.88 3.88a1 1 0 01-1.42 1.42L12 13.41l-3.88 3.88a1 1 0 01-1.42-1.42L10.59 12 6.71 8.12a1 1 0 010-1.41z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}

export default Dialog
