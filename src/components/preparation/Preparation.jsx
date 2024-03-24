import React from 'react'
import Prepareitems from '../Prepareitems/Prepareitems'
import Contentcards from '../Contentcards/Contentcards'



function preparation() {
    return (
        <div className='mt-14'>
            <h1 className='mb-6 text-xl font-bold md:'>Prepare with ease</h1>
            <div className='flex lg:gap-10 md:gap-5'>
                <Prepareitems/>
                <Contentcards/>
            </div>
        </div>
    )
}

export default preparation