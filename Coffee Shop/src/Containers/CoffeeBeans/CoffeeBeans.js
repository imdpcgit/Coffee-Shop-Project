import React from 'react'
import Button from '../../Components/Buttons/Button'

const CoffeeBeans = () => {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/987/987624.png"
                                alt=""
                                className="h-20 pb-5"
                            />
                            <h1 className="text-4xl title-font font-medium mb-4 text-emerald-800">Finally ground <br /> coffee beans</h1>

                            <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                            <div className='mt-5'>
                                <Button />
                            </div>
                        </div>
                        {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://images.unsplash.com/photo-1511495069777-323685717483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" /> */}
                        <img alt="ecommerce" class="lg:w-1/2  lg:h-auto h-64 object-cover object-center rounded" src="https://images.unsplash.com/photo-1511495069777-323685717483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoffeeBeans