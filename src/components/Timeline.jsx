import { useEffect, useRef, useState } from "react";
import waking_up from "/music/waking-up.mp3";
import Lenis from '@studio-freight/lenis';
import useSound from "use-sound";

export const Timeline = () => {
    const [play, { stop }] = useSound(waking_up, { volume: 1, loop: true });
    const [isPlaying, setIsPlaying] = useState(false);
    const sectionRef = useRef(null);
    const lenis = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsPlaying(true);
                    play()
                } else {
                    setIsPlaying(false);
                    stop()
                }
            },
            { threshold: 0.5 }
        );

        const sectionElement = sectionRef.current;
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
            stop();
        };
    }, [play, stop]);

    useEffect(() => {
        lenis.current = new Lenis({
            duration: 0.5,
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


    const timelineItems = [
        {
            image: '/timeline/1.jpg',
            date: '27 September 2024',
            title: "Moment Apa nichh",
            text: "Moment modus micaa lucu bangett sihh tiba2 bangett awal2 aku shock sihh tapi karena udahh sukaa jadii yaa iYAINN AJA DEH AHAHAHHAH"
        },
        {
            image: '/timeline/2.jpg',
            date: "4 Oktober 2024",
            title: "Fotbar pertama kali",
            text: "Moment pertama kali fotbarr kaku bangett akunyaa masihh maluu AHAHHA, tapii kamuu cantikk bangettt"
        },
        {
            image: '/timeline/3.jpg',
            date: "7 Oktober 2024",
            title: "2 Hari Setelah Penembakan",
            text: "Moment pas rapat BEM 💀 tiba2 banget argha menanyakan pertanyaan yang krusial disaat hubungan kita masih newbiee bangett nichh"
        },
        {
            image: '/timeline/4.jpg',
            date: "9 Oktober 2024",
            title: "Kayanya ini moment pertama kali ke Indomaret duduk deh",
            text: "Seingetkuu ini moment kita pertama kali ke indomaret duduk deh, ngobroll kalo ga salahh aku ada salah di moment gelang kematian itu 💀"
        },
        {
            image: '/timeline/6.jpg',
            date: "14 Oktober 2024",
            title: "Tebak Moment apa ini 😏",
            text: "Foto fotoo dikampuss lucu jugaa hayo coba tebakk ini ada momentt apa nantii dapett sayangg deh kalo tauu"
        },
        {
            image: '/timeline/7.jpg',
            date: "16 Oktober 2024",
            title: "Foto janjian batik",
            text: "Foto lagii HAHAHAHA pake iphone kalii ini gacorr"
        },
        {
            image: '/timeline/8.jpg',
            date: "20 Oktober 2024",
            title: "Nonton pertama kali",
            text: "Diajak temen - temen nontonn akhirnya kitaa nonton bareng untuk pertama kali dan itu jujur filmnya ga ngeri memang kenapaa ya"
        },
        {
            image: '/timeline/9.jpg',
            date: "25 Oktober 2024",
            title: "Diajak Ngopi sama temen - temen di bento",
            text: "Diajak temen - temen ngopi jujur ini first time kuu karnaa sama kamuu jadinya gatau yaa aku lebih dekett samaa temen - temen"
        },
        {
            image: '/timeline/10.jpg',
            date: "28 Oktober 2024",
            title: "Cie beli laptopp pacarrkuu yang cantikk ini sangatt antusias",
            text: "Beli latop saya yang jadii sales nya untung bawa akuu biar ga ditipu"
        },
        {
            image: '/timeline/12.JPG',
            date: "09 November 2024",
            title: "jadi PDD HIC dadakan",
            text: "Jujur kalo kamu jadi PDD sangatt totalitass pintarr sayangg"
        },
        {
            image: '/timeline/14.JPG',
            date: "17 November 2024",
            title: "Jatimpark yeayy",
            text: "Banyakk fotonyaa banyak momenttnyaa sayangg banget samaa satu momentt inii sayangg oranggnya"
        },
        {
            image: '/timeline/17.jpeg',
            date: "1 Desember 2024",
            title: "Badminton",
            text: "HAHAAHHA akhirnya kamuu badmintonn samaa temen-temenn kuu sayangg"
        },
        {
            image: '/timeline/18.jpg',
            date: "15 Desember 2024",
            title: "Clarissa & Samudra",
            text: "Misi Berburu barangg kamuu sayangg"
        },
        {
            image: '/timeline/23.jpg',
            date: "23 Desember 2024",
            title: "Technofest 9.0",
            text: "Menjadi panitia bersama untuk kedua kalinyaa"
        },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            lenis.current.scrollTo(element, { offset: -100 });
        }
    };

    const controlSound = () => {
        if (isPlaying) {
            setIsPlaying(false);
            stop()
        } else {
            setIsPlaying(true);
            play()
        }
    };

    return (
        <div
            ref={sectionRef}
            id="timeline"
            className="text-old_dark mt-80 relative"
        >
            <p className="text-blue-500 text-xl font-medium mb-3">Short Story dulu</p>
            <h4 className="text-5xl font-bold">
                Lihat nih Timeline kita
                <br />
                Perjalanan kita
            </h4>

            <div className="flex items-center justify-center mt-24 my-24 bg-old_dark p-4 rounded-xl">
                <button onClick={controlSound} className="text-4xl">{isPlaying ? "⏸️" : "▶️"}</button>
                <p className="text-white text-2xl ml-4">
                    Ardhito Pramono - Waking Up Together with you
                </p>
            </div>

            {timelineItems.map((item, index) => (

                <div key={index} className="grid grid-cols-3 gap-32 mb-12">
                    <div>
                        <div className="sticky pb-16 top-0">
                            <div className="pt-8 text-left">
                                <p className="bg-old_dark text-white p-3 rounded">{item.date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 pt-8">
                        <div className="flex-shrink-0">
                            <div className="mx-auto flex flex-col items-center">
                                <img className="aspect-[4/3] w-1/2 rounded-xl object-cover mb-3" src={item.image} alt={item.title} />
                                <h1 className="mb-3 font-semibold text-blue-500">{item.title}</h1>
                                <p className="line-clamp-4 text-black font-medium rounded-lg bg-white shadow p-4">{item.text}</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <h1 className="font-extrabold text-7xl mt-72">LAH UDAH DIUJUNG AJA CEPET BANGET ?</h1>
            <p className="mt-4 text-xl mb-12">Yaudaa yukk lanjutt dehh ke couponn</p>

            <button onClick={() => scrollToSection('hightligts')} className="bg-yellow-500 border-2 border-old_dark py-3 px-4 hover:scale-105 transition-transform duration-300 font-semibold text-4xl rounded animate__bounceIn animate__animated animate__infinite animate__slow">LETS GO !</button>
        </div>
    );
};
