import React from "react"


 function ItemAddModal(){
    const [showModal, setShowModal] = React.useState(false);
return(

    <>
    
<div className="flex items-center justify-between px-3  ">
    <button onClick={() => setShowModal(true)} className="px-3 py-1   bg-teal-500 w-full text-sm text-center text-white text-bold rounded-full">Agregar</button>
    </div>
{showModal ? (<>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">
              Articulo Seleccionado
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-gray-600 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
              <div className="shadow flex">
    <input className="w-full rounded p-2" type="text" placeholder="Search..."></input>
    <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
        <i className="material-icons">search</i>
    </button>
    </div>
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={() => setShowModal(false)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>) : null}
    
</>


)


}

export default ItemAddModal;