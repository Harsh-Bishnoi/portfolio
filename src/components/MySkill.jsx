import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from "./common/Button";
import { EXTRA_SKILLS, INITIAL_SKILLS } from '../utils/helper';

gsap.registerPlugin(ScrollTrigger);

const MySkill = () => {
    const [showMore, setShowMore] = useState(false);
    const containerRef = useRef(null);
    const barsRef = useRef([]);
    const extraRefs = useRef([]); 

    const toggleShowMore = (newShowMore) => {
        setShowMore(newShowMore);
        if (newShowMore) {
            containerRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const displayedSkills = showMore
        ? [...INITIAL_SKILLS, ...EXTRA_SKILLS]
        : INITIAL_SKILLS;

    useEffect(() => {
        barsRef.current = barsRef.current.slice(0, displayedSkills.length);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                barsRef.current,
                { width: '0%' },
                {
                    width: (i) => `${displayedSkills[i].level}%`,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        once: true,
                        toggleActions: 'play none none none',
                    },
                }
            );
            if (showMore) {
                const extraElements = extraRefs.current;
                gsap.fromTo(
                    extraElements,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        stagger: 0.1,
                        delay: 0.3,
                    }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, [displayedSkills, showMore]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div
                ref={containerRef}
                className="flex flex-col justify-center items-center px-4 pb-20"
            >
                <div className="bg-[#CCCCCC] rounded-xl max-w-4xl w-full p-8 md:p-12">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-6 text-gray-900 drop-shadow-lg">
                        My Skills
                    </h1>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                        I specialize in web development with strong skills in HTML, CSS, JavaScript, and more.
                        I create responsive, user-friendly websites and applications that are efficient,
                        visually appealing, and meet client needs effectively.
                    </p>
                    <div className="space-y-6">
                        {/* Initial skills */}
                        {INITIAL_SKILLS.map(({ name, level, color }, i) => (
                            <div key={name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-700 font-semibold">{name}</span>
                                    <span className="text-gray-600">{level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                                    <div
                                        ref={(el) => (barsRef.current[i] = el)}
                                        className={`${color} h-6 rounded-full`}
                                        style={{ width: '0%', maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                        ))}
                        {showMore &&
                            EXTRA_SKILLS.map(({ name, level, color }, i) => (
                                <div
                                    key={name}
                                    ref={(el) => (extraRefs.current[i] = el)}
                                    className="opacity-0"
                                >
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700 font-semibold">{name}</span>
                                        <span className="text-gray-600">{level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                                        <div
                                            ref={(el) => (barsRef.current[INITIAL_SKILLS.length + i] = el)}
                                            className={`${color} h-6 rounded-full`}
                                            style={{ width: '0%', maxWidth: '100%' }}
                                        />
                                    </div>
                                </div>
                            ))}

                        <Button
                            btnClass="!border-0 flex mx-auto"
                            btnText={showMore ? 'See Less' : 'See More'}
                            onClick={() => toggleShowMore(!showMore)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;
