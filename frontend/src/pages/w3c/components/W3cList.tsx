import { W3cFilter } from './W3cFilter'

export const W3cList = () => {
  const data = [
    {
      title: `Bad value x-dns-prefetch-control for attribute http-equiv on element meta.`,
      location: `From line 1, column 3196; to line 1, column 3250`,
      code: `20934xx."&gt;<b>&lt;meta http-equiv="x-dns-prefetch-control" content="on"&gt;</b>&lt;link{' '}`,
      type: 'Error',
    },
    {
      title: `A script element with a defer attribute must not have a type attribute with the value module.`,
      location: `From line 484, column 150142; to line 484, column 150181`,
      code: `;</script><script defer="" type="module" async="">import`,
      type: 'Error',
    },
    {
      title: ` Element script must not have attribute defer unless attribute src is also specified.`,
      location: `From line 1, column 3196; to line 1, column 3250`,
      code: `20934xx."&gt;<b>&lt;meta http-equiv="x-dns-prefetch-control" content="on"&gt;</b>&lt;link{' '}`,
      type: 'Error',
    },
    {
      title: `Element script must not have attribute defer unless attribute src is also specified.`,
      location: `From line 484, column 899; to line 484, column 915`,
      code: `TXVH.js"/><script defer="">window`,
      type: 'Error',
    },
    {
      title: `Content-Security-Policy HTTP header: Bad content security policy: Source list contains duplicate source expression "'unsafe-eval'". All but the
      first instance will be ignored. Source list contains duplicate source expression "assets.adobedtm.com". All but the first instance will be ignored.`,
      location: `https://branches.hfs.in/hiranandani-financial-services-financial-institutions-vaishali-nagar-jaipur-305682/Home`,
      code: null,
      type: 'Warning',
    },
  ]

  return (
    <div className="section mt-4">
      <div className="matrix bg-white rounded-md px-4 pt-5 pb-8 justify-centerF items-center">
        <div className="audit-filter flex gap-2 flex-col mb-4">
          <div className="filter-text text-xs text-gray-500">Use the Message Filtering button below to hide/show particular messages -</div>
          <div className="filter-list flex gap-2">
            <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border bg-violet-800 border-violet-800 text-white">All</label>
            <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border ">Error</label>
            <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border ">Warning</label>
            <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border ">Info</label>
          </div>
        </div>
        {data.map((w3c) => (
          <W3cFilter title={w3c.title} location={w3c.location} code={w3c.code} type={w3c.type} />
        ))}
      </div>
    </div>
  )
}
