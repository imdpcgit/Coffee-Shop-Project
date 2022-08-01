import React from 'react'
import "./NavBar.css"
import heartimg from '../../Assets/heart.png'

const NavBar = () => {
  return (
    <>
      <div >
        <div >
          <header className="text-gray-600 body-font cursor-pointer border-2 m-8 z-50 ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Home</a>
                <a className="mr-5 hover:text-gray-900 nav-bar-component-1">Shop</a>
                <a className="mr-5 hover:text-gray-900 nav-bar-component">Blog</a>
                <a className="mr-5 hover:text-gray-900 nav-bar-component">Pages</a>
                <a className="mr-5 hover:text-gray-900 nav-bar-component">Elements</a>
                <a className="mr-5 hover:text-gray-900 nav-bar-component">Buy</a>
              </nav>

              <a className="mr-5 hover:text-gray-900">Login/Register</a>
              <a className="mr-5 hover:text-gray-900">
                <img src={heartimg} alt="" className="h-4" />
              </a>
            </div>
          </header>
        </div>
      </div>
    </>
  )
}

export default NavBar
