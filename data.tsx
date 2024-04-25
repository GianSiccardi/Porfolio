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
        icon: <HomeIcon size={25} color="#000" strokeWidth={2} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",

        icon: <CodeSquare size={25} color="#000" strokeWidth={2} />,
        link: "/portfolio",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#000" strokeWidth={2} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <UserRound size={25} color="#000" strokeWidth={2} />,
        link: "/about-me",
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
        description: "Este curso, realizado simultáneamente con el CTD, fue una experiencia valiosa para reforzar mis conocimientos en Java. Aprendí sobre Servlets y Java EE, lo cual amplió mi comprensión de este lenguaje de programación",
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
        subtitle: "Primer Contacto",
        date: "SEP 2021 ",
        description: "Este curso marcó mi primera incursión en el mundo de la programación. Comenzamos con los fundamentos básicos, explorando los principios de la programación y adentrándonos en la lógica subyacente. A lo largo del curso, profundicé en conceptos de programación orientada a objetos (POO) con springy finalicé con un proyecto integrador, donde pude comprender la importancia de las habilidades blandas en el ámbito tecnológico."
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
        description: "Conocimientos solidos de POO , mapeos y anotaciones con hibernate ,spring security y JUnit,ApisRestFul y MicroServicio "
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
        description: "En los cursos que he realizado trabaje con metedologías ágiles como Scrum o Kanban   ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema de Examen",
        images: [ "cap1.jpg", "cap2.jpg", "cap3.jpg", "cap4.jpg", "cap5.jpg",],
        urlGithub: "https://github.com/GianSiccardi/ProyectoExamenAngularJava.git",
        urlDemo: "https://github.com/GianSiccardi/sistema-examen-front.git",
        description: "Este proyecto lo hice cuando estaba viendo que framework front queria aprender para poder complementarlo con java.Solidifique mis bases en la creacion de una API , es sencilla sin excepciones pero el armado esta correcto.Es una sistema donde tengo usuarios normales y administrador , este ultimo puede crear el examen , en que categoria entra , las preguntas y respuestas correctas,actualizar y eliminar todas estas funciones.El usuario comun puede seleccionar el examen que este habilitado y responderlo en tiempo real",
        description2:"Es un proyecto con java y angular,para crear examanes y responderlos  en tiempo real"
   
    },
    {
        id: 2,
        title: "Sistema para Bodega",
        images: ["cap1Bodega.jpg","cap2Bodega.jpg","cap3Bodega.jpg","cap5Bodega.jpg"],
        urlGithub: "https://github.com/Tom09t/BodegaEscencia.git",
        urlDemo: "https://github.com/Tom09t/BodegaEscenciaReact.git",
        description: "Este es mi proyecto mas ambicioso , y el que sera utilizado en el mundo real ,es el control de stock y ventas de una bodega.A la bodega ingresa un grupo que viene con una empresa de turismo, y la bodega tambien cuenta con 2 negocios , el restaurante y la vinoteca ,el sistema se encarga de controlar las ventas de cada grupo en cada negocio y luego saca un reporte del dia.Hay un usuario admin , que se encarga de cargar stock ,eliminar ventas, cargar empresa.Al dia de hoy sigue en desarrollo , pero se puede apreciar lo robusta que es la aplicacion ya que cuenta con algoritmos complejos ,validaciones y seguridad , el front esta hecho en react ,lo que me permitio poder decir que puedo manejarme bastante comodo con este framework  .La experiencia que adiquiri fue sobre la imp ortancia del trabajo en equipo , de saber comunicar lo que quiero o lo que me disgusta.Tambien a dialogar con el cliente , saber lo que quiere y si es eso lo que necesita",
        description2:"Primer proyecto como trabajo real,que controla el stock y ventas de una bodega"

    },
    {
        id: 3,
        title: "Pagina de alquiler de ropa",
        images: ["cap1D.jpg","cap2D.jpg","cap3D.jpg"],
        urlGithub: "https://github.com/andrescarandino/Proyecto-Integrador-RopaDeDise-o.git",
        urlDemo: "https://github.com/andrescarandino/Proyecto-Integrador-RopaDeDise-o.git",
        description: "En este proyecto no hay tantas imagenes del front porque es lo que menos trabaje , en este me segui encargando del back , pero es algo simple ,una aplicacion donde el usuario cuando se registra le llega un mail , luego puede realizar reservas de los productos disponibles ,tambien cuenta con un rol admin que hace todas las tareas de cargar producto,actualizar ,eliminar , cambiar rol.Lo que destaco de este proyecto es que se trabajo como si fuera un equipo de desarrollo ,ya que contamos con historias de usarios ,metodoliga scrum , trello ,etc."
        ,description2:"Este fue el proyecto integrador que realice en el curso CTD"
    },
    {
        id: 4,
        title: "GitHub",
        images: ["imagesDiseño/cap1.jpg","imagesDiseño/cap2.jpg","imagesDiseño/cap3.jpg"],
        urlGithub: "https://github.com/GianSiccardi?tab=repositories",
        urlDemo: "https://github.com/GianSiccardi?tab=repositories",
        description2:"Aca dejo el link de mi gitHub donde tengo mis primeros proyectos que me sirvieron de practica "
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