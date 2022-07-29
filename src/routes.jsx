// dependencies
import { Routes, Route, Outlet } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import App from './components/App'
import SerieDetails from './components/SerieDetails'

const Paths = () => {
  return (
    <section className='container mt-1 mt-lg-5 mt-xl-5'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<App />} />
          <Route path=':id' element={<SerieDetails />} />
        </Route>
      </Routes>
    </section>
  )
}

export default Paths
