import React, { useCallback, useEffect, useState } from "react"
import feather from "feather-icons"
import DashboardLayout from "../../components/layouts/dashboardLayout"
import Sidebar from "../../components/fragments/Dashboard/sidebar"
import Navbar from "../../components/fragments/Dashboard/navbar"
import Dashboard from "../../components/fragments/Dashboard/dashboard"

const DashboardPage: React.FC = () => {
  const [asideMenuVisible, setAsideMenuVisible] = useState(false)
  const [aside2Visible, setAside2Visible] = useState(true)

  const toggleAsideMenu = useCallback(() => {
    setAsideMenuVisible(!asideMenuVisible)
  }, [asideMenuVisible])

  const handleMenuButtonClick = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setAside2Visible(!aside2Visible)
    } else {
      setAsideMenuVisible(true)
    }
  }

  useEffect(() => {
    feather.replace()
  }, [toggleAsideMenu])

  return (
    <DashboardLayout
      sidebar={<Sidebar aside2Visible={aside2Visible} asideMenuVisible={asideMenuVisible} toggleAsideMenu={toggleAsideMenu} title="DASHBOARD" subTitle="Dashboard" linkSubTitle="/admin/dashboard" />}
      navbar={<Navbar handleMenuButtonClick={handleMenuButtonClick} />}
    >
      <Dashboard />
    </DashboardLayout>
  )
}

export default DashboardPage
