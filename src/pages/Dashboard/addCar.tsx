import { useCallback, useEffect, useState } from "react"
import Navbar from "../../components/fragments/Dashboard/navbar"
import Sidebar from "../../components/fragments/Dashboard/sidebar"
import DashboardLayout from "../../components/layouts/dashboardLayout"
import feather from "feather-icons"
import AddCar from "../../components/fragments/Dashboard/addCar"

const AddCarPage: React.FC = () => {
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
      sidebar={<Sidebar aside2Visible={aside2Visible} asideMenuVisible={asideMenuVisible} toggleAsideMenu={toggleAsideMenu} title="Cars" subTitle="List Car" />}
      navbar={<Navbar handleMenuButtonClick={handleMenuButtonClick} />}
    >
      <AddCar />
    </DashboardLayout>
  )
}

export default AddCarPage
