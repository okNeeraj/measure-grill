import { ReactNode, useState } from 'react'
import { AUDIT_IMPACT, AUDIT_IMPACT_CLASS } from '@utils/constant'
import Markdown from 'react-markdown'

interface AccordionProps {
  title: string
  subtitle: string
  open?: boolean
  impact: 'high' | 'medium' | 'low'
  children: ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ open, title, subtitle, impact, children }) => {
  const [isOpen, setIsOpen] = useState(open)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={`border mb-1 ${isOpen === true ? 'accordion-open border-violet-500' : 'border-transparent'}`}>
        <div
          className={`accordion-header flex gap-4 items-center cursor-pointer ${isOpen === true ? 'bg-gray-100 hover:bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}
          onClick={toggleAccordion}
        >
          <div
            className={`priority p-4 w-16 text-center text-${AUDIT_IMPACT_CLASS[impact]} text-xs gap-2 flex items-center`}
          >
            <span className="font-bold">{AUDIT_IMPACT[impact]}</span>
            <span className="material-symbols-outlined font-bold ml-auto text-sm">arrow_upward</span>
          </div>
          <div className="header-content flex items-center gap-2">
            <Markdown>{title}</Markdown>
            <span className={`text-${AUDIT_IMPACT_CLASS[impact]} text-xs`}>{subtitle && ` - ${subtitle}`}</span>
          </div>
          <span className="material-symbols-outlined font-bold ml-auto">{isOpen ? 'expand_less' : 'expand_more'}</span>
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
