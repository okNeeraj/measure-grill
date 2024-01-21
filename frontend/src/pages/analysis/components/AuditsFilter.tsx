import { Accordion, AccordionContent } from '@components/ui/Accordion'

const AuditsFilter = ({ audits }) => {
  console.log(audits)
  if (!audits.length) return <h1 className="text-2xl text-center my-16 text-gray-600">No Audits Found !!</h1>
  return (
    audits &&
    audits.map((audit) => (
      <Accordion
        key={audit.id}
        title={audit.title}
        impact={audit.score <= 0.5 ? 'high' : audit.score <= 0.95 ? 'medium' : 'low'}
        subtitle={audit?.weight}
        open={false}
      >
        <AccordionContent>
          <p>{audit.description}</p>
        </AccordionContent>
      </Accordion>
    ))
  )
}

export default AuditsFilter
