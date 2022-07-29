// styles
import 'bootstrap/dist/css/bootstrap.min.css' // always install packages before your code
import 'bootstrap/dist/js/bootstrap.min.js' // always install packages before your code
import './styles/index.css'

// libraries
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// components
import Paths from './routes'
import Footer from './components/Footer'

// postData: delete the <StrictMode> label before go production
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Paths />
    <Footer />
  </BrowserRouter>
)
