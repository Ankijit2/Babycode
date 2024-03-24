import React from 'react'
import { exploreitem } from '../../javascript/data'
import './Sidemenucard.css'

function Sidemenucard() {
  return (
    <div className='feature md:mx-3 mx-auto aspect-video rounded-lg w-11/12  py-2 md:mt-28'>
    <h1 className='text-[#1054d2] text-xl font-semibold px-4'>Explore premium features with ease!</h1>
    <ul className='mt-3 px-4'>
      {exploreitem.map((item, index) => {
        return (
          <li key={index} className='text-xs py-1 relative text-black'>

            {item}
          </li>
        )
      })}

    </ul>
    <div className='w-full flex md:flex-row flex-col items-end justify-end mt-[-20px] md:justify-between md:items-center text-black text-xs md:mt-4 '>
      <p className='ml-4'>only @ ₹299</p>
      <button className='bg-[#1054d2] text-white w-24 h-8 rounded-s-full flex justify-center items-center gap-3'>
        <p>Buy Now</p>
        <img src="./menucircle.png" alt="" className='h-4' />
      </button>

    </div>

  </div>
  )
}

export default Sidemenucard