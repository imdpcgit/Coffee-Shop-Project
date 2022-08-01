import React from 'react'
import coffeeroast from '../../Assets/jake-buonemani-hKOBRd4Vhpw-unsplash.jpg'
import Button from '../../Components/Buttons/Button'

const CoffeeRoast = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2  h-64 lg:h-auto object-center rounded "
              src="https://images.unsplash.com/photo-1462917882517-e150004895fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                alt=""
                className="h-11 mb-5 "
              />
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Choose for your <br /> perfect coffee roast
              </h1>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <br />
              <div>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CoffeeRoast
