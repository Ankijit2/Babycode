import React from 'react'
import { preparaton } from '../../javascript/data.js'
import './prepareitems.css'
function Prepareitems() {
    
  return (
    <div className='grid md:grid-cols-4 grid-cols-3 gap-4  lg:basis-9/12 md:basis-8/12'>

                    {preparaton.map((item, index) => {
                        return (
                            <div key={index} className='flex gap-3 flex-col items-center prepareitems'>
                                <img src={item.img} alt="" className='md:h-28 h-24' />
                                <p className='text-center text-sm font-semibold'>{item.text}</p>
                            </div>
                        )
                    })}

                </div>
  )
}

export default Prepareitems