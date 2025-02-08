import anime from "animejs";
import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

export const FunFact = () => {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    const highlightsData = [
        { label: "Total Foto Bersama", value: 689, color: "text-red-500" },
        { label: "Hari Bersama", value: 125, color: "text-blue-500" },
        { label: "Crying - crying", value: 3, color: "text-green-500" },
        { label: "Total event bersama", value: 2, color: "text-yellow-500" },
        { label: "Total Photobox", value: 3, color: "text-purple-500" },
        { label: "Total Bunga", value: 2, color: "text-pink-500" },
    ];

    const favoriteImage = [
        { label: "Foto Terfavorit", image: "/timeline/22.JPG" },
        { label: "Foto Terkeren", image: "/timeline/21.jpeg" },
        { label: "Cantikk BANGETTT", image: "/timeline/cantik.jpg" },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        anime({
            targets: '.favorite-image',
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: anime.stagger(200, { start: 1500 })
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div id="fun_fact" ref={sectionRef} className="mt-72">
            <p className="text-blue-500 text-xl font-medium mb-3">Ngitung manual :(</p>
            <h4 className="text-5xl font-bold text-old_dark">
                Fun & Fact our stats
            </h4>

            <div className="grid grid-cols-3 gap-8 mt-24">
                {highlightsData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {startCount && (
                            <CountUp end={data.value} duration={3} className={`text-7xl font-bold ${data.color}`} />
                        )}
                        <p className="text-lg font-medium text-gray-600">{data.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 items-center gap-8 mt-24">
                {favoriteImage.map((data, index) => (
                    index === 1 ? (
                        <div key={index} className="flex flex-col items-center gap-4 favorite-image">
                            <div className="flex flex-col items-center favorite-image">
                                <img width={250} className="rounded-xl border-yellow-500 border-8 border-double" src="/timeline/hbd.jpg" alt="Dokumentasi Amisa" />
                                <p className="text-lg font-medium text-gray-600">Micaa</p>
                            </div>
                            <div className="flex flex-col items-center favorite-image">
                                <img width={250} className="rounded-xl border-yellow-500 border-8 border-double" src={data.image} alt={data.label} />
                                <p className="text-lg font-medium text-gray-600">{data.label}</p>
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="flex flex-col items-center favorite-image">
                            <img width={250} className="rounded-xl border-yellow-500 border-8 border-double" src={data.image} alt={data.label} />
                            <p className="text-lg font-medium text-gray-600">{data.label}</p>
                        </div>
                    )
                ))}
            </div>

        </div>
    );
};