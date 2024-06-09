import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../config/api';
import { MEET_STATUS } from './Data/meetingstatus'; 








function Meeting() {   
  
   
    const [newmeet, setNewMeet] =  useState({
     name:"",
      email:"",
       time: "",
        date: "",
       subject: "",
       meet_status: "",
      
     
    });
    const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
       
        

        const meet= {...newmeet,meet_status:MEET_STATUS.open }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/mag/add`, 
        meet, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewMeet({
                name:"",
                email:"",
                 time: "",
                  date: "",
                 subject: "",
                
                
                
                
            })
            
        }
        else{
            window.alert('Error occured')
        }
      }
      catch(error){
        console.log(error);
  
      
    }
}

    // useEffect(() => {
    //      axios.post(`${Base_Url}/ad/createRequest`)
    //         .then(res => {
                
    //             setOrder([order,...res.data.ordersList]);
    //             console.log("Use data:",order);
    //             localStorage.setItem("data",JSON.stringify(res.data));
    //         })
    // }, []);


  return (
    <div>
    <div>
    <section className="vh-100 vw-100 pt-5 mt-5" >
      <div className="d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 justify-content-center align-items-center   ">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h2 className="text-uppercase text-center mb-4">
                Schedule Meeting 
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter name"
                        value={newmeet.name}
                        onChange={(e) => setNewMeet({...newmeet, name: e.target.value})}

                      
                      />
                     
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Enter the email"
                        value={newmeet.email}
                        onChange={(e) => setNewMeet({...newmeet, email: e.target.value})}
                        
                      />
                     
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="time"
                        className="form-control"
                        placeholder="Enter the time of  meeting"
                        value={newmeet.time}

                        onChange={(e) => setNewMeet({...newmeet, time: e.target.value})}


                      
                      />
                     
                    </div>

                   
                    <div className="form-outline mb-2">
                      <input
                        type="date"
                        id="product_stock"
                        className="form-control"
                        placeholder="Enter the date of meeting"
                        value={newmeet.date}
                        onChange={(e) => setNewMeet({...newmeet, date: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Enter the subject of the meeting"
                        value={newmeet.subject}
                        onChange={(e) => setNewMeet({...newmeet, subject: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="product_status"
                        className="form-control"
                        placeholder="Enter the product_status"
                        value={newmeet.meet_status}
                        onChange={(e) => setNewMeet({...newmeet, meet_status: e.target.value})}
                       
                      />
                      </div>
                      
                    

                    {/* <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="APPROACHED">APPROACHED"</option>
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
    
    </div>
  )
}

export default Meeting;