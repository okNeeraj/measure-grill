import FeatureSection from './components/FeatureSection'
import IntroSection from './components/IntroSection'
import PricingSection from './components/PricingSection'

const Home = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <FeatureSection />
      <PricingSection />
    </div>
  )
}

export default Home
