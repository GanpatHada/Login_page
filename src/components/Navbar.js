import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    return (
        <nav className='d-flex fixed-top align-items-center justify-content-between px-2 container-fluid py-2 bg-light' style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div className='fw-bold fs-3' style={{color:"#16395c"}}>
                ATools<span style={{color:"#f7840e"}}>.</span>
            </div>
            <div>
                <button className='text-white py-2 ' style={{border:"none",background:"#16395c",minWidth:"10vw",borderRadius:"5px"}}>
                    Start Free Trial
                </button>
                <button className='ms-2 text-white py-2' style={{border:"none",background:'#f7840e',width:"10vw",borderRadius:"5px"}}>
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar