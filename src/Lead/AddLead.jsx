import React,{useEffect,useState} from 'react';
import { LEAD_STATUS } from '../Data/leadstatus';


import axios from 'axios';
import { Base_Url } from '../../config/api';
import { useNavigate } from 'react-router-dom';







function ADDLead() {
  
    const [lead, setLead] = useState([]);
    const [filter,setFilter]=useState('');
    const [newLead, setNewLead] =  useState({
        lead_id: "",
        lead_name : "",
        lead_status : "",
        lead_email: "",
        lead_phone: "",
        
    });
    const navigate = useNavigate;
    const [open, setOpen] = useState(false);
    const handleClose = () => { setOpen(false)}
    
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
        const d = new Date();
        let year = d.getFullYear()
        let month = d.getMonth()+1
        let dt = d.getDate()
        const date1 = String(year) + 
                        ( month<10 ? '0'+String(month) : String(month)) + 
                        ( dt<10 ? '0'+String(dt) : String(dt)) 

        const lead = {...newLead, 
            lead_status : LEAD_STATUS.Approached }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/ad/createLead`, 
        lead, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
            handleClose();
            setNewLead({
                lead_id: "",
                lead_name : "",
                lead_email: "",
                lead_phone: "",
               
                
                
            })
            
        }
        else{
            window.alert('Error occured')
        }
      }
      catch(error){
        console.log(error);
        handleClose()
        if( error.response.status === 403) {
          window.alert("Session expired. Login again to continue")
          navigate('/')
      }
    }
}

return(  <div>
    <section className="vh-100 vw-100" >
      <div className="d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 justify-content-center align-items-center   ">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h2 className="text-uppercase text-center mb-4">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="lead_name"
                        className="form-control"
                        placeholder="Enter lead name"
                        value={newLead.lead_name}

                        onChange={(e) => setNewLead({...newLead, lead_name: e.target.value})}

                      
                      />
                     
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        id="lead_email"
                        className="form-control"
                        placeholder="Enter lead email"
                        value={newLead.lead_email}
                        onChange={(e) => setNewLead({...newLead, lead_email: e.target.value})}
                        
                      />
                     
                    </div>

                   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="lead_phone"
                        className="form-control"
                        placeholder="Enter lead phonenumber"
                        value={newLead.lead_phone}
                        onChange={(e) => setNewLead({...newLead, lead_phone: e.target.value})}
                       
                      />
                      
                    </div>
                    {/* <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="APPROACHED">APPROACHED</option>
  <option value="NEGOTIATION">NEGOTIATION</option>
  <option value="EARNED">EARNED</option>
  <option value=" LOST">
    LOST
  </option>
</select> */}

                  

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                      >
                       submit
                      </button>
                    </div>

                  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
    </div>
    )
}


export default ADDLead;