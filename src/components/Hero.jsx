import anime from "animejs";
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';

const images = [
    { image: "confetti.png", x: -20, y: 90 },
    { image: "confetti(1).png", x: 90, y: 90 },
    { image: "abstract.png", x: 90, y: 10 },
    { image: "abstract.png", x: -20, y: 0 },
];

export const Hero = () => {
    const lenis = useRef(null);

    useEffect(() => {
        anime({
            targets: ".random-image",
            translateX: () => Math.random() * 40 - 20,
            translateY: () => Math.random() * 40 - 20,
            easing: "easeInOutSine",
            duration: 3000,
            loop: true,
            direction: "alternate",
        });

        lenis.current = new Lenis({
            duration: 0.6, 
            easing: (t) => 1 - Math.pow(1 - t, 3), 
            smooth: true,
            smoothTouch: true,
        });

        const animate = (time) => {
            lenis.current.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            lenis.current.destroy();
        };
    }, []);

    const scrollToSection = (id) => {        
        const element = document.getElementById(id);
        if (element) {
            lenis.current.scrollTo(element, { offset: -200 });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-old_dark relative">
            {images.map((pos, index) => (
                <img
                    key={index}
                    src={pos.image}
                    className={`random-image absolute w-72 ${pos.x === 90 ? "scale-x hover:scale-x-[-1]" : ""}`}
                    style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                    }}
                />
            ))}

            <div className="flex justify-between space-x-24 mb-10">
                <img src={'/cool.png'} className="-rotate-[24deg] mt-28 animate__animated animate__delay-1s animate__fadeInDownBig" width={200} height={200} alt="Cool Image" />
                <div className="flex justify-around flex-col items-center">
                    <img src={'/heart.png'} className="object-contain" width={180} height={180} alt="Heart Image" />
                    <p className="bg-gray-800 py-4 animate__animated animate__fadeIn text-white px-6 font-semibold rounded-xl">#HAPPY BIRTHDAY MICAA 🎉</p>
                </div>
                <img src={'/popup.png'} width={200} className="rotate-[24deg] mt-28 animate__animated animate__delay-1s animate__fadeInDownBig" height={200} alt="Cheers Image" />
            </div>

            <h1 className="text-old_dark text-6xl font-bold mb-6 animate__animated animate__fadeInDownBig">Ayo Lihat Perjalanan Kamu <span className="text-blue-500">Sayang</span></h1>
            <p className="font-normal text-2xl mb-24">ayo lihat kamu dan perjalanan kita sayangg</p>

            <button type="button" onClick={() => scrollToSection('timeline')} className="z-10 px-8 animate__bounce animate__animated animate__delay-2s py-4 text-white bg-gray-800 rounded-full text-xl shadow-lg hover:scale-105 transition-transform">
                Explore More
            </button>
        </div>
    );
};