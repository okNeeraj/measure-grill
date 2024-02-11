import AuditUrl from '@components/AuditUrl'
import { SCREEN_1 } from '@utils/constant'

const IntroSection = () => {
  return (
    <div className="hero flex flex-col items-center min-h-screen bg-violet-700 bg-cover bg-center" style={{ backgroundImage: `url(${SCREEN_1})` }}>
      <div className="header-text max-w-[767px] text-center mt-28 mb-10">
        <h1 className="text-5xl font-bold mb-8 text-white">Monitor your website experience and Get measurable results</h1>
        <h2 className="text-center text-2xl mx-24 text-white">
          Automate your website Performance, SEO, Accessibility, W3C Testing and Monitoring from just one platform
        </h2>
      </div>
      <AuditUrl variant="lg" />
      <div className="ff mt-16 flex items-center max-w-[767px]">
        <div className="auted min-w-52">
          <div className="text-3xl text-gray-300">34224</div>
          <div className="text-gray-400 text-lg">pages analyzed so far</div>
        </div>
        <div className=" text-gray-400 border-l pl-4" style={{ borderColor: `rgba(255, 255, 255, 0.2)` }}>
          <h3>Join thousands of people and companies around the world committed to making the web consistently fast.</h3>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
