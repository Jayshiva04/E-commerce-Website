import React from 'react'
import Nav from '../Component/NavBar/Nav'
import Footer from '../Component/Footer/Footer'
import Index from '../Router/Routing'

const Layout = () => {
  return (
    <div>
        <Nav />
        <Index />
        <Footer />
    </div>
  )
}

export default Layout