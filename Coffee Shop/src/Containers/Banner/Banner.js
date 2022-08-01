import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <>
      <div className="flex justify-center">
        <div style={{ width: '75em' }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1611249021021-21220638532e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="-z-50"
            />
            <div className="text-onn-banner-img pl-6 ">
              <h3 className="text-6xl leading-14 text-emerald-500">
                Start your day with <br /> a good cup of coffee
              </h3>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci error accusantium est esse commodi accusamus vel
                veritatis quidem vero eaque, saepe aut repellendus ex recusandae
                ab! Libero ratione ad atque fugiat quia molestias. In, suscipit.
              </p>
              <br />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
