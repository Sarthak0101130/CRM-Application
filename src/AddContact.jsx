import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../config/api';
import { PRODUCT_STATUS } from './Data/Product'; 
import { PRODUCT_TYPE } from './Data/producttypes';







function AddContact() {   
  
    const [open,setOpen]=useState(true);
    const [newcontact, setNewContact] =  useState({
     name:"",
      address:"",
       phonenumber: "",
        email: "",

      
     
    });
    const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
        

        const contact= {...newcontact }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/contact/create`, 
        contact, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewContact({
                name:"",
                address:"",
                 phonenumber: "",
                  email: "",
                
                
                
            })
            
        }
        else{
            window.alert('Error occured')
        }
      }
      catch(error){
        console.log(error);
  
        // if( error.response.status === 403) {
        //   window.alert("Session expired. Login again to continue")
        //   navigate('/')
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
    <section className="vh-100 vw-100 pt-5 mt-5" >
      <div className="d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 justify-content-center align-items-center   ">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h2 className="text-uppercase text-center mb-4">
                ADD Contact DETAILS
                  </h2>

                  <form onSubmit={handleSubmit}>
                 

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="product_type"
                        className="form-control"
                        placeholder="Enter the name"
                        value={newcontact.name}
                        onChange={(e) => setNewContact({...newcontact, name: e.target.value})}
                        
                      />
                     
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="product_pricel"
                        className="form-control"
                        placeholder="Enter the address"
                        value={newcontact.address}

                        onChange={(e) => setNewContact({...newcontact,address: e.target.value})}


                      
                      />
                     
                    </div>

                   
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="phonenumber"
                        className="form-control"
                        placeholder="Enter your phonenumber"
                        value={newcontact.phonenumber}
                        onChange={(e) => setNewContact({...newcontact, phonenumber: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={newcontact.email}
                        onChange={(e) => setNewContact({...newcontact, email: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="company"
                        className="form-control"
                        placeholder="Enter the company"
                        value={newcontact.company}
                        onChange={(e) => setNewContact({...newcontact, company: e.target.value})}
                       
                      />
                      
                    </div>
                   
                      
                    

                  

                  

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

export default AddContact;