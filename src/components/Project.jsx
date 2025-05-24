import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bill from '../assets/images/png/bill-centeral.png';
import groundwork from '../assets/images/png/groundwork.png';
import homepage from '../assets/images/png/homepage.png';
import nigalya from '../assets/images/png/nigalya.png';
import noble_mind from '../assets/images/png/noble-mind.png';
import saint_shiba from '../assets/images/png/saint-shiba.png';
import versus from '../assets/images/png/versus.png';
import victorian from '../assets/images/png/victorian.png';
import vpn from '../assets/images/png/vpn.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { image: bill, name: 'Bill Central', link: 'https://react-bill-central.vercel.app/' },
    { image: groundwork, name: 'Groundwork', link: 'https://admirable-tartufo-fd9265.netlify.app/' },
    { image: homepage, name: 'Homepage', link: 'https://react-homepage-ecru-one.vercel.app/' },
    { image: nigalya, name: 'Nigalya', link: 'https://melodious-donut-484180.netlify.app/' },
    { image: noble_mind, name: 'Noble Mind', link: 'https://rad-piroshki-0792fa.netlify.app/' },
    { image: saint_shiba, name: 'Saint Shiba', link: 'https://stalwart-liger-6ca7c3.netlify.app/' },
    { image: versus, name: 'Versus', link: 'https://dulcet-pegasus-beba59.netlify.app/' },
    { image: victorian, name: 'Victorian', link: 'https://wonderful-daffodil-0dc79e.netlify.app/' },
    { image: vpn, name: 'VPN', link: 'https://stellular-dragon-8268c5.netlify.app/' },
];

const ProjectCard = ({ image, name, link }) => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-md transition-transform group">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} className="w-full h-64 object-cover" />
            </a>
            <div className="absolute inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-70" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-white text-lg font-semibold cursor-pointer
                               transform transition duration-300 ease-in-out
                               hover:text-blue-400 hover:scale-105"
                >
                    {name}
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out
                                   group-hover:w-full"
                    />
                </a>
            </div>
        </div>
    );
};

const Project = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const cards = containerRef.current.querySelectorAll('.project-card');

        cards.forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                });
        });
    }, []);

    return (
        <div className="flex justify-center items-center py-10">
            <div className="max-w-[1140px] w-full px-4">
                <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <ProjectCard
                                image={project.image}
                                name={project.name}
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
