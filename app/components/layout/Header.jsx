import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
          <header className='flex items-center justify-between '>
     <Link className='text-red-600 font-semibold text 2xl:' href={' '}>St pizza</Link>

     <nav className='flex gap-8 text-gray-600 items-center'>
      <Link href={''}>Home</Link>
      <Link href={''}>Menu</Link>

      <Link href={''}>About</Link>

      <Link  className='bg-red-600 px-6 py-3 text-white rounded-full' href={''} >Login</Link>

     </nav>
     </header>

    </div>
  )
}

export default Header