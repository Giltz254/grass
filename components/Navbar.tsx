import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';

const Navbar = () => {
    const session = {};
  return (
    <nav className='flexBetween navbar sticky top-0 z-50 bg-white'>
        <div className='flex-1 flexStart gap-10'>
            <Link href={'/'}>
                <Image src={'/logo.png'} width={115} height={43} alt='Logo' className='h-auto w-auto object-contain rounded-md' />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((navitem) => (
                    <Link key={navitem.href} href={navitem.href} className='hover:text-blue-500 duration-500'>
                        {navitem.text}
                    </Link>
                ))}
            </ul>
        </div>
        <div className='flexCenter gap-4'>
            {session ? (
                <>
                UserPhoto
                <Link href={'/create-project'}>Share your work</Link>
                </>
            ) : (
                <AuthProviders />
            )}
        </div>
    </nav>
  )
}

export default Navbar