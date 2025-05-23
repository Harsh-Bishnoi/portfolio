import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "./Hero";
import my_img from "../assets/images/svg/my-img.svg";

const Header = () => {
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".stagger-text",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out",
                }
            );
            gsap.to(".line-left", {
                scaleY: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.5,
            });
            gsap.to(".line-right", {
                scaleY: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.7,
            });
            gsap.to(".line-top", {
                scaleX: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.9,
            });
            gsap.to(".line-bottom", {
                scaleX: 1,
                duration: 1,
                ease: "power3.out",
                delay: 1.1,
            });
            gsap.fromTo(
                imgRef.current,
                {
                    scale: 0.8,
                    rotation: 15,
                    opacity: 0,
                    x: 100,
                },
                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.5)",
                    delay: 1,
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="flex justify-center items-center flex-col overflow-hidden" >
            <div className="w-full"><Hero /></div>
            <div className="max-w-[1140px] px-4 w-full py-16">
                <div className="flex md:justify-between flex-wrap items-center relative">
                    <div className="relative">
                        <div className="line-left absolute w-0.5 h-full opacity-[50%] origin-top bg-black scale-y-0 left-[-20px] top-0"></div>
                        <div className="line-right absolute w-0.5 h-full opacity-[50%] origin-top bg-black scale-y-0 -right-5 top-0"></div>
                        <div className="line-top absolute h-0.5 w-full opacity-[50%] origin-left bg-black scale-x-0 top-[-12px] left-0"></div>
                        <div className="line-bottom absolute h-0.5 w-full opacity-[50%] origin-left bg-black scale-x-0 bottom-[-12px] left-0"></div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white stagger-text">
                            Hi, I’m <span className="text-black">Harsh Bishnoi</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl pt-2 text-white font-medium stagger-text">
                            And I am A{" "}<span className="text-black font-bold">Frontend Developer</span>
                        </h2>
                        <p className="text-xl sm:text-2xl pt-2 stagger-text relative">
                            — Crafting Beautiful Interfaces with Code and Creativity
                        </p>
                    </div>
                    <img ref={imgRef} className="md:max-w-[300px] w-full max-md:mt-6 justify-center flex" src={my_img} alt="my img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
