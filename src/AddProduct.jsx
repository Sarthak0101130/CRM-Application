import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../config/api';
import { PRODUCT_STATUS } from './Data/Product'; 
import { PRODUCT_TYPE } from './Data/producttypes';







function AddProduct() {   
  
    const [open,setOpen]=useState(true);
    const [newrequest, setNewRequest] =  useState({
     product_name:"",
      product_type:"",
       product_price: "",
        product_stock: "",
       product_desc: "",
       product_status: "",
      
     
    });
    const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
        

        const request= {...newrequest }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/ad/add`, 
        request, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewRequest({
                product_name:"",
                product_type:"",
                 product_price: "",
               
                 product_stock: "",
                 product_desc: "",
                 product_status: "",
                
                
                
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
    <section className="vh-100 vw-100 pt-5 mt-5" >
      <div className="d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 justify-content-center align-items-center   ">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h2 className="text-uppercase text-center mb-4">
                ADD PRODUCT DETAILS
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="product_name"
                        className="form-control"
                        placeholder="Enter product_namet"
                        value={newrequest.product_name}
                        onChange={(e) => setNewRequest({...newrequest, product_name: e.target.value})}

                      
                      />
                     
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="product_type"
                        className="form-control"
                        placeholder="Enter the product_type"
                        value={newrequest.product_type}
                        onChange={(e) => setNewRequest({...newrequest, product_type: e.target.value})}
                        
                      />
                     
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="product_pricel"
                        className="form-control"
                        placeholder="Enter the product_price"
                        value={newrequest.product_price}

                        onChange={(e) => setNewRequest({...newrequest, product_price: e.target.value})}


                      
                      />
                     
                    </div>

                   
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="product_stock"
                        className="form-control"
                        placeholder="Enter your product_stock"
                        value={newrequest.product_stock}
                        onChange={(e) => setNewRequest({...newrequest, product_stock: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="product_des"
                        className="form-control"
                        placeholder="Enter your product_description"
                        value={newrequest.product_desc}
                        onChange={(e) => setNewRequest({...newrequest, product_desc: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="product_status"
                        className="form-control"
                        placeholder="Enter the product_status"
                        value={newrequest.product_status}
                        onChange={(e) => setNewRequest({...newrequest, product_status: e.target.value})}
                       
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

export default AddProduct;