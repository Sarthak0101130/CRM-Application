import React,{useEffect,useState} from 'react';
import { MEET_STATUS } from '../Data/meetingstatus';

import axios from 'axios';
import { Base_Url } from '../../config/api';
import { Navigate, useNavigate } from 'react-router-dom';










function MeetingDetail() {
  
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
    <div className=' vh-100 vw-100 justify-content-center mt-5 pt-2'>
    <h2 className="bg-warning">LeadDetails</h2>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  {/* <button className="btn btn-primary me-md-2" type="button" onClick={()=>navigate("/addlead")} >ADD LEAD</button> */}
  
</div>
 
    <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
              <th>ID</th>
                <th >MeetId</th>
                <th>Name</th>
                <th>email</th>
                <th>time</th>
                <th>Date</th>
                <th>Subject</th>
                <th>MeetingStatus</th>
                
                




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
    meet.map((item, index) => (
                <tr  className="table" key={index}> 
                <td>{item._id}</td>
                    <td >{item.meet_id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.time}</td>
                    <td>{item.date}</td>
                    <td>{item.subject}</td>
                    
                    <td>{item.meet_status}</td>

                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
  )
}

export default MeetingDetail;