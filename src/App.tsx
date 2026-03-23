import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomeAuth from './Main Components/Main Auth Component/homeAuth'
import HomeProfile from './Main Components/Main Profile Component/homeProfile'
import HomePropInput from './Main Components/Main Property Component/homePropInput'
import HomeProperties from './Main Components/Main Property Component/homeProperties'
import MainHome from './Main Components/Main Home Component/Main /mainHome'
import HomePropDetail from './Main Components/Main Detailed Property Component/homePropDetail'
import HomeRentHistory from './Main Components/Main Detailed Property Component/homeRentHistory'
import HomeMainTenant from './Main Components/Main Tenant Component/homeMainTenant'
import HomeTenant from './Main Components/Main Tenant Component/homeTenant'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<MainHome />}/>
        <Route path='/auth/user/signup' element={<HomeAuth/>}/>
        <Route path='/auth/user/login' element={<HomeAuth/>}/>
        <Route path='/user/profile' element={<HomeProfile/>}/>
        <Route path='/user/add/property' element={<HomePropInput/>}/>
        <Route path='/home/property' element={<HomeProperties/>}/>
        <Route path='/property/:propertyId/detail' element={<HomePropDetail />}/>
        <Route path='/tenant/tenantid' element={<HomeRentHistory />}/>
        <Route path='/tenant' element={<HomeMainTenant />}/>
        <Route path='/invite' element={<HomeTenant />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
