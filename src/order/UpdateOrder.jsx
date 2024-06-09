import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';
import { ORDER_STATUS } from '../Data/order_status';
import ViewOrder from './ViewOrder';







function UpdateOrder() {   
    const [order, setOrder] = useState([]);
    const [open,setOpen]=useState(true);
    const [neworder, setNewOrder] =  useState({
       
        orderID:"",
        order_status:""
        
    })
    const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
         const order = {...neworder }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/order/update-order`, 
        order,config) 
        console.log(response);
        if(response.status === 200){
            //console.log(response)
          
            setNewOrder(neworder,...response)
               
            
        }
        else{
            window.alert('Error occured')
        }
      }
      catch(error){
        console.log(error);
  
        if( error.response.status === 403) {
          window.alert("Session expired. Login again to continue")
          navigate('/')
      }
    }
}
    return(
        <div >
             <form onSubmit={handleSubmit}>
             
             <div className="vw-100  d-flex align-items-center justify-content-center">
                      <input
                        type="text"
                        id="cust_phone"
                        className="form-control"
                        placeholder="Enter orderID"
                        value={neworder.orderID}
                        onChange={(e) => setNewOrder({...neworder, orderID: e.target.value})}
                       
                      />
                      
                      <select
  className="form-select"
  aria-label="Default select example"
  value={neworder.order_status}
  onChange={(e) => setNewOrder({ ...neworder, order_status: e.target.value })}
>
  <option value="">Open this select menu</option>
  <option value={ORDER_STATUS.Placed}>PLACED</option>
  <option value={ORDER_STATUS.Shipped}>SHIPPED</option>
  <option value={ORDER_STATUS.Delivered}>DELIVERED</option>
  <option value={ORDER_STATUS.Cancelled}>CANCELLED</option>
</select>



                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                      >
                       submit
                      </button>
                    </div>
                    <div className='container d-flex align-items-center justify-content-center mt-5'>
                    <ViewOrder/>
                    </div>
</form>
</div>
    )
}


export default UpdateOrder;