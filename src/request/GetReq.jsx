
import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';
import { REQUEST_STATUS } from '../Data/request';

function GetReq() {


    const [request, setRequest] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');
    const navigate=useNavigate();
    const attendRequest = async(req) => {
        const ok = window.confirm("Do you want to attend request") 
        if(ok) {
            try{
                  const token = localStorage.getItem('tokenAuth')
                  const email = localStorage.getItem('email')
                  const role = localStorage.getItem('role')

                  //console.log(token)
                  const config = { headers : {"x-auth-token" : token}}

                  const response = await axios.post(`${Base_Url}/ad/update/:id`, { requestID : req.requestID, request_status: REQUEST_STATUS.Assigned,
                   request_engg: email}, config,role)
                  console.log(response) 
                  if(response.status === 200){
                   
                      window.alert(" request assigned")
                      navigate(`/staf`)
                  }
                  else {
                      
                  }
              }
              catch(error){ 
                  console.log("error occured", error)
                 
                  if( error.response.status === 403) {
                    window.alert("Session expired. Login again to continue")
                    navigate('/')
                }
                  return error
              }
        }

    }
    const handleStatusChange = (event) => {
      setSelectedStatus(event.target.value);
    };

    useEffect(() => {
        axios.get(`${Base_Url}/ad/get`)
           .then(res => {
               
                setRequest([request,...res.data]);
               console.log("Use data:", res.data);
               localStorage.setItem("data",JSON.stringify(res.data));
           })
        }, []);
        const filteredRequests = selectedStatus
        ? request.filter((item) => item.request_status === selectedStatus)
        : request;

  return (
  
 <div className=' row mt-3 pt-5'>
   <div className=' d-flex align-items-center justify-content-center mt-5 pt-5'>
        <label htmlFor="status">Request Status:</label>
        <select id="status" value={selectedStatus} onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="PENDING">Pending</option>
          <option value="ASSIGNED">Assigned</option>
          <option value="RESOLVED">Resolved</option>
        </select>
      </div>

{
   filteredRequests.map((item, index) => (
        <div className='d-flex align-items-center justify-content-center '>
            <div className="card p-3 mb-2 bg-dark-subtle text-emphasis-dark" key={item.requestID} style={{width:36+"rem"}}>
         
            <div className="card-body p-3 mb-2 bg-dark-subtle text-emphasis-dark">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">status:{item.request_status}</p>
            </div>
            <ul className="list-group list-group-flush p-3 mb-2 bg-dark-subtle text-emphasis-dark">
              <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">RequestID:{item.requestID}</li>
              <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">orderID:{item.orderID}</li>
              <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">engineer:{item.request_engg}</li>
            </ul>
            <div className="card-body p-3 mb-2 bg-dark-subtle text-emphasis-dark">
   
   
            <button type="button" className="btn btn-outline-primary" onClick={() =>{attendRequest(item)}}>add</button>
            </div>
</div>
</div>
))}
</div>






//   
   
    
  )
}

export default GetReq
