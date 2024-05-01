import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full bg-gray-700 text-white'>
            <section className='mx-3 flex justify-between items-center'>
                <Link
                    href={'/'}
                    className='font-bold text-xl'
                >
                    <h1>
                        APOTEK
                    </h1>
                </Link>
                <ul className='flex gap-3'>
                    <li>
                        <Link href={'/lists'}>
                            Lists data
                        </Link>
                    </li>
                    <li>
                        <Link href={'/input'}>
                            Input data
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar