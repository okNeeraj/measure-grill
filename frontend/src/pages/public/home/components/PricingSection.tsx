const PricingSection = () => {
  return (
    <div className="bg-green-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-slate-800 text-center mb-8">Choose a Plan</h2>
        <div className="flex justify-center">
          <div className="w-80 bg-white rounded-lg shadow-lg p-6 mx-4">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-2xl font-bold mb-4">$9.99</div>
            <button className="bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full">Select</button>
          </div>
          <div className="w-80 bg-white rounded-lg shadow-lg p-6 mx-4">
            <h3 className="text-xl font-semibold mb-4">Standard</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-2xl font-bold mb-4">$19.99</div>
            <button className="bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full">Select</button>
          </div>
          <div className="w-80 bg-white rounded-lg shadow-lg p-6 mx-4">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-2xl font-bold mb-4">$29.99</div>
            <button className="bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full">Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
