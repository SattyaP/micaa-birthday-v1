"use client";

import anime from "animejs"
import { useEffect, useRef } from "react";

export const Splash = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textWrapper = textRef.current;
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: true })
            .add({
                targets: ".animate-text .letter",
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 150 * (i + 1),
            })
            .add({
                targets: ".animate-text",
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000,
            });
    }, []);

    return (
        <div className="bg-black text-white h-screen flex items-center justify-center">
            <h1 className="animate-text text-7xl font-extrabold" ref={textRef}>SEBENTAR SAYANG</h1>
        </div>
    )
}
