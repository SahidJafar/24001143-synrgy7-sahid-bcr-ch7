import AuthSection from "../fragments/Auth/authSection"

interface AuthLayoutProps {
  children: React.ReactNode
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <AuthSection>{children}</AuthSection>
    </>
  )
}

export default AuthLayout
