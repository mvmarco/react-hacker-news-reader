import React, { useEffect,useState } from "react";
import './modal.css'
export default function Modal({setShowModal, kids}){

  return(
    <div className='modalContainer'>
      <ul className='modalBody'>
        <div className='modalClose' onClick={()=>setShowModal(false)}>X</div>
        {kids.map(kid=>
          <li>{kid.text}</li>  
        )}
      </ul>
    </div>
  )
}