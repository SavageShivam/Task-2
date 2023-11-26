import React from 'react'
import { BsTextLeft } from "react-icons/bs";

function Nav() {
  return (
    <>
    <div className="navbar bg-dark text-white">
        <div className="nav-data d-flex">
            <div>
                <button className='btn text-white p-0 '>
                <BsTextLeft/>
                </button>
            </div>
            <div className='ms-3'>
                <h5>Notes</h5>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Nav