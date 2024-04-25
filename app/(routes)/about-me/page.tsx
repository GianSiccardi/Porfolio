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
               <div className="mb-20">
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        formación academica
                    </span>
                </h1>
                </div>

                <CounterServices />

                <TimeLine />

            </Container>
        </>
    );
}

export default AboutMePage;