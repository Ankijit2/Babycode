import React from 'react'
import Chart from '../chart/Chart'

import Preparation from '../preparation/Preparation'
import Childcard from '../Childcard/Childcard'



function Content({ basis }) {
  return (
    <div className={`flex flex-col ${basis} bg-slate-100 lg:px-7 md:px-3`}>
      <div className='py-5 flex justify-end'>
        <img src="./profile.png" alt="" className='h-8 w-8' />
      </div>
      <div className='py-5 pl-10 text-xl font-medium bg-slate-200'>
        Your Progress summary
      </div>
      <div className='flex mt-6 gap-10'>


        <Chart basis='lg:basis-[60%]' />


        <Childcard/>
      </div>

      <Preparation/>
    </div>
  )
}

export default Content