interface DashboardLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  navbar: React.ReactNode
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ sidebar, navbar, children }) => {
  return (
    <div className="flex w-screen h-screen">
      {sidebar}
      <div className="flex flex-col flex-grow">
        {navbar}
        <main className="flex-grow md:p-6 p-4 overflow-auto bg-gray-50">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
