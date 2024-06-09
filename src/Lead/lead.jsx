import React,{useEffect,useState} from 'react';
import { LEAD_STATUS } from '../Data/leadstatus';

import axios from 'axios';
import { Base_Url } from '../../config/api';
import { Navigate, useNavigate } from 'react-router-dom';
import EditLead from './EditLead';









function Lead() {
  
    const [lead, setLead] = useState([]);
    const [update,setUpdate]=useState(-1);
    const navigate=useNavigate();
    

    useEffect(() => {
         axios.get(`${Base_Url}/ad/getlead`)
            .then(res => {
                
                 setLead([lead,...res.data]);
                console.log("Use data:", res.data);
                localStorage.setItem("data",JSON.stringify(res.data));
            })
    }, []);
    
    
    const updateLead = (id) => {
      const current= lead.filter( (leads) => leads.leadid=== id)
      setLead[{...current}]
      console.log(current);
      navigate('/update')
  }
   const deleteLead=(id) =>{
     axios.delete(`${Base_Url}/ad/del/${id}`)
     
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
                <th >LeadId</th>
                <th>LeadName</th>
                <th>Lead_email</th>
                <th>Lead_phone</th>
                <th>LeadStatus</th>
                <th></th>
                




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
    lead.map((item, index) => (
                 update===item._id?<EditLead item={item} lead={lead} set={setLead} handleEdit={handleEdit}  />:
                <tr  className="table" key={index}> 
                <td>{item._id}</td>
                    <td >{item.leadid}</td>
                    <td>{item.lead_name}</td>
                    <td>{item.lead_email}</td>
                    <td>{item.lead_phone}</td>
                    
                    <td>{item.lead_status}</td>
                 <td><button type="submit" className='btn btn-success'  onClick={ () => deleteLead(item._id)}>Delete</button></td>

                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
  )
}

export default Lead;