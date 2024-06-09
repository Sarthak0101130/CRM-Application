import React,{useEffect,useState} from 'react';
import { LEAD_STATUS } from '../Data/leadstatus';

import axios from 'axios';
import { Base_Url } from '../../config/api';
import { Navigate, useNavigate } from 'react-router-dom';









function CancelRequest() {
  
    const [request, setRequest] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios.get(`${Base_Url}/ad/get`)
           .then(res => {
               
                setRequest([request,...res.data]);
               console.log("Use data:", res.data);
               localStorage.setItem("data",JSON.stringify(res.data));
           })
        }, []);
    

    const deleteRequest=(id)=>{
         axios.delete(`${Base_Url}/ad/delete/${id}`)
            .then(res => {
                console.log(res.data);
                const removeUser=request.filter((user)=>user._id!=id);
                setRequest(removeUser)
              
            })
        }
    
    
    const updateRequest = (id) => {
      const current= request.filter( (reqs) => reqs._id=== id)
      setRequest[{...current}]
      console.log(current);
      navigate('/update')
  }
    


  return (
    <div className='vh-100 mt-5 pt-2'>
     {/* <div className=" justify-content-center ">
  <button className="btn btn-primary " type="button" onClick={()=>navigate("/request")} >ADD NEWREQUEST</button>
  
 </div> */}
    <table className='table vw-100 mt-5 pt-2 '>
       <thead className='table-dark'>
          <tr>
                <th >RequestID</th>
                <th>title</th>
                <th>orderid</th>
                <th>customerEmail</th>
                <th>customerPhone</th>
                <th>request_date</th>
                <th>request_status</th>
                <th>request_engg</th>
                




                 <th></th>
             </tr>
        </thead>
        <tbody>
            {
    request.map((item, index) => (
                // update===item.id?<EditList item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                <tr  className="table" key={index}> 
                    <td >{item.requestID}</td>
                    <td>{item.title}</td>
                    <td>{item.orderId}</td>
                    <td>{item.cust_email}</td>
                    
                    <td>{item.cust_phone}</td>
                    <td>{item.request_date}</td>
                    <td>{item.request_status}</td>
                    <td>{item.request_status}</td>
                    <td><button onClick={()=>deleteRequest(item._id)}>delete</button></td>
                    


                </tr>
            ))}
           
        </tbody>
    </table>

    </div>
  
    
    
  )
}

export default CancelRequest;