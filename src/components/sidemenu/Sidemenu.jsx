import React from 'react'
import './sidemenu.css'
import { menudata,exploreitem } from '../../javascript/data.js'
import Sidemenucard from '../Sidemenucard/Sidemenucard.jsx'

function Sidemenu({ basis }) {



  return (

    <nav className={`bg-[#1054d2] h-screen w-60 text-white flex flex-col items-center ${basis} sticky top-0 left-0 `}>
      <div id="logo " className='flex gap-3 pt-4 mb-10 items-center px-3 w-11/12'>
        <img src="./logo.svg" alt="" className='h-10 w-10' />
        <span className='text-xl'>BabyCode</span>
      </div>

      <ul className='w-9/12'>
        {menudata.map((item, index) => {
          return (
            <li key={index} className='menuitem flex  gap-3 items-center '>
              <span className="material-symbols-outlined text-2xl px-2 my-2">
                {item.icon}
              </span>
              <p>{item.name}</p>
            </li>
          )
        })}
      </ul>

   <Sidemenucard/>
      <button className='flex w-11/12 gap-3 my-5 items-center justify-center'>
        <span className="material-symbols-outlined text-2xl px-2 my-2">
          logout
        </span>
        <p>Logout</p>
      </button>
    </nav>
  )
}

export default Sidemenu