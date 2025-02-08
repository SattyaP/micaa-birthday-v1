import { useEffect, useRef, useState } from "react";
import Roulette from "@theblindhawk/roulette";

export const Roulettes = () => {
    const containerRef = useRef(null);
    const [roulette, setRoulette] = useState(null);
    const [rollCount, setRollCount] = useState(0);
    const maxRolls = 3; // Allow rolling only 3 times

    useEffect(() => {
        console.log("Roulettes component mounted");

        if (containerRef.current && !roulette) {
            const sections = [
                "Sayang",
                "Nonton",
                "Seafood",
                "Bareng - bareng",
                "Bebas",
                "Sayangg",
                "Pelukkk",
            ];

            const newRoulette = new Roulette({
                container: containerRef.current,
                sections,
                duration: 5000,
                framesPerSecond: 60,
                callback: (section) => {
                    console.log("Selected:", section);
                },
            });

            setRoulette(newRoulette);
        }

        return () => {
            console.log("Roulettes component unmounted");
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, []);

    const handleSpin = () => {
        if (roulette && rollCount < maxRolls) {
            roulette.roll();
            setRollCount(rollCount + 1);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-8">
                Main Roulette Dulu Yuk, Semoga Beruntung Sayang!
            </h1>
            <div
                className="wheel-container flex justify-center items-center"
                ref={containerRef}
            ></div>

            {rollCount < maxRolls ? (
                <button
                    onClick={handleSpin}
                    className="mt-8 px-6 py-3 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-700 transition"
                >
                    Spin ({maxRolls - rollCount} left)
                </button>
            ) : (
                <button
                    className="mt-8 px-6 py-3 bg-green-500 text-white text-xl rounded-lg hover:bg-green-700 transition"
                >
                    Next
                </button>
            )}
        </div>
    );
};
