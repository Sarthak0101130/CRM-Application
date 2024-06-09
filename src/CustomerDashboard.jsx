import React from 'react'

import ViewProduct from './ViewProduct';
import { Link,useNavigate } from 'react-router-dom'

function CustomerDashboard() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('loggedin');
    navigate("/");
  }
  return (
    <div>
        <nav className="navbar fixed-top navbar-light bg-primary p-2 text-white bg-opacity-75 ">
        <div className="container-fluid"> 
    <nav className="navbar navbar-light" >
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav  justify-content-end">
  <li className="nav-item">
    <a className="nav-link  active" aria-current="page" href="#"><Link className='text-white' to="/getproducts">viewproduct</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><Link className="text-white" to="/getmeet">meeting details</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><Link className="text-white" to="/meet">schedule meeting</Link></a>
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
  <ul class="nav justify-content-end md-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" ><button className='btn btn-primary me-md-2' onClick={handleLogout}>logout</button></a>
  </li>
  </ul>
  </div>
 
</nav>

</div>

  )
}

export default CustomerDashboard