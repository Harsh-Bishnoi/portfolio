import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const socialLinks = [
    {
        href: "https://github.com/harshbishnoi",
        label: "GitHub",
        svg: (
            <svg
                fill="currentColor"
                stroke="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M12 0.2975C5.371 0.2975 0 5.6675 0 12.2975c0 5.2875 3.438 9.7675 8.205 11.3675.6.1125.82-.2625.82-.5825 0-.2875-.01-1.05-.015-2.0625-3.338.725-4.042-1.6125-4.042-1.6125-.546-1.3875-1.332-1.7575-1.332-1.7575-1.09-.745.08-.73.08-.73 1.205.08 1.84 1.2375 1.84 1.2375 1.07 1.835 2.807 1.305 3.492.9975.107-.775.42-1.305.762-1.605-2.665-.3-5.467-1.3375-5.467-5.95625 0-1.316.466-2.395 1.235-3.24125-.123-.3-.535-1.515.117-3.1575 0 0 1.005-.3225 3.3 1.23625a11.52 11.52 0 013.00375-.405c1.02.005 2.047.13875 3.00375.405 2.28-1.55875 3.28-1.23625 3.28-1.23625.655 1.6425.243 2.8575.12 3.1575.77.84625 1.234 1.925 1.234 3.24125 0 4.63-2.807 5.65-5.48 5.95.435.375.81 1.11.81 2.24 0 1.615-.015 2.92-.015 3.32 0 .3225.218.7.825.58C20.565 22.06 24 17.58 24 12.2975 24 5.6675 18.63 0.2975 12 0.2975z" />
            </svg>
        )
    },
    {
        href: "https://linkedin.com/in/harshbishnoi",
        label: "LinkedIn",
        svg: (
            <svg
                fill="currentColor"
                stroke="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M20.447 20.452H16.893v-5.569c0-1.328-.475-2.234-1.661-2.234-.905 0-1.444.611-1.683 1.202-.086.21-.108.5-.108.789v5.812h-3.554s.047-9.426 0-10.406h3.554v1.474a3.52 3.52 0 013.168-1.748c2.314 0 4.051 1.507 4.051 4.744v6.937zM5.337 7.433a2.07 2.07 0 01-2.07-2.075 2.07 2.07 0 012.07-2.073 2.067 2.067 0 110 4.148zm1.774 13.019H3.56V10.04h3.55v10.412zM22.225 0H1.771C.792 0 0 .77 0 1.725v20.549C0 23.234.792 24 1.771 24h20.451C23.212 24 24 23.234 24 22.274V1.725A1.734 1.734 0 0022.225 0z" />
            </svg>
        )
    },
    {
        href: "https://instagram.com/harshbishnoi",
        label: "Instagram",
        svg: (
            <svg
                fill="currentColor"
                stroke="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
            </svg>
        )
    },
    {
        href: "mailto:harsh.bishnoi@example.com",
        label: "Email",
        svg: (
            <svg
                fill="currentColor"
                stroke="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.104.897 2 2 2h16c1.103 0 2-.896 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.009-8-5.01V6h16zM4 18v-9.479l7.446 4.658a1 1 0 001.108 0L20 8.521V18H4z" />
            </svg>
        )
    }
];

const Footer = () => {
    const footerRef = useRef(null);
    const animationRef = useRef(null);

    const socialIconRefs = useRef([]);
    socialIconRefs.current = [];
    const addToSocialRefs = (el) => {
        if (el && !socialIconRefs.current.includes(el)) {
            socialIconRefs.current.push(el);
        }
    };

    const handleScroll = () => {
        if (!animationRef.current) return;

        const scrollPosition = window.innerHeight + window.pageYOffset;
        const pageHeight = document.documentElement.scrollHeight;
        const distanceFromBottom = pageHeight - scrollPosition;

        if (distanceFromBottom <= 50) {
            animationRef.current.play();
        } else {
            animationRef.current.reverse();
        }
    };

    useEffect(() => {
        const footer = footerRef.current;

        gsap.set(footer, { y: 50, autoAlpha: 0 });
        gsap.set(socialIconRefs.current, { y: 20, autoAlpha: 0 });

        animationRef.current = gsap.timeline({ paused: true })
            .to(footer, {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: 'power2.out',
            })
            .to(socialIconRefs.current, {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                duration: 0.4,
                ease: 'power2.out'
            }, "-=0.3");

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationRef.current) {
                animationRef.current.kill();
                animationRef.current = null;
            }
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            className="text-black bg-[#CCCCCC] pt-12 fixed bottom-0 left-0 right-0 z-40"
            style={{ pointerEvents: 'auto' }}
        >
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <a
                    href="#"
                    className="text-3xl font-bold text-black hover:text-[#333333] transition duration-300"
                >
                    logo
                </a>

                <nav>
                    <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 mb-6 text-sm sm:text-base">
                        {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-[#333333] transition">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <p className="text-[#555555] max-w-2xl mx-auto mb-6 px-4 text-sm sm:text-base">
                    © 2025 Harsh Bishnoi. Passionate about creating impactful digital experiences.
                    Open to projects and collaborations—connect with me via email or social media!
                </p>
            </div>

            <div className="flex justify-between mt-12">
                <div className="w-[587px] h-[52px] bg-[#999999] rounded-tr-[100px]"></div>

                <ul className="flex justify-center gap-6 items-center mx-4 mt-2.5 text-[#333333]">
                    {socialLinks.map(({ href, label, svg }, i) => (
                        <li key={i}>
                            <a
                                ref={addToSocialRefs}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="hover:text-[#555555] transition"
                                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.2 })}
                                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                            >
                                {svg}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="w-[587px] h-[52px] bg-[#999999] rounded-tl-[100px]"></div>
            </div>
        </footer>
    );
};

export default Footer;
