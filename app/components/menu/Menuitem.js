import React from 'react'
 import Image from 'next/image'

const Menuitem = () => {
  return (
    <div className="bg-gray-300 rounded-lg p-4 items-center hover:bg-white ">
    <Image src="/pizza.png" alt="pizza" width={300} height={300} />

    <h1 className="font-semibold text-1xl my-3 ml-14">Pepperoni Pizza</h1>
    <p className="text-gray-600 text-xs  font- font-semibold">
      The key element is the pepperoni, a type of cured and seasoned Italian-American sausage, typically made from beef or a mixture of beef and pork.
    </p>
    <button className="rounded-full ml-7 px-8 py-2 mt-3 bg-red-600">
      Add to cart $95
    </button>
  </div>
  )
}

export default Menuitem