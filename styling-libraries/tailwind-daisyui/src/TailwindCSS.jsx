import React, { useState } from 'react'

const TailwindCSS = () => {
    const [open, setOpen] = useState(false)
    return (
        <>

            {/* <h1 className="text-7xl font-bold underline text-purple-700 mb-5">
                Tailwind CSS!
            </h1> */}
            <nav className="bg-primary text-black px-4 shadow-md sticky top-0 z-50 py-4">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="text-xl font-bold">Tailwind CSS</div>
                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)} className="text-3xl">
                            ☰
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-lg">
                        <li className="hover:text-accent cursor-pointer">Home</li>
                        <li className="hover:text-accent cursor-pointer">About</li>
                        <li className="hover:text-accent cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Mobile Dropdown */}
                {open && (
                    <div className="md:hidden bg-primary mt-2 rounded shadow-lg animate-slideDown origin-top">
                        <ul className="flex flex-col space-y-3 px-6 py-4 text-lg">
                            <li className="hover:text-accent cursor-pointer">Home</li>
                            <li className="hover:text-accent cursor-pointer">About</li>
                            <li className="hover:text-accent cursor-pointer">Contact</li>
                        </ul>
                    </div>
                )}
            </nav>

            <section className="bg-accent text-base px-6 py-20 text-center md:text-left">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Build Fast, Launch Faster
                    </h1>
                    <p className="text-xl mb-8">
                        Use Tailwind and React with beautiful, responsive design powered by a bold color palette.
                    </p>
                    <button className="bg-accent hover:bg-[#780000] text-white px-6 py-3 rounded-lg font-semibold">
                        Get Started
                    </button>
                </div>
            </section>

            <div className="flex items-center justify-center bg-base px-4 py-8">
                <form className="bg-white text-black shadow-md rounded-lg p-8 w-full max-w-sm border border-accent">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 mb-4 border border-accent rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mb-6 border border-accent rounded"
                    />
                    <button className="w-full bg-accent hover:bg-[#780000] text-white py-2 rounded font-semibold">
                        Sign In
                    </button>
                </form>
            </div>

            <div className="max-w-sm mx-auto p-4">
                <div className="bg-base shadow-lg rounded-2xl overflow-hidden border border-secondary">
                    <img
                        src="https://picsum.photos/800/500"
                        alt="Random"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-secondary">Featured Item</h2>
                        <p className="text-secondary text-sm">Beautifully styled using your custom palette.</p>
                        <button className="mt-4 bg-accent hover:bg-[#780000] text-white px-4 py-2 rounded">
                            View More
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TailwindCSS