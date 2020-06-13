import React from 'react';
import '../assets/main.css';
import {ReactComponent as SaleLogo} from '../assets/svg/salelogo.svg'


function Movimientos(){

    return(

        <>
      

        <ul className="p-3">

        <li className="p-1">

        <div class="flex flex-wrap -mx-1 overflow-hidden bg-white shadow-2xl rounded-lg p-2">

  <div class="my-1 px-1 w-1/6 overflow-hidden justify-center items-center">
    <SaleLogo/> 
  </div>

  <div class="my-1 px-1 w-3/6 flex-col overflow-hidden">
      <div className="flex text-sm font-bold">  #0001   </div>
      <div className="flex text-sm">  2 de Harina PAN  </div>

    
  </div>

  <div className="my-1 px-1 w-1/3 flex items-center justify-center overflow-hidden">
    <div className="text-center  font-bold text-teal-500"> + $2500</div>
  </div>

</div>

        </li>

        <li className="p-1">

        <div class="flex flex-wrap -mx-1 overflow-hidden bg-white shadow-2xl rounded-lg p-2">

  <div class="my-1 px-1 w-1/6 overflow-hidden justify-center items-center">
    <SaleLogo/> 
  </div>

  <div class="my-1 px-1 w-3/6 flex-col overflow-hidden">
      <div className="flex text-sm font-bold">  #0002   </div>
      <div className="flex text-sm">  2 de Harina PAN  </div>

    
  </div>

  <div className="my-1 px-1 w-1/3 flex items-center justify-center  overflow-hidden">
    <div className="text-center  font-bold text-teal-500"> + $2500</div>
  </div>

</div>

        </li>



    



        </ul>

        </>

    )
    }

export default Movimientos;

