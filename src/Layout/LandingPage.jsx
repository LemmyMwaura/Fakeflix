import Accordion from '../components/Accordion'
import HomeInfo from './HomeInfo'
import LandingBanner from '../components/LandingBanner'

const LandingPage = () => {
  return (
    <div>
      <LandingBanner />
      <HomeInfo />
      <Accordion />
    </div>
  )
}

export default LandingPage
