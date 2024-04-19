"use client"

import Container from "@/app/componets/container";
import CounterServices from "@/app/componets/counter-services";
import TimeLine from "@/app/componets/time-line";
import TransitionPage from "@/app/componets/transition-page";



const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <Container
            >
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </Container>
        </>
    );
}

export default AboutMePage;