import React from 'react';
import '../assets/main.css';
import { ReactComponent as ArrowLeft} from "../assets/svg/arrowleft.svg"
import { ReactComponent as ArrowRight} from "../assets/svg/arrowright.svg"
import { ReactComponent as CalendarLogo} from "../assets/svg/calendar.svg"
import { ReactComponent as Eye} from "../assets/svg/eye.svg"

function Reportes(){

    return(
        <>
        <div className="flex flex-row p-4">
        <div className=" w-1/4 text-center flex"> 
        
        <button>
        <ArrowLeft/>
        </button>
        
        
        </div>
        <button className=" w-2/3 w-full text-center justify-center flex ">
         <CalendarLogo className="mx-2"/> Hoy  
        </button>
        <div className=" w-1/4 justify-end flex "> 
        
        <button>
        <ArrowRight/>
        </button>
        
        </div>
        </div>



        <div className="flex flex-row p-4 shadow-xl rounded-lg m-3 border border-gray-100 transition duration-700 ease-in-out  transform hover:-translate-y-2 hover:scale-100 ...">
        <div className=" w-1/2 text-md font-light text-center items-center justify-center flex">
            Numero de Ventas
        </div>

        <div className="flex w-1/2 text-teal-500 font-medium text-2xl text-center items-center justify-end   ">
         
         23  
                
        </div>
        </div>

             
        


        </>
    )
    }

export default Reportes;

