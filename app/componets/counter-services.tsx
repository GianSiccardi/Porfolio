
"use client"
import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6">
            {dataCounter.map(({ id, endCounter, text,pdfLink }) => (
                <div key={id} className={` 'ltr'}`}>
                    <div className={"" } >
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                           {endCounter} 
                        </p>
                        <p className="text-xs uppercase max-w-[100px]">
                            {text}<br></br>
                            {pdfLink && <a href={pdfLink} target="_blank">Ver certificado</a>}</p>
                    </div>
                </div>
            ))}
        </div>
        
    );
}


export default CounterServices;