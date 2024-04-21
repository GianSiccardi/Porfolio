import SliderServices from "@/app/componets/slider-services"
import TransitionPage from "@/app/componets/transition-page"


const ServicesPage=()=>{

    return(
<>

<TransitionPage/>
<div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl 
                    md:mb-5">Mis 
                    <br></br>
                    <span className="font-bold text-secondary"> 
                    servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">
                    Con sólidos conocimientos en Java, Spring Security, Hibernate, JUnit y APIs RESTful, mi area es en el desarrollo backend. Además, cuento con habilidades intermedias en React, MySQL y Docker,
                     lo que me permite contribuir de manera integral en proyectos de desarrollo web.
                       </p>
                 
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>


</>


    )
}

export default ServicesPage;