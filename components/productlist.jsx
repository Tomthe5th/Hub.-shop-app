import React from 'react'
import Productcard from './productcard'
import Productdescription from './products/productdescription'

export default function Productlist() {
  return (
    <section>
      <h3 className='font-semibold text-center'>Latest arrivals</h3>
      <div className="container mx-auto px-4 flex ">
        <Productcard/>

      </div>
    </section>
  )
}
