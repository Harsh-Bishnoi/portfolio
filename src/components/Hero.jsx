import React, { useState, useLayoutEffect, useRef } from "react";
import Button from "./common/Button";
import gsap from "gsap";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    React.useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const skillRef = useRef(null);

    const splitTextToSpans = (text) =>
        text.split("").map((char, i) => (
            <span
                key={i}
                className="letter inline-block"
                style={{
                    display: "inline-block",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                }}
            >
                {char}
            </span>
        ));

    useLayoutEffect(() => {
        const links = [
            homeRef.current,
            aboutRef.current,
            projectRef.current,
            skillRef.current,
        ];

        links.forEach((link) => {
            if (!link) return;

            const letters = link.querySelectorAll(".letter");

            gsap.set(letters, {
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
            });

            const tl = gsap.timeline({ paused: true });

            tl.to(letters, {
                rotationX: 360,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: 0.05,
            });

            const onEnter = () => tl.play();
            const onLeave = () => tl.reverse();

            link.addEventListener("mouseenter", onEnter);
            link.addEventListener("mouseleave", onLeave);

            link._onEnter = onEnter;
            link._onLeave = onLeave;
        });

        return () => {
            links.forEach((link) => {
                if (!link) return;
                link.removeEventListener("mouseenter", link._onEnter);
                link.removeEventListener("mouseleave", link._onLeave);
            });
        };
    }, []);

    return (
        <div className="flex justify-between items-center py-4 bg-black">
            <nav className="px-4 flex justify-between items-center max-w-[1140px] w-full mx-auto">
                <a className="z-6 text-white" href="#">
                    logo
                </a>

                <div
                    onClick={toggleNavbar}
                    className={`z-50 md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer transform transition-transform duration-500 ease-in-out ${menuOpen ? "rotate-180" : ""
                        }`}
                >
                    <span
                        className={`block h-0.5 bg-white rounded transition-all duration-500 ease-in-out ${menuOpen ? "rotate-50 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block h-0.5 bg-white rounded transition-all duration-500 ease-in-out ${menuOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block h-0.5 bg-white rounded transition-all duration-500 ease-in-out ${menuOpen ? "-rotate-50 -translate-y-2.5" : ""
                            }`}
                    ></span>
                </div>

                <ul
                    id="nav-name"
                    className={`list-unstyled flex justify-center items-center nav-link gap-6 mb-0 ${menuOpen ? "show-navbar" : ""
                        }`}
                >
                    <li>
                        <a
                            href="#"
                            ref={homeRef}
                            className="font-normal text-base leading-[100%] opacity-90 capitalize text-white"
                            style={{ cursor: "pointer" }}
                        >
                            {splitTextToSpans("Home")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            ref={aboutRef}
                            className="font-normal text-base leading-[100%] opacity-90 capitalize text-white"
                            style={{ cursor: "pointer" }}
                        >
                            {splitTextToSpans("About")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            ref={projectRef}
                            className="font-normal text-base leading-[100%] opacity-90 capitalize text-white"
                            style={{ cursor: "pointer" }}
                        >
                            {splitTextToSpans("Project")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            ref={skillRef}
                            className="font-normal text-base leading-[100%] opacity-90 capitalize text-white"
                            style={{ cursor: "pointer" }}
                        >
                            {splitTextToSpans("My Skill")}
                        </a>
                    </li>
                    <li className="md:hidden">
                        <Button btnClass="" btnText="Contact" />
                    </li>
                </ul>

                <ul className="max-md:hidden block">
                    <li>
                        <Button btnClass="" btnText="Contact" />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Hero;
