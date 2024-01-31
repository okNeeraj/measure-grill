interface W3cFilterProps {
  title: string
  location: string
  code: string | null
  type: 'Error' | 'Warning' | 'Info'
}

export const W3cFilter: React.FC<W3cFilterProps> = ({ title, location, code, type }) => {
  return (
    <div className="borde mb-4 border-slate-300">
      <div className="flex gap-4 items-start bg-gray-50 hover:bg-gray-100">
        <div className="priority p-4 w-16 text-center text-indicate-poor text-xs gap-2 flex items-center">
          <span className="font-bold">{type}</span>
        </div>
        <div className="header-content flex flex-col gap-2 py-4 w-full">
          <h3 className="text-xs font-bold">{title}</h3>
          <div className="mt-2 mr-4 p-4 border border-dashed border-slate-300 rounded-md">
            <p className="location text-slate-500 text-xs mb-2">{location}</p>
            <div className="source-code text-xs">{code && <code>{code}</code>}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
