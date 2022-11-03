import React from 'react'
import RightCards from './RightCards'
import LeftCards from './LeftCards'

export default function Article() {
    let Arr = ['Mobile Recharge','DTH Recharge','Gas Booking','Movie Tickets']
  return (
    <div>
        <div className="row mt-4">
            <div className='col-7 '>
                {Arr.map((x)=>{
                    return(
            <LeftCards Heading={x}/>    
               ) })}
             
            </div>
            <div className='col'><RightCards/></div>
        </div>
    </div>
  )
}
