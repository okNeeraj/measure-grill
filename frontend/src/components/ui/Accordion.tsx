import { ReactNode, useState } from 'react'

interface AccordionProps {
  title: string
  subtitle: string
  open?: boolean
  children: ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ open, title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState(open)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="border mb-1">
        <div className="accordion-header bg-gray-50 flex justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
          <div className="header-content">
            <span className="font-bold">{title}</span>
            <span className="text-red-500 text-sm">{subtitle && ` - ${subtitle}`}</span>
          </div>
          <span className="material-symbols-outlined font-bold">{isOpen ? 'expand_less' : 'expand_more'}</span>
        </div>
        {isOpen && <div className="p-4 bg-white">{children}</div>}
      </div>
    </>
  )
}

interface AccordionContentProps {
  children: ReactNode
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  return <>{children}</>
}
