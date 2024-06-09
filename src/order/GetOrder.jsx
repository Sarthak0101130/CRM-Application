import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';
import { ORDER_STATUS } from '../Data/order_status';







function GetOrder() {   
    const [order, setOrder] = useState([]);
    const [open,setOpen]=useState(true);
    const [neworder, setNewOrder] =  useState({
       order_items:{
        product_id: "",
        product_stock : "",
        qty : "",
       },
       cust_address: "",
       cust_email: "",
       cust_phone: "",
       order_status: "",
       order_qty: "",
       order_amount: "",
       order_date: "",
       order_ETA: "",
       order_delivered_on:""
        
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

        const order = {...neworder }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/order/create-order`, 
        order, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
            handleClose();
            setNewOrder({
                order_items:{
                    product_id: "",
                    product_stock : "",
                    qty : "",
                   },
                   cust_address: "",
                   cust_email: "",
                   cust_phone: "",
                   order_status: "",
                   order_qty: "",
                   order_amount: "",
                   order_date: "",
                   order_ETA: "",
                   order_delivered_on:""
                
                
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

    useEffect(() => {
         axios.post(`${Base_Url}/order/getorders`)
            .then(res => {
                
                setOrder([order,...res.data.ordersList]);
                console.log("Use data:",order);
                localStorage.setItem("data",JSON.stringify(res.data));
            })
    }, []);


  return (
    <div>
    <div>
    <section className="vh-100" >
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
                        id="product_id"
                        className="form-control"
                        placeholder="Enter product_id"
                        value={neworder.order_items.product_id}

                        onChange={(e) =>
                            setNewOrder({
                              ...neworder,
                              order_items: {
                                ...neworder.order_items,
                                product_id: e.target.value,
                              },
                            })
                        }

                      
                      />
                     
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="product_stock"
                        className="form-control"
                        placeholder="Enterproduct_stoc"
                        value={neworder.order_items.product_stock || ""}
                        onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (!isNaN(value)) {
                              setNewOrder({
                                ...neworder,
                                order_items: {
                                  ...neworder.order_items,
                                  product_stock: value,
                                },
                              });
                            } else {
                              setNewOrder({
                                ...neworder,
                                order_items: {
                                  ...neworder.order_items,
                                  product_stock: 0, // Assign a default value or handle the error case
                                },
                              });
                            }
                          }}
                        
                      />
                     
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="qty"
                        className="form-control"
                        placeholder="Enter qty"
                        value={neworder.order_items.qty}

                        onChange={(e) =>
                            setNewOrder({
                              ...neworder,
                              order_items: {
                                ...neworder.order_items,
                              qty: e.target.value,
                              },
                            })
                        }

                      
                      />
                     
                    </div>

                   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="cust_email"
                        className="form-control"
                        placeholder="Enter your cust_email"
                        value={neworder.cust_email}
                        onChange={(e) => setNewOrder({...neworder, cust_email: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="cust_phone"
                        className="form-control"
                        placeholder="Enter cust_phone"
                        value={neworder.cust_phone}
                        onChange={(e) => setNewOrder({...neworder, cust_phone: e.target.value})}
                       
                      />
                      </div>
                       <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="order_status"
                        className="form-control"
                        placeholder="Enter order_status"
                        value={neworder.order_status}
                        onChange={(e) => setNewOrder({...neworder, order_status: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="order_qty"
                        className="form-control"
                        placeholder="Enter your order_qty"
                        value={neworder.order_qty}
                        onChange={(e) => setNewOrder({...neworder, order_qty: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="order_amount"
                        className="form-control"
                        placeholder="Enter order_amount"
                        value={neworder.order_amount}
                        onChange={(e) => setNewOrder({...neworder,order_amount : e.target.value})}
                        
                      />
                     
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="yyyy-mm-dd"
                        id="order_date"
                        className="form-control"
                        placeholder="Enter order_date"
                        value={neworder.order_date}
                        onChange={(e) => setNewOrder({...neworder,order_date: e.target.value})}
                        
                      />
                     
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="order_ETA"
                        className="form-control"
                        placeholder="Enterorder_ETA"
                        value={neworder.order_ETA}
                        onChange={(e) => setNewOrder({...neworder,order_ETA : e.target.value})}
                        
                      />
                     
                    </div>
                    
                    <div className="form-outline mb-2">
                      <input
                        type="yyyy-mm-dd"
                        id="order_delivered_on"
                        className="form-control"
                        placeholder="Enter order_delivered_on"
                        value={neworder.order_delivered_on}
                        onChange={(e) => setNewOrder({...neworder,order_delivered_on: e.target.value})}
                        
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

export default GetOrder