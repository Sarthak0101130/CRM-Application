import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';
import { LEAD_STATUS } from '../Data/leadstatus';








function EditLead() {   
    const [open,setOpen]=useState(true);
    const [newlead, setNewlead] =  useState({
       
        leadid:"",
        lead_status:""
        
    })
    const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
         const lead = {...newlead }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.patch(`${Base_Url}/ad/updateLead`, 
        lead,config) 
        console.log(response);
        if(response.status === 200){
            //console.log(response)
          
            setNewlead({newlead,...response})
               
            
        }
        else{
            window.alert('Error occured')
        }
      }
      catch(error){
        console.log(error);
  
      //   if( error.response.status === 403) {
      //     window.alert("Session expired. Login again to continue")
      //     navigate('/')
      // }
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
                        placeholder="Enter leadID"
                        value={newlead.leadid}
                        onChange={(e) => setNewlead({...newlead, leadid: e.target.value})}
                       
                      />
                      
                      <select
  className="form-select"
  aria-label="Default select example"
  value={newlead.lead_status}
  onChange={(e) => setNewlead({ ...newlead, lead_status: e.target.value })}
>
  <option value="">Open this select menu</option>
  <option value={LEAD_STATUS.Approached}>PLACED</option>
  <option value={LEAD_STATUS.Negotiation}>NEGOTIATION</option>
  <option value={LEAD_STATUS.earned}>EARNED</option>
  <option value={LEAD_STATUS.Lost}>LOST</option>
</select>



                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                      >
                       submit
                      </button>
                    </div>
                    <div className='container d-flex align-items-center justify-content-center mt-5'>
                    
                    </div>
</form>
</div>
    )
}


export default EditLead;