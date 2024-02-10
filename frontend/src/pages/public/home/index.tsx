import AuditUrl from '@components/AuditUrl'
import { SCREEN_1 } from '@utils/constant'

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero flex flex-col items-center min-h-screen bg-violet-700 bg-cover bg-center" style={{ backgroundImage: `url(${SCREEN_1})` }}>
        <div className="header-text max-w-[980px] text-center mt-28 mb-10">
          <h1 className="text-5xl font-bold mb-8 text-white">Monitor your website experience testing and Get measurable results</h1>
          <h2 className="text-center text-2xl mx-24 text-white">
            Automate your website Performance, SEO, Accessibility, W3C Testing and Monitoring from just one platform
          </h2>
        </div>
        <AuditUrl variant="lg" />
      </div>
    </div>
  )
}

export default Home
