import React from 'react'

function Contentcards() {
    return (
        <div className='flex flex-col gap-6 lg:basis-3/12 md:basis-4/12'>
            <div className='flex gap-3  items-center  bg-white py-2 lg:px-10 px-3 rounded-b-xl'>
                <img src="./youtube.png" alt="" className='h-8' />
                <p>App video guide</p>
            </div>
            <div className='flex flex-col gap-3 bg-white py-5 px-5 rounded-b-xl'>
                <h1 className='text-xl font-bold'>Practice mock test</h1>
                <p className=''>Get the authentic IELTS exam experience with all four of our modules covered!</p>
                <button className='bg-[#1054d2] text-white  h-8 rounded-full'>Start</button>
            </div>
        </div>
    )
}

export default Contentcards