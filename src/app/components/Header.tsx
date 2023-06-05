import Link from 'next/link'
import React from 'react'

// md:ml-auto md:mr-auto
const Header = () => (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:justify-between">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Todo App</span>
            </a>
            <nav className=" flex flex-wrap items-center text-base justify-center">
                <Link href={'/'} className="mr-5 hover:text-gray-950">Home</Link>
                <Link href={'/mytodo'} className="mr-5 hover:text-gray-950">My Todos</Link>
                {/* <Link href={'/'} className="mr-5 hover:text-gray-950">About</Link>
                <Link href={'/'} className="mr-5 hover:text-gray-950">Contact Us</Link> */}
            </nav>
          
        </div>
    </header>
)

export default Header