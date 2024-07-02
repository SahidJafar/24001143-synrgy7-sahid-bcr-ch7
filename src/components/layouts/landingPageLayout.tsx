import Footer from "../fragments/LandingPage/footer"
import Navbar from "../fragments/LandingPage/navbar"

interface LandingPageLayoutProps {
  children: React.ReactNode
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default LandingPageLayout
