import { useEffect, useRef } from 'react';
import video from '/hightlights/test.webm';
import anime from 'animejs';

export const Highlights = () => {
    const videoRef = useRef(null);
    const secondVideoRef = useRef(null);

    useEffect(() => {
        const handlePlay = () => {
            if (videoRef.current) {
                videoRef.current.play();
            }

            if (secondVideoRef.current) {
                secondVideoRef.current.play();
            }
        };

        document.addEventListener('click', handlePlay);

        return () => {
            document.removeEventListener('click', handlePlay);
        };
    }, []);

    useEffect(() => {
        anime({
            targets: '.text-blue-500',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        });

        anime({
            targets: '.text-5xl',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 100,
            easing: 'easeOutExpo',
        });

        anime({
            targets: '.flex > h4',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
        });

        anime({
            targets: '.flex > video',
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
        });

        anime({
            targets: '.floating img',
            translateY: [-0, 10],
            direction: "alternate",
            loop: true,
            duration: 2000,
            easing: "easeInOutSine"
        });

    }, []);

    return (
        <div id='hightligts' className="mt-72">
            <p className="text-blue-500 text-xl font-medium mb-3">Ayo apa nihh</p>
            <h4 className="text-5xl font-bold text-old_dark">
                Highlights Ketcil
            </h4>

            <div className="flex justify-between mt-32 mb-32 items-center floating">
                <h4 className="text-left font-bold text-4xl text-old_dark">Berselancar di <br /> Memory</h4>

                <video className='rounded-xl' ref={videoRef} loop width="800">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="flex justify-between mt-32 items-center floating">
                <img width={250} height={250} src={'/cool.png'} alt="" />
                <img width={250} height={250} src={'/photo.png'} alt="" />
                <img width={250} height={250} src={'/popup.png'} alt="" />
            </div>

            <div className="flex justify-between mt-32 items-center floating">
                <video style={{ transform: 'rotateY(180deg)', WebkitTransform: 'rotateY(180deg)', MozTransform: 'rotateY(180deg)' }} className='rounded-xl' ref={secondVideoRef} loop width="800">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h4 className="text-right font-bold text-4xl text-old_dark">Aku Harap Moment <br /> - moment ini <br />terus bertambah</h4>
            </div>
        </div >
    );
};