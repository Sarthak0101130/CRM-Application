import React,{useEffect,useState} from 'react';
import { MEET_STATUS } from '../Data/meetingstatus';

import axios from 'axios';
import { Base_Url } from '../../config/api';
import { Navigate, useNavigate } from 'react-router-dom';










function GetMeet() {
  
    const [meet, setMeet] = useState([]);
    const [update,setUpdate]=useState(-1);
    const navigate=useNavigate();
    

    useEffect(() => {
         axios.get(`${Base_Url}/mag/get`)
            .then(res => {
                
                 setMeet([meet,...res.data]);
                console.log("Use data:", res.data);
                localStorage.setItem("data",JSON.stringify(res.data));
            })
    }, []);
    
  
   const deleteLead=(id) =>{
     axios.delete(`${Base_Url}/mag/get`)
     
     const removeUser=lead.filter((leads)=>leads._id!=id);
     console.log("hi",removeUser);
     setLead(removeUser);

   }
  

  return (
    <div className="card " style={{width: 36+"rem"}}>
         <div className="card-header d-flex align-items-center justify-content-center  ">
    MeetingDetails
  </div>
    <div className='d-flex align-items-center justify-content-center' >
       
 {
  meet.map((item, index) => (
    
        
//   <div className="card-header d-flex align-items-center justify-content-center  ">
    <ul className="list-group list-group-flush">
    <li className="list-group-item">MeetingID:{item.meet_id}</li>
    <li className="list-group-item">MeetingStatus:{item.meet_status}</li>
    <li className="list-group-item">MeetingDate:{item.date}</li>
  </ul>
 
//   </div>
 

))}
</div>
</div>
  )
}

export default GetMeet;