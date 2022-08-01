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
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={coffeeroast}
            />
            <div className="lg:w-1/2 w-full lg:pl-20 lg:py-6 mt-3 lg:mt-0 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/987/987624.png"
                alt=""
                className="h-20 pb-5"
              />
              <h1 className=" text-4xl title-font font-medium mb-1 text-emerald-800">
                Choose for your <br /> perfect coffee Roast
              </h1>

              <p className="leading-relaxed mt-3 5">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="mt-5">
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
