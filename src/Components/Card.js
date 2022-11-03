import React from 'react'

export default function Card({Heading}) {
  return (
    <div>
         <div className='ms-4'>
            <h5 className="card-title">{Heading}</h5>
            <div className="">
              <div className="d-flex " style={{ fontSize: "12px" }}>
                <div className="pe-2">16 August 2022</div>
                <span> | </span>
                <div className="px-2">Postpaid</div>
                <span> | </span>
                <div className="px-2">Postpaid</div>
              </div>
            </div>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.This is a wider cardThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
    </div>
  )
}
