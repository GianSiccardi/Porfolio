
"use client"
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import Modal from "./modal-contact";
import './animationn.css'





const Introduction = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };
    return (

        <>
     <div className="z-20 w-full bg-darkBg/60">
  <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
    <div className="flex justify-center">
    <div className="w-50 h-50 rounded-full border-2 border-secondary overflow-hidden animate-bounce">
  <Image src="/fotomia.jpeg" priority width="200" height="200" alt="Avatar" />
</div>

    </div>
    <div className="flex flex-col justify-center max-w-md">
      <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
        Mis habilidades son <br />
        <TypeAnimation
          sequence={['JAVA ', 1000, 'React', 1000, 'mysql', 1000, 'docker', 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="font-bold text-secondary"
        />
      </h1>
      <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
        Como desarrollador frontend y creador de contenido, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
      </p>
      <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
        <a href="/cvGian.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
         Ver CV
        </a>
        <p
          className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
          onClick={handleOpenModal}
        >
          Contacta conmigo
        </p>
        <Modal isOpen={modalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default Introduction;
