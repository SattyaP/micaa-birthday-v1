import { Hero } from "../components/Hero"
import { useState } from 'react'
import { Splash } from "../components/Splash";
import { Timeline } from "../components/Timeline";
import { Coupon } from "../components/Coupon";
import { Highlights } from "../components/Highlights";
import { FunFact } from "../components/FunFact";
import { Celebration } from './../components/Celebration';

export const Home = () => {
    const [isMounted, setIsMounted] = useState(false);

    setTimeout(() => {
        setIsMounted(false);
    }, 3000);

    return (

        <main>
            {isMounted && <Splash />}
            <Hero />
            <Timeline />    
            <Highlights />
            <FunFact />
            <Coupon />
            <Celebration />
        </main>
    )
}