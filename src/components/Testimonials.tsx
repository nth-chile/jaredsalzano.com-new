"use client"

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadSlim } from "@tsparticles/slim";
import "@/styles/testimonials.scss"

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

export default function Testimonials() {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadEmittersPlugin(engine);
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="bg-white rounded-2xl">
            <Swiper
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
                            id: 1,
                            quote: "He did that thang he built that site. Did it good good hey I'm words, maybe one maybe two lines of words.",
                            name: "Wendy Sample",
                            linkText: "wendysample.com",
                            linkHref: "https://wendysample.com"
                        },
                        {
                            id: 2,
                            quote: "Gets the projects on time, puts the website there and everything.",
                            name: "Wendy Sample",
                            linkText: "wendysample.com",
                            linkHref: "https://wendysample.com"
                        },
                        {
                            id: 3,
                            quote: "Builds a thing without not building it, every time.",
                            name: "Wendy Sample",
                            linkText: "wendysample.com",
                            linkHref: "https://wendysample.com"
                        }
                    ].map(({ id, linkHref, linkText, name, quote }) => <SwiperSlide key={id}>
                        <div className="bg-white rounded-2xl pt-20 pb-14 px-2 flex flex-col items-center text-gray-800">
                            <blockquote className="font-bold text-balance text-center text-3xl mb-6" style={{ maxWidth: "22em" }}>
                                <p>“{quote}”</p>
                            </blockquote>
                            <cite className="text-center not-italic">
                                <p className="font-bold text-xl">{name}</p>
                                <a href={linkHref} target="_blank" className="text-nowrap hover:border-b border-b-gray-800">{linkText}
                                    <svg className="inline ml-1" style={{ marginTop: -1 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.31787 9.18188L7.97472 3.52503" stroke="black" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="round" />
                                        <path d="M3.73242 2.81812L8.68217 2.81812L8.68217 7.76786" stroke="black" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </cite>
                        </div>
                    </SwiperSlide>)
                }
                {init && <Particles
                    className="particles rounded-2xl overflow-hidden"
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
                                position: { x: -1, y: 50 },
                            },
                            {
                                ...emitterDefaults,
                                direction: "top-left",
                                position: { x: 101, y: 50 },
                            }
                        ]
                    }}
                />
                }
            </Swiper>
        </div>
    );
}