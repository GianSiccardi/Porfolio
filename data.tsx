import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Flower } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} color="#000" strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25}  color="#000" strokeWidth={2} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
  
        icon: <CodeSquare size={25}  color="#000" strokeWidth={2} />,
        link: "/portfolio",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25}  color="#000" strokeWidth={2} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <UserRound size={25}  color="#000" strokeWidth={2} />,
        link: "/about-me",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25}  color="#000" strokeWidth={2} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
   
    {
        id: 1,
        title: "Universidad Champgnat",
        subtitle: "Ser profesional",
        description: "Actualmente, estoy cursando el primer año de la carrera de Analista. Tomé esta decisión porque deseaba mejorar y alcanzar mi mejor versión profesional. Entendí que, para tener un impacto positivo en la sociedad en el futuro, necesitaba mejorar en mi profesión. Además, aspirando a liderar grandes equipos, comprendí que un buen líder debe dar ejemplo a través de su comportamiento y conocimiento.",
        date: "Mar 2024",
    },
    {
        id: 2,
        title: "Udemy",
        subtitle: "Reforzando Conocimientos",
        description:"Este curso, realizado simultáneamente con el CTD, fue una experiencia valiosa para reforzar mis conocimientos en Java. Aprendí sobre Servlets y Java EE, lo cual amplió mi comprensión de este lenguaje de programación",
        date: "Ago 2022",
    },
    {
        id: 3,
        title: "Certified tech Developer",
        subtitle: "Entrada de lleno al mundo del desarrollo",
        description: "Este curso representó una inmersión profunda en diversas ramas de la programación y proporcionó una experiencia cercana al entorno laboral. Al principio, revisé conceptos familiares y luego profundicé en ellos, obteniendo una comprensión más sólida de su funcionamiento. Exploré en profundidad la programación orientada a objetos (POO) y el framework Spring, así como bases de datos y desarrollo frontend, donde conocí tecnologías como React. También tuve la oportunidad de familiarizarme con herramientas de infraestructura, aunque mi experiencia en este ámbito es limitada. Docker fue una de las herramientas con las que me sentí más cómodo. Además, el curso abordó metodologías ágiles, que pude aplicar de manera efectiva en el proyecto integrador. ",
        date: "May 2022",
    },
 
    {
        id: 4,
        title: "Full Stack",
        subtitle:"Primer Contacto",
        date: "SEP 2021 ",
        description:"Este curso marcó mi primera incursión en el mundo de la programación. Comenzamos con los fundamentos básicos, explorando los principios de la programación y adentrándonos en la lógica subyacente. A lo largo del curso, profundicé en conceptos de programación orientada a objetos (POO) con springy finalicé con un proyecto integrador, donde pude comprender la importancia de las habilidades blandas en el ámbito tecnológico."
    },

   
  

]

export const dataCounter = [
    {
        id: 0,
        endCounter: "Egg",
        text: "FullStack.",
        pdfLink: "/fotomia.jpeg"
     
    },
    {
        id: 1,
        endCounter: "DH",
        text: "Certified developer.",
        pdfLink: "/Gianfranco Siccardi.jpg"
     
    },
    {
        id: 2,
        endCounter: "Udemy.",
        text: "Base sobre java",
        pdfLink: "/u.jpg"
     
    },
    {
        id: 3,
        endCounter: "Champgnat.",
        text: "Analista Programador",
        pdfLink: "/Certificado_Alumno_Regular.jpg"
    },
];

export const serviceData = [
    {
        icon: <Flower />,
        title: "Java",
        description:"Conocimientos solidos de POO , mapeos y anotaciones con hibernate ,spring security y JUnit,ApisRestFul y MicroServicio "
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "No es mi especialidad ,pero lo que mas use para realizar interfaces dinamicas es react ,y un poco de angular",
    },
    {
        icon: <Computer />,
        title: "Base de Datos",
        description: "Conocimiento sobre el motor Mysql y consultas intermedias para realizar busquedas ",
    },
    {
        icon: <Book />,
        title: "Docker",
        description: "Esta es una habilidad en la que quiero mejorar , minimo que se hacer es dockerizar una app",
    },
    {
        icon: <Rocket />,
        title: "Metodologias agiles",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        images: ["images/fotomia.jpeg", "images/Gianfranco Siccardi.jpg"],
        urlGithub: "https://github.com/GianSiccardi/ProyectoExamenAngularJava.git",
        urlDemo: "https://github.com/GianSiccardi/sistema-examen-front.git",
        description:"Este proyecto lo hice solo , para practicar y poner mis conocimientos en practica , aprendi de un video de youtube y bueno pude practicar lo pco"
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        images: ["images/Certificado_Alumno_Regular.jpg"],
                urlGithub: "https://github.com/Tom09t/BodegaEscencia.git",
        urlDemo: "https://github.com/Tom09t/BodegaEscenciaReact.git",
        description:"Este es mi proyecto mas ambicioso , y el que sera utilizado en el mundo real ,es el control de stock y ventas de una bodega.La experiencia que adiquiri fue sobre la importancia del trabajo en equipo , de saber comunicar lo que quiero o lo que me disgusta.Tambien a dialogar con el cliente , saber lo que quiere y si es eso lo que necesita"

    },
   {
        id: 3,
        title: "Estrategias Web",
        images: ["images/Certificado_Alumno_Regular.jpg"],
        urlGithub: "https://github.com/andrescarandino/Proyecto-Integrador-RopaDeDise-o.git",
        urlDemo: "https://github.com/andrescarandino/Proyecto-Integrador-RopaDeDise-o.git",
        description:"Este fue el que realize cuando termine CTD , linda experienca de trabajar con gente de otras edades y costumbres , me encargue principalmente del back"
    },
    {
        id: 4,
        title: "Ideas Creativas",
        images: ["images/Certificado_Alumno_Regular.jpg"],
        urlGithub: "#!",
        urlDemo: "#!",
        description:"Les dejo mi GitHub por si quieren ver mas todas las cosas que hicee , son proyectos pequeños que hice para practicar mis saberes"
    },
     /* {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }*/
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];