import { useState } from 'react'
import { Accordion, AccordionContent } from '@components/ui/Accordion'

const AuditsFilter = ({ audits }) => {
  const [auditToggle, setAuditToggle] = useState(false)
  const handleAuditToggle = () => {
    setAuditToggle(!auditToggle)
  }

  const { failed, passed } = audits
  console.log(audits)
  if (!failed.length && !passed.length) return <h1 className="text-2xl text-center my-16 text-gray-600">No Audits Found !!</h1>
  return (
    <>
      {failed && failed.length ? (
        failed.map((audit: { id: string; title: string; score: number; displayValue: string; description: string }) => (
          <Accordion
            key={audit.id}
            title={`${audit.title}`}
            impact={audit.score <= 0.5 ? 'high' : audit.score <= 0.95 ? 'medium' : audit.score < 1 ? 'low' : 'passed'}
            subtitle={audit?.displayValue}
            open={false}
          >
            <AccordionContent>
              <p>{audit.description}</p>
            </AccordionContent>
          </Accordion>
        ))
      ) : (
        <h3>0 issue found!! 😍</h3>
      )}
      <div className="other-audits">
        <div className="audit-header cursor-pointer mt-2 flex items-center hover:text-violet-800" onClick={handleAuditToggle}>
          <div className="text-lg">
            Passed Audits <span className="font-bold"> ({passed.length})</span>
          </div>
          <div className="ml-auto p-4 text-gray-400">{auditToggle ? 'Hide' : 'Show'}</div>
        </div>
        {passed &&
          passed.map(
            (audit: { id: string; title: string; score: number; displayValue: string; description: string }) =>
              auditToggle && (
                <Accordion
                  key={audit.id}
                  title={`${audit.title} - ${audit.score}`}
                  impact={audit.score <= 0.5 ? 'high' : audit.score <= 0.95 ? 'medium' : audit.score < 1 ? 'low' : 'passed'}
                  subtitle={audit?.displayValue}
                  open={false}
                >
                  <AccordionContent>
                    <p>{audit.description}</p>
                  </AccordionContent>
                </Accordion>
              ),
          )}
      </div>
    </>
  )
}

export default AuditsFilter
