import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { userId } = auth();

  return (
    <div>
      <header className='flex items-center justify-between'>
        <Link href={'/'} className='text-red-600 font-semibold text-2xl'>
          St pizza
        </Link>

        <nav className='flex gap-8 text-gray-600 items-center'>
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
        </nav>

        <div>
          {userId ? (
            <div className='flex gap-4 '>
              <Link href='/dashboard'>Dashboard</Link>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <nav className='flex gap-4 text-gray-600 items-center'>
              <Link
                className='px-6 py-3 text-gray-500 font-semibold rounded-full'
                href={'/sign-in'}
              >
                Sign-in
              </Link>
              <Link
                className='bg-red-600 px-6 py-3 text-white rounded-full'
                href={'/sign-up'}
              >
                Sign-up
              </Link>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}
