import Footer from './Footer'
import HomeInfo from './HomeInfo'
import Accordion from '../components/Accordion'
import LandingBanner from '../components/LandingBanner'

const LandingPage = () => {
  return (
    <div>
      <LandingBanner />
      <HomeInfo />
      <Accordion />
      <Footer />
    </div>
  )
}

export default LandingPage
