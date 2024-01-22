import { AUDIT_IMPACT_CLASS } from '@utils/constant'

interface MatrixProps {
  label: string
  impact: 'high' | 'medium' | 'low'
  displayValue: string
}

const Matrix: React.FC<MatrixProps> = ({ label, impact, displayValue }) => {
  return (
    <div className={`border-l-${AUDIT_IMPACT_CLASS[impact]} lh-matrix-item flex items-center gap-4 borderR justify-between px-4 py-2 shadow-sm`}>
      <label>{label}</label>
      <div className={`lh-matrix-score text-2xl text-${AUDIT_IMPACT_CLASS[impact]}`}>{displayValue}</div>
    </div>
  )
}

export default Matrix
