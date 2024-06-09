import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';
import { MEET_STATUS } from '../Data/meetingstatus';

import GetMeet from './GetMeet';







function UpdateMeet() {   
    
    const [open,setOpen]=useState(true);
    const [newmeet, setNewMeet] =  useState({
       
        meet_id:"",
        meet_status:""
        
    })
    const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 

         const meet = {...newmeet }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/mag/update`, 
        meet,config) 
        console.log(response);
        if(response.status === 200){
            //console.log(response)
          
            setNewMeet({newmeet,...response.config.data});
               
            
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
                        id="meetid"
                        className="form-control"
                        placeholder="Enter meetID"
                        value={newmeet.meet_id}
                        onChange={(e) => setNewMeet({...newmeet, meet_id: e.target.value})}
                       
                      />
                      
                      <select
  className="form-select"
  aria-label="Default select example"
  value={newmeet.meet_status}
  onChange={(e) => setNewMeet({ ...newmeet, meet_status: e.target.value })}
>
  <option value="">Open this select menu</option>
  <option value={MEET_STATUS.open}>OPEN</option>
  <option value={MEET_STATUS.attended}>ATTENDED</option>
  <option value={MEET_STATUS.cancelled}>CANCELLED</option>
</select>



                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                      >
                       submit
                      </button>
                    </div>
                    <div className='container d-flex align-items-center justify-content-center mt-5'>
                    <GetMeet/>
                    </div>
</form>
</div>
    )
}


export default UpdateMeet;