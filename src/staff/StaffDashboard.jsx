import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import PieChart from '../chart/PieChart';
import BarChart from '../chart/BarChart';
import { CardLists } from '../chart/CardLists';


function StaffDashboard() {
  const navigate=useNavigate();
 
  return (
    <div>
      
        {/* <nav className="navbar fixed-top navbar-light  bg-primaryt">
        <div className="container-fluid"> 
    <nav className="navbar navbar-light" >
    <nav className="navbar navbar-expand-lg navbar-light  bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/staf">Dashboard</Link></a>
        </li>
        </ul>
    </div>
   
    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/getproducts">viewProducts</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/addlead">LeadDetails</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/getreq">Ticket History</Link></a>
        </li>
        </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link  to="/request">Ticket Creation</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/update">Editlead</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/updateorder">updateOrderStatus</Link></a>
        </li>
        </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/addproduct">product Creation</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/emp">employeeDetails</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/cancelreq">cancelRequest</Link></a>
        </li>
        </ul>
    </div>
    
    </div>
       
         
  
    </div>
  </div>
  </div>
</nav>
  </nav> */}
  {/* </div>
</nav> */}
<div className="row">
           <CardLists/>
                <div className="col-xl-8 col-lg-7 mt-5" >
                    <div className="card shadow mb-4 ">
                        <div className="card-header py-3 ">
                            <h6 className="m-0 font-weight-bold text-primary ">New and Existing Customer</h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-bar  ">
                                <BarChart />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-7 mt-5" >
                    <div className="card shadow mb-4 ">
                        <div className="card-header py-3 ">
                            <h6 className="m-0 font-weight-bold text-primary ">Monthly and Yearly OD</h6>
                        </div>
                        <div className="card-body ">
                             <div className="chart-bar"  >
                                <PieChart />
                            </div> 

                        </div>
                    </div>

                </div>

            </div>
        </div>
  

  )
}

export default StaffDashboard;