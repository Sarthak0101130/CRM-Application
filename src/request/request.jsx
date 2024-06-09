import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';
import { REQUEST_STATUS } from '../Data/request';







function GetRequest() {   
  
    const [open,setOpen]=useState(true);
    const [newrequest, setNewRequest] =  useState({
      title:"",
      orderID:"",
       cust_email: "",
       cust_phone: "",
       request_date: "",
       request_status: "",
       request_engg: "",
      priority: "",
     
    });
    const navigate = useNavigate;
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

        const request= {...newrequest }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/ad/createreq`, 
        request, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewRequest({
              title:"",
              orderID:"",
               cust_email: "",
               cust_phone: "",
               request_date: "",
               request_status: "",
               request_engg: "",
              priority: "",
                
                
            })
            
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
    <section className="vh-100 vw-100 mt-5" >
      <div className="d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 justify-content-center align-items-center   ">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h2 className="text-uppercase text-center mb-4">
                    Create Request
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Enter title of your request"
                        value={newrequest.title}
                        onChange={(e) => setNewRequest({...newrequest, title: e.target.value})}

                      
                      />
                     
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="orderId"
                        className="form-control"
                        placeholder="Enter the orderid"
                        value={newrequest.orderID}
                        onChange={(e) => setNewRequest({...newrequest, orderID: e.target.value})}
                        
                      />
                     
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        id="cust-email"
                        className="form-control"
                        placeholder="Enter the custome-emailid"
                        value={newrequest.cust_email}

                        onChange={(e) => setNewRequest({...newrequest, cust_email: e.target.value})}


                      
                      />
                     
                    </div>

                   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="cust_email"
                        className="form-control"
                        placeholder="Enter your cust_phone"
                        value={newrequest.cust_phone}
                        onChange={(e) => setNewRequest({...newrequest, cust_phone: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="request_date"
                        className="form-control"
                        placeholder="Enter the date of the request"
                        value={newrequest.request_date}
                        onChange={(e) => setNewRequest({...newrequest, request_date: e.target.value})}
                       
                      />
                      </div>
                       <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="request_status"
                        className="form-control"
                        placeholder="Enter request_status"
                        value={newrequest.request_status}
                        onChange={(e) => setNewRequest({...newrequest, request_status: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="request_engg"
                        className="form-control"
                        placeholder="Enter your request_engg"
                        value={newrequest.request_engg}
                        onChange={(e) => setNewRequest({...newrequest,request_engg: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="order_amount"
                        className="form-control"
                        placeholder="Enter order_amount"
                        value={newrequest.priority}
                        onChange={(e) => setNewRequest({...newrequest,priority: e.target.value})}
                        
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

export default GetRequest;