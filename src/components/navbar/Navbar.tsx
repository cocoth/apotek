import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full bg-gray-900 text-white'>
            <section className='mx-3 flex justify-between items-center backdrop-blur-lg'>
                <Link
                    href={'/'}
                    className='hover:underline underline-offset-2 ease-in-out duration-700'
                >
                    <h1 className='font-extrabold text-xl py-2 bg-gradient-to-tr from-green-700 to-teal-500 bg-clip-text text-transparent'>
                        APOTEK
                    </h1>
                </Link>

            </section>
        </nav>
    )
}

export default Navbar