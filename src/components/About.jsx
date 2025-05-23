import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DeveloperAtWork from '../assets/images/png/developer-at-work.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                y: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
            const handleMouseMove = (e) => {
                const { innerWidth, innerHeight } = window;
                const x = (e.clientX / innerWidth - 0.5) * 20;
                const y = (e.clientY / innerHeight - 0.5) * 20;
                if (imageRef.current) {
                    gsap.to(imageRef.current, {
                        x,
                        y,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            };
            const section = sectionRef.current;
            section.addEventListener("mousemove", handleMouseMove);
            gsap.utils.toArray(".about-text").forEach((el, i) => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            });
            gsap.from(".about-image", {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-image",
                    start: "top 80%",
                },
            });

            gsap.from(".about-details", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-details",
                    start: "top 80%",
                },
            });
            if (experienceRef.current) {
                gsap.fromTo(
                    experienceRef.current,
                    { innerText: 0 },
                    {
                        innerText: 5,
                        duration: 2,
                        snap: "innerText",
                        ease: "power1.inOut",
                        scrollTrigger: {
                            trigger: experienceRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }

            return () => {
                section.removeEventListener("mousemove", handleMouseMove);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20">
            <div className="max-w-[1140px] px-4 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-black mb-4 about-title">About Me</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto about-text">
                        I'm a passionate developer who enjoys turning ideas into interactive digital experiences.
                        With a blend of creativity and technical skills, I build clean and efficient web applications.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 about-image">
                        <img ref={imageRef} src={DeveloperAtWork} alt="Developer at work" className="rounded-lg shadow-md border max-w-[534px] border-[#D3D3D3] w-full" />
                    </div>
                    <div className="w-full md:w-1/2 about-details">
                        <h2 className="text-2xl font-semibold text-black mb-4">Background</h2>
                        <p className="text-gray-700 mb-4 about-text transition duration-300 ease-in-out hover:text-black">
                            With a strong foundation in front-end development, I bring a detail-oriented approach to every project. My main tools include React, Tailwind CSS, and JavaScript.
                        </p>
                        <p className="text-gray-700 about-text transition duration-300 ease-in-out hover:text-black">
                            I value simplicity, usability, and performance. I'm constantly learning and evolving to stay current with best practices and emerging technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
