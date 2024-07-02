import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/Auth/login"
import RegisterPage from "./pages/Auth/register"
import CarPage from "./pages/LandingPage/carPage"
import DashboardPage from "./pages/Dashboard"
import AuthProvider from "./context/authProvider"
import RequireAuth from "./middlewares/requireAuth"
import Layout from "./components/layouts/layout"
import Unauthorized from "./pages/unautorized"
import NotFound from "./pages/notFound"
import AdminCarPage from "./pages/Dashboard/cars"
import CarsProvider from "./context/carsProvider"
import AddCarPage from "./pages/Dashboard/addCar"
import UpdateCarPage from "./pages/Dashboard/updateCar"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Route */}
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            {/* Private Member Route */}
            <Route element={<RequireAuth allowedRoles={["member", "admin", "superadmin"]} />}>
              <Route
                path="cars"
                element={
                  <CarsProvider>
                    <CarPage />
                  </CarsProvider>
                }
              />
            </Route>

            {/* Private Admin,Superadmin Route */}
            <Route path="admin" element={<RequireAuth allowedRoles={["superadmin", "admin"]} />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route
                path="cars"
                element={
                  <CarsProvider>
                    <AdminCarPage />
                  </CarsProvider>
                }
              />
              <Route
                path="cars/addCar"
                element={
                  <CarsProvider>
                    <AddCarPage />
                  </CarsProvider>
                }
              />
              <Route
                path="cars/updateCar/:id"
                element={
                  <CarsProvider>
                    <UpdateCarPage />
                  </CarsProvider>
                }
              />
            </Route>

            {/* Unauthorized */}
            <Route path="unauthorized" element={<Unauthorized />} />
            {/* NotFound */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
