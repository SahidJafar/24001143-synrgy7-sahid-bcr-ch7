import HeroSection from "../../components/fragments/LandingPage/heroSection"
import SearchCarSection from "../../components/fragments/LandingPage/searchCarSection"
import LandingPageLayout from "../../components/layouts/landingPageLayout"

const CarPage: React.FC = () => {
  return (
    <LandingPageLayout>
      <HeroSection />
      <SearchCarSection />
    </LandingPageLayout>
  )
}

export default CarPage
