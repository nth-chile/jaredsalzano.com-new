"use client"

import { useState, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadSlim } from "@tsparticles/slim";
import useMediaQuery from '@/utils/useMediaQuery';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "@/styles/testimonials.css";

const emitterDefaults = {
    rate: { delay: 2, quantity: 3 },
    particles: {
        shape: { type: "star" },
        color: { value: "random" },
        size: {
            value: { min: 5, max: 10 },
            random: true
        },
        move: { speed: 2, outMode: "destroy" }
    }
};

export default function TestimonialsSlider() {
    const [init, setInit] = useState(false);
    const { sm, md, lg } = useMediaQuery();

    const starsXVals = useMemo(() => {
        let left = -2.5, right = 102.5

        if (sm) {
            left = -1.7;
            right = 101.7;
        }

        if (md) {
            left = -1.3;
            right = 101.3;
        }

        if (lg) {
            left = -0.74;
            right = 100.74;
        }

        return { left, right }
    }, [sm, md, lg]);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadEmittersPlugin(engine);
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className={`testimonials-slider shadow-sm sm:shadow-none`}>
            <Swiper
                autoHeight
                effect={'fade'}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                modules={[A11y, Autoplay, EffectFade, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                grabCursor={true}
            >
                {
                    [
                        {
                            id: 1234423,
                            quote: "Jared was a pleasure to work with at our shared time at Elephant. We worked alongside each other with a wide range of web technologies, including React and React Native. I could count on Jared to raise important UX, engineering and feasibility considerations. Any team would be lucky to have him.",
                            name: "Brittney Kernan",
                            small: true,
                            secondLine: "Team Leader & Software Engineer at Notion",
                        },
                        {
                            id: 4234,
                            quote: "Jared is one of the most creative and determined developers you will ever meet. He brings an all-world mindset to his programming, and is unflappable against challenges and roadblocks as they come up. He is an excellent choice for a development project.",
                            name: "Adam Spunberg",
                            small: true,
                            secondLine: "Global Head of Operations, 100+ Accelerator, AB InBev"
                        },
                        {
                            id: 1,
                            quote: "Jared was a smart choice to develop my personal portfolio. He accomplished all the things I was worried wouldn’t work and was very patient with all my questions and feedback! He was very responsive and quick with updates. He even met with me in person to show me how to use the custom template he built in WordPress. The project met my vision and I am very happy with it. Thank you!",
                            name: "Denise M.",
                            small: true
                        },
                        {
                            id: 54325,
                            quote: "Jared was an outstanding software engineer on our team—technically sharp, collaborative, and always focused on delivering high-quality solutions. He consistently took initiative to solve complex problems and improve our product experience, often going above and beyond expectations. Any team would be lucky to have Jared’s combination of technical excellence and strong communication skills.",
                            name: "David Skara",
                            small: true,
                            secondLine: "Product Manager at Elephant",
                        },
                        {
                            id: 2,
                            quote: "Incredibly professional and nice guy to work with. Genuinely went above and beyond the product requirements.",
                            name: "Avi Muchnick",
                            secondLine: "Cofounder of Aviary (acquired by Adobe)",
                        },
                        {
                            id: 3,
                            quote: "Jared was easy to get a hold of and plan out the project with. He was flexible as we had to change things around mid-project and stuck to timelines and budget.",
                            name: "Zach Holub",
                        },
                        {
                            id: 23,
                            quote: "Jared has been a great resource for our firm. He promptly executes on updates to our site and is a pleasure to work with.",
                            name: "Susie Baker",
                            linkHref: "https://spearstreetcapital.com/",
                            linkText: "spearstreetcapital.com"
                        }
                    ].map(({ linkHref, linkText, id, name, quote, secondLine, small = false }) => <SwiperSlide key={id}>
                        <article className="bg-white sm:rounded-2xl border border-gray-200 pt-20 pb-14 px-4 sm:px-8 flex flex-col items-center text-gray-800">
                            <blockquote className={`font-bold text-balance text-center mb-6 ${small ? 'text-xl' : 'text-3xl'}`} style={{ maxWidth: small ? "800px" : "700px" }}>
                                <p>“{quote}”</p>
                            </blockquote>
                            <cite className="text-center not-italic">
                                <p className="font-bold text-xl">{name}</p>
                                {secondLine && <span className="not-italic">{secondLine}</span>}
                                {linkHref && <a href={linkHref} target="_blank" className="text-nowrap hover:border-b border-b-gray-800">{linkText}
                                    <svg className="inline ml-1" style={{ marginTop: -1 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.31787 9.18188L7.97472 3.52503" stroke="black" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="round" />
                                        <path d="M3.73242 2.81812L8.68217 2.81812L8.68217 7.76786" stroke="black" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="round" />
                                    </svg>
                                </a>}
                            </cite>
                        </article>
                    </SwiperSlide>)
                }
                {init && <Particles
                    className="particles sm:rounded-2xl overflow-hidden"
                    options={{
                        fpsLimit: 60,
                        fullScreen: { enable: false },
                        particles: {
                            move: { enable: true, outModes: { default: "destroy" } },
                            number: { value: 0 },
                            opacity: {
                                animation: {
                                    count: 1,
                                    // decay: .5,
                                    delay: { min: 0, max: 2 },
                                    destroy: "min",
                                    enable: true,
                                    mode: "decrease",
                                    speed: 2,
                                    startValue: "max"
                                },
                                value: { max: 0.3, min: 0 }
                            }
                        },
                        emitters: [
                            {
                                ...emitterDefaults,
                                direction: "top-right",
                                position: { x: starsXVals.left, y: 50 },
                            },
                            {
                                ...emitterDefaults,
                                direction: "top-left",
                                position: { x: starsXVals.right, y: 50 },
                            }
                        ]
                    }}
                />
                }
            </Swiper>
        </div>
    );
}