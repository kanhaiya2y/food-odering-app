import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <header className='flex items-center justify-between'>
        <Link href={'/'}>
          <div className='text-red-600 font-semibold text-2xl'>St pizza</div>
        </Link>

        <nav className='flex gap-8 text-gray-600 items-center'>
          <Link href={'/'}>
            <div>Home</div>
          </Link>
          <Link href={''}>
            <div>Menu</div>
          </Link>
          <Link href={''}>
            <div>About</div>
          </Link>
          <Link href={''}>
            <div>Contact</div>
          </Link>
        </nav>

        <nav className='flex gap-4 text-gray-600 items-center'>
          <Link href={''}>
            <div className='px-6 py-3 text-gray-500 font-semibold rounded-full'>
              Login
            </div>
          </Link>
          <Link href={'/register'}>
            <div className='bg-red-600 px-6 py-3 text-white rounded-full'>
              Register
            </div>
          </Link>
        </nav>
      </header>
    </div>
  );
}
