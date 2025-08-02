"use client";

import {useEffect} from 'react';
import styles from "./page.module.css";
import Landing from "@/components/Landing/index";
import Hero from "@/components/Hero/index";
import Services from "@/components/Services/index";

export default function Home() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, []);
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Landing/>
                <Hero/>
                <Services/>
            </main>
        </div>
    );
}
