import React from 'react';
import '../assets/main.css';
import Menu from './Menu'
import SearchBar from './SearchBar'
import { ReactComponent as Logo} from "../assets/svg/infinity.svg"



function Header({headertitle}){

return(
<>
    <div className=" sticky flex mb-4 top-0 bg-white py-4 px-1 shadow-md"  >
    
    <div className="w-1/3 ml-3">
    
<Menu/>

    </div>

    
<h1 className="w-1/3  " > 

 <span className="text-md text-teal-500 w-full  "> <Logo className="inline-block" /> {headertitle} </span>



</h1>


<div className="w-1/3"> 

</div>



     </div>

<SearchBar/>
</>

)


}


export default Header;