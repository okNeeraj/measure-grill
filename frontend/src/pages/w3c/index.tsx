import { W3cList } from './components/W3cList'
const W3c = () => {
  return (
    <div className="mb-10">
      <div className="border-l-4 border-gray-300 pl-4 flex items-center">
        <div className="head-info">
          <h1 className="text-2xl">W3c Validated at February 01, 2024 at 02:19:52 PM GMT+5:30 </h1>
          <div className="audit-url text-gray-500">
            https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home
          </div>
        </div>
      </div>
      <W3cList />
    </div>
  )
}

export default W3c
