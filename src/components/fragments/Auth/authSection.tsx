import bgImage from "../../../assets/images/bg_signIn.png"
interface AuthSectionProps {
  children: React.ReactNode
}
const AuthSection: React.FC<AuthSectionProps> = ({ children }) => {
  return (
    <section id="auth" className="min-h-screen w-screen flex justify-center items-center">
      <div className="md:block hidden w-1/2 bg-cover h-screen" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="md:w-1/2 px-8 md:px-16 space-y-5">
        <div className="logo bg-[#CFD4ED] w-[100px] h-[34px]"></div>
        <h1 className="font-bold text-2xl">Welcome, Admin BCR</h1>
        {children}
      </div>
    </section>
  )
}

export default AuthSection
