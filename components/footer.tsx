
import type { FC } from "react"
export const Footer:FC = () =>{
    return (
        <footer className="py-12 bg-black">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://tectonicsarchitecture.com" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/logo_e.png" className="h-48 w-32" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tectonics Architecture and interior design</span> */}
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:underline me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline me-4 md:me-6">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://devops-guardian.dev" className="hover:underline">Devops-guardian™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}