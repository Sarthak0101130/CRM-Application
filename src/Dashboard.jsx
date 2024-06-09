import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <nav className="navbar fixed-top  bg-primary  ">
        <div className="container-fluid"> 
    <nav className="navbar navbar-dark " >
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link bg-primary text-white  active" aria-current="page" href="#"><Link className='text-white' to="/register">Customer Registeration</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link bg-primary active" aria-current="page" href="#"><Link className='text-white' to="/user/register">Staff Registeration</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        </ul>
    </div>
  
       
         
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  </nav>
  </div>
</nav>
<img src="https://stitchcraftmarketing.com/wp-content/uploads/2017/10/SCMCRM.jpg" className='img-fluid' alt='500*200'/>
  </div>
  )
}

export default Dashboard