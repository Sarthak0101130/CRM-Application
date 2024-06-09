import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';
import { REQUEST_STATUS } from '../Data/request';

function ALLReq() {


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

        return(
            <div>
    <h2 className="bg-warning">LeadDetails</h2>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary me-md-2" type="button" onClick={()=>navigate("/request")} >ADD LEAD</button>
  
</div>
 
    <table className='table table-hover'>
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
                    
                    <td>{item.lead_status}</td>
                 <td><button type="submit" className='btn btn-success'  onClick={ () => updateLead(item.leadid)}>Edit</button></td>
             
                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
               
                
              )
            }
            
            export default ALLReq
            