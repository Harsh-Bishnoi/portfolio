import React from 'react'
import Hero from './Hero'

const Header = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col bg-[#D3D3D3]">
                <div className="w-full">
                    <Hero />
                </div>
                <div className="max-w-[1140px] px-4 w-full py-30">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Hi, I’m <span className="text-black">Harsh Bishnoi</span><br></br> <span className='text-2xl'> — Crafting Beautiful Interfaces with Code and Creativity</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Header