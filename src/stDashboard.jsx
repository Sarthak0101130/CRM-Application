import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";




function StDashboard() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('loggedInUser');
    navigate("/");
  }
  return (
    <div>
      
      
        <nav className="navbar fixed-top navbar-light bg-primary  ">
        <div className="container-fluid"> 
    <nav className="navbar navbar-light" >
    <nav className="navbar navbar-expand-lg navbar-light bg-primary py-0.5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><FaHome style={{color: 'white', fontSize: '20px'} }/> <Link  className='text-white' to="/s">Dashboard</Link></a>
        </li>
        </ul>
    {/* </div>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav"> */}
    <div className="nav-item dropdown bg-primary">

          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaCartArrowDown style={{color: 'white', fontSize: '20px'} }/>    Product Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/getproducts">viewProducts</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/addproduct">product Creation</Link></a></li>
          </ul>
        </div>
    {/* </div> */}
    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
    <div className="nav-item dropdown bg-primary"> 
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <AiOutlineTeam style={{color: 'white', fontSize: '20px'} }/> Lead Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/addlead">LeadDetails</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link  className='text-white' to="/update">Editlead</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link  className='text-white' to="/lead">Viewlead</Link></a></li> 
            <li><a className="dropdown-item bg-primary" href="#"><Link  className='text-white' to="/updatemeet">meetingstatusupdate</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link  className='text-white' to="/allmeet">ALLMeetingDetails</Link></a></li>


          </ul>
        </div>
    {/* </div> */}
    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
    <div className="nav-item dropdown bg-primary">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaTasks style={{color: 'white', fontSize: '20px'} }/>  Task Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/getreq">RequestDetails</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/request">Ticket Creation</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/updateorder">updateOrderStatus</Link></a></li> 
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/cancelreq">cancelRequest</Link></a></li> 
       

          </ul>
        </div>
    </div>

    {/* <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav"> */}
    <div className="nav-item dropdown bg-primary">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            contact Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item bg-primary" href="#"><Link  className='text-white' to="/emp">employeeDetails</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/contact">contactdetails</Link></a></li>
            <li><a className="dropdown-item bg-primary" href="#"><Link className='text-white' to="/createcontact">addcontact</Link></a></li> 
          </ul>
        </div>
    {/* </div> */}
    
 
    </div>
   
         
  
    {/* </div> */}
  {/* </div> */}
  
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

)}

export  default StDashboard;