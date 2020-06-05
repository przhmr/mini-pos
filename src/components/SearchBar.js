import React from 'react';
import '../assets/main.css';
import { ReactComponent as Lupa} from "../assets/svg/lupa.svg"




function SearchBar(){

return (

    <div className="shadow flex">
    <input className="w-full rounded p-2" type="text" placeholder="Buscar..."></input>
    <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
        <Lupa/>
    </button>
    </div>
  
)


}


export default SearchBar;

