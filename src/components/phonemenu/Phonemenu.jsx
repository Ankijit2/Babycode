import React from 'react'
import './phonemenu.css'
import { menudata } from '../../javascript/data'

function Phonemenu() {
  return (
    <div className='sticky bottom-0 flex justify-between items-center bg-white px-4'>
        {menudata.map((item,index)=>{
            return(
                <div className='grid place-items-center sm:text-base text-sm hover:text-blue-600' key={index}>
                <span className="material-symbols-outlined text-2xl px-2 my-1" >
                {item.icon}
              </span>
              <div className=''>{item.name}</div>
              </div>
            )
        })}
    </div>
  )
}

export default Phonemenu