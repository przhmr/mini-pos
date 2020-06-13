import React from 'react';
import '../assets/main.css';

import Articulos from "./Articulos"
import Movimientos from "./Movimientos"
import Caja from "./Caja"
import Reportes from "./Reportes"
import { Route, Switch } from "react-router-dom";

function Content(){
  
return (
<>

<div className="flex-grow">

<Switch>
        <Route exact path="/" component={Articulos} />
        <Route  path="/movimientos" component={Movimientos} />
        <Route  path="/caja" component={Caja} />
        <Route  path="/reportes" component={Reportes} />
      </Switch>



  
  </div>
</>
)


}




export default Content;

