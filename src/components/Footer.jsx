import React from 'react';

const Footer = () => {
    const iconDefaultColor = "#999999";
    const iconHoverColor = "#333333";

    return (
        <footer className="text-black bg-[#CCCCCC] pt-12">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <a
                    href="#"
                    className="text-3xl font-bold text-black hover:text-[#333333] transition duration-300"
                >
                    logo
                </a>

                <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 mb-6 text-sm sm:text-base">
                    {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item, i) => (
                        <li key={i}>
                            <a href="#" className="hover:text-[#333333] transition">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <p className="text-[#555555] max-w-2xl mx-auto mb-6 px-4 text-sm sm:text-base">
                    © 2025 Harsh Bishnoi. Passionate about creating impactful digital experiences.
                    Open to projects and collaborations—connect with me via email or social media!
                </p>
            </div>

            <div className="flex justify-between mt-12">
                <div className="w-[587px] h-[52px] bg-[#999999] rounded-tr-[100px]"></div>

                <ul className="flex justify-center gap-6 text-black items-center mx-4 mt-2.5">
                    <li>
                        <a
                            href="https://twitter.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill={iconDefaultColor}
                                className="group-hover:fill-[#333333] transition"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.18 9.18 0 01-2.9 1.1 4.52 4.52 0 00-7.69 4.13 12.84 12.84 0 01-9.32-4.72 4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.53 4.53 0 003.63 4.43 4.48 4.48 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9.07 9.07 0 013 19.54 12.8 12.8 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0023 3z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill={iconDefaultColor}
                                className="group-hover:fill-[#333333] transition"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.49V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.03-4.12 2.06 2.06 0 01-.03 4.12zm1.77 13.02H3.56V9h3.55v11.45zM22.23 0H1.77A1.78 1.78 0 000 1.78v20.44A1.78 1.78 0 001.77 24h20.45a1.78 1.78 0 001.78-1.78V1.78A1.78 1.78 0 0022.23 0z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition"
                            aria-label="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill={iconDefaultColor}
                                className="group-hover:fill-[#333333] transition"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.22c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.43-1.32.77-1.63-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.92 1.24 3.23 0 4.61-2.81 5.63-5.49 5.92.44.38.81 1.13.81 2.28v3.38c0 .32.21.7.82.58A12 12 0 0012 0z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill={iconDefaultColor}
                                className="group-hover:fill-[#333333] transition"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm8.5 3a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="w-[587px] h-[52px] bg-[#999999] rounded-tl-[100px]"></div>
            </div>
        </footer>
    );
};

export default Footer;