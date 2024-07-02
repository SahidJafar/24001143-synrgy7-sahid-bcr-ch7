import FaqSection from "../../components/fragments/LandingPage/faqSection"
import GettingStartedSection from "../../components/fragments/LandingPage/gettingStartedSection"
import HeroSection from "../../components/fragments/LandingPage/heroSection"
import OurSection from "../../components/fragments/LandingPage/ourSection"
import TestimonialSection from "../../components/fragments/LandingPage/testimonialSection"
import WhyUsSection from "../../components/fragments/LandingPage/whyUsSection"
import LandingPageLayout from "../../components/layouts/landingPageLayout"

const LandingPage: React.FC = () => {
  return (
    <LandingPageLayout>
      <HeroSection />
      <OurSection />
      <WhyUsSection />
      <TestimonialSection />
      <GettingStartedSection />
      <FaqSection />
    </LandingPageLayout>
  )
}

export default LandingPage
