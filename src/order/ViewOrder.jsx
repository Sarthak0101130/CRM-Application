import React,{useEffect,useState} from 'react';
import { LEAD_STATUS } from '../Data/leadstatus';

import axios from 'axios';
import { Base_Url } from '../../config/api';
import { Navigate, useNavigate } from 'react-router-dom';









function ViewOrder() {
  
    const [order, setOrder] = useState([]);
    const navigate=useNavigate();
    

    useEffect(() => {
         axios.get(`${Base_Url}/order/getorders`)
            .then(res => {
                
                  setOrder([order,...res.data.orderHist]);
                console.log("Use data:", res.data.orderHist);
                localStorage.setItem("data",JSON.stringify(res.data));
            })
    }, []);
    
    
 


  return (
    <div >
 
    
        <div className="card" style={{width: 36+"rem"}}>
  <div className="card-header d-flex align-items-center justify-content-center  ">
    OrderDetails
  </div>
  <div className='d-flex align-items-center justify-content-center'>
  {
  order.map((item, index) => (
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.orderID}</li>
    <li className="list-group-item">{item.order_status}</li>
    <li className="list-group-item">{item.order_date}</li>
  </ul>
  ))}
  </div>
</div>
            
           
     

  
    
    </div>
  )
}

export default ViewOrder;