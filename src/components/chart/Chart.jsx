import React from 'react'
import { Chart as ChartJS} from 'chart.js/auto'

import { Line } from 'react-chartjs-2'

const xArray = ['16feb', '17feb', '18feb', '19feb', '20feb', '21feb', '22feb'];
const yArray = ['5.0', '6.0', '5.5', '6.5', '6.0', '8.0', '9.5', '11.0',];

function Chart({ basis }) {
 


  
  return (
    <div className={`${basis} bg-white md:ml-3 md:p-5 rounded-xl flex flex-col justify-center`}>
      <div className={`md:hidden block font-bold py-4 px-4 text-lg`}>Your progress Summary</div>
      <div className='flex md:flex-col flex-col-reverse gap-3'>
        <div className='bg-yellow-50 p-4 mb-5 md:text-lg text-xs font-bold rounded-lg'><span className='text-sky-500 mr-2'>Wow!</span>You are about to reach your targeted band</div>
        <Line
          data={{
            labels: xArray,
            datasets: [

              {
                label: '',
                data: yArray,
                backgroundColor: '#1054d2',
                borderColor: '#1054d2',
                lineTension: 0.4,

              }
            ],

          }}
          tension={1}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            scales: {
              x: {

                grid: {
                  display: false
                }
              },

            },
            plugins: {
              legend: { display: false },

            }


          }}

        />
      </div>
    </div>
  )
}

export default Chart