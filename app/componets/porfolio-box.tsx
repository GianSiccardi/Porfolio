
'use client'

import Link from "next/link";
import ModalCarussel from "./modal-carrusel";
import { useState } from "react";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        images: string[];
        urlGithub: string;
        urlDemo: string;
        description?:string;
        description2?:string;
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, images, urlDemo,description2,description, urlGithub } = data

    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            <h3 className="mb-4 text-xl">{title}</h3>
<div>
    {description2}
</div>

            <div className="flex gap-1 mt-8">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Gitback
                </Link>
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Gitfront
                </Link>
                <p
                    onClick={handleOpenModal}
                    className="p-2 transition duration-150 rounded-lg text-black bg-secondary hover:bg-secondary/80"
                    style={{ color: 'black !important', cursor: 'pointer' }}
                >
                  
                     demo
                </p>
                <ModalCarussel isOpen={modalOpen} onClose={handleCloseModal} images={images} description={description}/>
            </div>
        </div>
    );
}

export default PortfolioBox