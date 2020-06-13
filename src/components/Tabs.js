import React from "react";
import {ReactComponent as CajaLogo} from '../assets/svg/cajalogo.svg'
import {ReactComponent as ReportesLogo} from '../assets/svg/reporteslogo.svg'
import {ReactComponent as MovimientosLogo} from '../assets/svg/movimientoslogo.svg'
import {ReactComponent as ArticuloLogo} from '../assets/svg/articulologo.svg'
import { Link } from "react-router-dom";
const Tabs = ({ color }) => {
  
  return (
    <>
     <div className="flex items-stretch h-16 ">
       
  <div className="flex-1 text-teal-500 text-center bg-white    px-1 pt-1  ">
  <Link to="/reportes">
  <ReportesLogo className='m-auto items-center' />
  Reportes</Link>
  </div>

  <div className="flex-1 text-teal-500 text-center  bg-white  px-1 pt-1  ">
  <Link to="/movimientos">
  <MovimientosLogo className='m-auto items-center' />
  Movimientos</Link>
  </div>

  <div className="flex-1 text-teal-500 text-center bg-green-200  bg-white px-1 pt-1">
  <Link to="/">
  <ArticuloLogo className='m-auto items-center' />
  Articulos</Link>
  </div>
  
  
  <div className="flex-1 text-teal-500  text-center  bg-white  px-1 pt-1 ">
  <Link to="/caja">
  <CajaLogo className='m-auto items-center' />
  Caja</Link>
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