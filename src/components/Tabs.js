import React from "react";
import {ReactComponent as CajaLogo} from '../assets/svg/cajalogo.svg'
import {ReactComponent as ReportesLogo} from '../assets/svg/reporteslogo.svg'
import {ReactComponent as MovimientosLogo} from '../assets/svg/movimientoslogo.svg'
import {ReactComponent as ArticuloLogo} from '../assets/svg/articulologo.svg'
const Tabs = ({ color }) => {
  
  return (
    <>
     <div className="flex items-stretch h-16 ">
  <div className="flex-1 text-teal-500 text-center bg-white    px-1 pt-1  ">
  <ReportesLogo className='m-auto items-center' />
  <p>Reportes </p>
  </div>
  <div className="flex-1 text-teal-500 text-center  bg-white  px-1 pt-1  ">
  <MovimientosLogo className='m-auto items-center' />
  <p>Movimientos </p>
  </div>
  <div className="flex-1 text-teal-500 text-center bg-green-200  bg-white px-1 pt-1">

  <ArticuloLogo className='m-auto items-center' />
  <p>Articulos </p>

  </div>
  
  
  <div className="flex-1 text-teal-500  text-center  bg-white  px-1 pt-1 ">
      
  <CajaLogo className='m-auto items-center' />
  <p>Caja </p>
  </div>
</div>

    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color="blue" />
    </>
  );
}