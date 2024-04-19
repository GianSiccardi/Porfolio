'use client'

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";



const Navbar2 = () => {
    const router =usePathname()
    return (
     

        <MotionTransition position="right"className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className=" flex items-center justify-center gap-2 px-4 py-1 rounder-full bg-white/15 background-blur-sm" >
                    {itemsNavbar.map((items) => (

                        <div key={items.id}
                        className={`px-3 py-2 transition duration-150
                        rounded-full cursor-pointer hover:bg-secondary
                        ${router==items.link && 'bg-secondary'}`}
                        
                        >

                            <Link href={items.link}>{items.icon}</Link>


                        </div>

                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar2;