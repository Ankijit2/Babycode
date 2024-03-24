import React from 'react'

function Childcard() {
    const childcardstyle = {
        background: "url('./childcard.png') no-repeat center/cover"
    }
    return (
        <div id='childcard' style={childcardstyle} className='lg:basis-[40%] my-5 md:h-auto h-52   rounded-2xl text-white flex flex-col justify-center px-6'>
            <h2 className='lg:text-4xl md:text-2xl font-bold text-center'>One share can save many lives</h2>
            <p className='text-center mt-2'>Your one share can unlock the word of education for unprevilaged</p>
            <button className='bg-white text-black w-40 h-8 self-center font-semibold rounded-full flex justify-center items-center gap-3 mt-4'>Share app</button>
        </div>
    )
}

export default Childcard