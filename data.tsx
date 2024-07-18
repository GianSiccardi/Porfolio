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
        title: "Universidad Champagnat",
        subtitle: "Ser profesional",
        description: "Actualmente, estoy cursando el primer año de la carrera de Analista. Tomé esta decisión porque deseaba mejorar y alcanzar mi mejor versión profesional. Entendí que, para tener un impacto positivo en la sociedad en el futuro, necesitaba mejorar en mi profesión. Además, aspirando a liderar grandes equipos, comprendí que un buen líder debe dar ejemplo a través de su comportamiento y conocimiento.",
        date: "Mar 2024",
    },
    {
        id: 2,
        title: "Udemy",
        subtitle: "Reforzando Conocimientos",
        description: "Este curso, realizado simultáneamente con el CTD, fue una experiencia valiosa para reforzar mis conocimientos en Java. Aprendí sobre Servlets y Java EE, lo cual amplió mi comprensión de este lenguaje de programación.Tambien fue una pequeña introduccion a Angular",
        date: "Ago 2022",
    },
    {
        id: 3,
        title: "Certified tech Developer",
        subtitle: "Entrada de lleno al mundo del desarrollo",
        description: "Este curso representó una inmersión profunda en diversas ramas de la programación y proporcionó una experiencia cercana al entorno laboral. Al principio, revisé conceptos familiares y luego profundicé en ellos, obteniendo una comprensión más sólida de su funcionamiento. Exploré en profundidad la programación orientada a objetos (POO) y el framework Spring, así como bases de datos y desarrollo frontend, donde conocí tecnologías como React. También tuve la oportunidad de familiarizarme con herramientas de infraestructura, aunque mi experiencia en este ámbito es limitada. Docker fue una de las herramientas que tambien aprendi. Además, el curso abordó metodologías ágiles, que pude aplicar de manera efectiva en el proyecto integrador. ",
        date: "May 2022",
    },

    {
        id: 4,
        title: "Full Stack",
        subtitle: "Primer Contacto",
        date: "SEP 2021 ",
        description: "Este curso marcó mi primera incursión en el mundo de la programación. Comenzamos con los fundamentos básicos, explorando los principios de la programación y adentrándonos en la lógica subyacente. A lo largo del curso, profundicé en conceptos de programación orientada a objetos (POO) con spring.Tambien conoci el mundo del front , con html,javaScript y css Finalicé con un proyecto integrador, donde pude comprender la importancia de las habilidades blandas en el ámbito tecnológico."
    },




]

export const dataCounter = [
    {
        id: 0,
        endCounter: "Egg",
        text: "FullStack.",
        pdfLink: "/egg.jpeg"

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
        description: "Conocimientos en POO, mapeos y anotaciones con Hibernate, Spring Security y JUnit, APIs RESTful y MicroServicio."
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Habilidades para realizar interfaces dinámicas con React y Angular.",
    },
    {
        icon: <Computer />,
        title: "Base de Datos",
        description: "Conocimiento sobre el motor Mysql y consultas intermedias para realizar búsquedas. ",
    },
    {
        icon: <Book />,
        title: "Docker",
        description: "Habilidades para dockerizar una app.",
       
    },
    {
        icon: <Rocket />,
        title: "Metodologias agiles",
        description: "En los cursos realizados trabajé con metodologías ágiles como Scrum y Kanban.   ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema de Examen",
        images: [ "cap1.jpg", "cap2.jpg", "cap3.jpg", "cap4.jpg", "cap5.jpg",],
        urlGithub: "https://github.com/GianSiccardi/ProyectoExamenAngularJava.git",
        urlDemo: "https://github.com/GianSiccardi/sistema-examen-front.git",
        description: "Este proyecto lo hice cuando estaba decidiendo qué framework front-end quería aprender para complementarlo con Java. Solidifiqué mis bases en la creación de una API. Es sencilla y no tiene excepciones, pero el armado está correcto. Es un sistema donde tengo usuarios normales y administradores; este último puede crear el examen, especificar la categoría, las preguntas y las respuestas correctas, además de actualizar y eliminar todas estas funciones. El usuario común puede seleccionar el exámen que esté habilitado y responderlo en tiempo real."
        ,description2:"Proyecto con java y angular para crear exámenes y responderlos en tiempo real."
    },
    {
        id: 2,
        title: "Sistema para Bodega",
        images: ["cap1Bodega.jpg","cap2Bodega.jpg","cap3Bodega.jpg","bodega4.jpg","Bodega5.jpg"],
        urlGithub: "https://github.com/Tom09t/BodegaEscencia.git",
        urlDemo: "https://github.com/Tom09t/BodegaEscenciaReact.git",
        description:"Este es mi proyecto más ambicioso y el que será utilizado en el mundo real: es el control de stock y ventas de una bodega. A la bodega ingresa un grupo que viene con una empresa de turismo, y la bodega también cuenta con dos negocios: el restaurante y la vinoteca. El sistema se encarga de controlar las ventas de cada grupo en cada negocio y luego genera un reporte del día. Hay un usuario administrador que se encarga de cargar stock, eliminar ventas y agregar empresas. A día de hoy, sigue en desarrollo, pero se puede apreciar lo robusta que es la aplicación, ya que cuenta con algoritmos complejos, validaciones y seguridad. El front-end está hecho en React, lo que me permitió sentirme bastante cómodo con este framework y comprenderlo mas en profundidad. La experiencia que adquirí fue sobre la importancia del trabajo en equipo, saber comunicar lo que quiero o lo que no me gusta, y también cómo dialogar con el cliente para entender sus necesidades y deseos.",
        description2:"Primer proyecto como trabajo real, controla el stock y ventas de una bodega."

    },
    {
        id: 3,
        title: "Web alquiler de ropa",
        images: ["cap1D.jpg","cap2D.jpg","cap3D.jpg"],
        urlGithub: "https://github.com/andrescarandino/Proyecto-Integrador-RopaDeDise-o.git",
        urlDemo: "https://github.com/andrescarandino/Proyecto-Integrador-RopaDeDise-o.git",
        description:"En este proyecto no hay tantas imágenes del front-end porque es en lo que menos trabajé. Me enfoqué principalmente en el back-end, pero es algo simple: una aplicación donde el usuario, al registrarse, recibe un correo electrónico y luego puede realizar reservas de los productos disponibles. También cuenta con un rol de administrador que realiza todas las tareas relacionadas con la gestión de productos, como cargar, actualizar, eliminar y cambiar roles. Lo que destaco de este proyecto es que trabajamos como un equipo de desarrollo, utilizando historias de usuarios, la metodología Scrum, Trello, entre otros recursos."   
        ,description2:"Proyecto integrador realizado en el curso Certified tech developer."
    },
    {
        id: 4,
        title: "Ecositema de Microservice",
        images: ["/image-5.jpg"],
        urlGithub: "https://github.com/GianSiccardi/CursoUsuariosMicroService",
        urlDemo: "#!",
        description:"Este proyecto fue mi primer ecositema de microservice , es sencillo , pero pude entender la implementancion de microservicios en un entorno de kubernetes",
        description2:"Ecositema de microservice con docker y kubernetes"
     },
     {
        id: 5,
        title: "Ecosistema de Microservices Eventos",
        images: ["app-eventos.drawio.jpg","app-eventos2.jpg","app-eventos3.jpg"],
        description:"En este proyecto profundice mucho mas en la arquitecura de microservice , es un ecositema de gestor de eventos , con diferentes microservice con una funcion definida ,tambien generados con contenedores de docker.Tenemos un Api Gateway para el balanceo de carga , pero tambien se comunica con el servicio de autenticacion con Jwt, unas confirmado el usuario y sus roles , puede ingresar y hacer solicitudes.Un usuario puede comprar la entrada de un evento , ver la ubicacion de los mismo ,cancelar la compra, y ver el listado de eventos de lo cuales compro entrada ,con sus respectivas ubicaciones.El usuario admin tiene privilegios , como eliminar usuarios , crear eventos y asignarle ubicaciones, como tambien crearles.Este proyecto me permitio mejorar la logica sobre la comunicacion entre micro services , ya que por ejemplo si elimino una ubicacion , esta automaticamente se tiene que desasignar de un evento .",
        description2:"Gestor de Usuarios,Eventos y ubicaciones",
        urlGithub: "https://github.com/GianSiccardi/AppEventos",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Ecosistema de Microservices Ordenes",
        images: ["flujo.png","flujo2.png","flujo3.png"],
        description:"Este ecosistema fue todo un desafio , me llevo a mi maxima exigencia a la hora de pensar una arquitecutura ,es un ecositema de microservices pero esta vez registrados en eureka, aunque pude explotar  la utilidad de docker , ya que las bases de datos, interfaces , kafka y algunas cosas mas , fueron imagenes de docker.El proyecto tambien tiene un Api gateway,con una configuracion sencilla con keycloak.Tenemos el microservice cliente ,orden,producto ,pago, y notificacion.En este proyecto fue mi primer acercamiento con kafka , que lo uso para la comuncacion entre el microservice notifiacion con el de pago y orden ,que a su vez una vez que la orden es exitosa , se envia una notifacion por correo al cliente.Me siento muy satisfecho con este proyecto , puede explotar la arquitectura de microservices , me queda mucho por aprender , pero con esto me siento con la confianza de poder encarar cosas un poco mas complejas , ",
        description2:"Gestor de Ordenes,Pagos y Notificaciones",
        urlGithub: "https://github.com/GianSiccardi/Microservices-compra",
        urlDemo: "#!",
        
    },
    {
        id: 7,
        title: "GitHub",
        images: [],
        urlGithub: "https://github.com/GianSiccardi?tab=repositories",
        urlDemo: "https://github.com/GianSiccardi?tab=repositories",
        description2:"Link con mis primeros proyectos, por si quieren ver más            "
    },
 
  /*
   {
       id: ,
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


