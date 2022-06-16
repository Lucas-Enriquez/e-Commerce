import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/UI/Navbar'
import { HomeScreen } from '../Pages/dashboard/HomeScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/*" element={<Navigate to={"/"}/>}/> */}
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </>
  )
}
