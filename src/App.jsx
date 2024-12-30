import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/><Footer/> </>
    },
    {
      path:"/about",
      element:<><Navbar/><About/><Footer/> </>
    },
    {
      path:"/services",
      element:<><Navbar/><Services/><Footer/> </>
    },
    {
      path:"/contacts",
      element:<><Navbar/><Contacts/><Footer/> </>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
