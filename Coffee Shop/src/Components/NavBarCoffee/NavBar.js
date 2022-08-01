import React from 'react'
import heartimg from '../../Assets/heart.png'

const NavBar = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '75em' }}>
          <header className="text-gray-600 body-font cursor-pointer border-2 m-8 z-50 ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Home</a>
                <a className="mr-5 hover:text-gray-900">Shop</a>
                <a className="mr-5 hover:text-gray-900">Blog</a>
                <a className="mr-5 hover:text-gray-900">Pages</a>
                <a className="mr-5 hover:text-gray-900">Elements</a>
                <a className="mr-5 hover:text-gray-900">Buy</a>
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
