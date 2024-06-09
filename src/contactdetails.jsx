import React,{useEffect,useState} from 'react';
;

import axios from 'axios';
import { Base_Url } from '../config/api';
import { Navigate, useNavigate } from 'react-router-dom';









function Contact() {
  
    const [contact, setContact] = useState([]);
    const navigate=useNavigate();
    

    useEffect(() => {
         axios.get(`${Base_Url}/contact/get`)
            .then(res => {
               
                 setContact([contact,...res.data]);
                console.log("Use data:", res.data);
                localStorage.setItem("data",JSON.stringify(res.data));
            
            })
    }, []);
    
    

    


  return (
    <div className='vh-100 vw-100 justify-content-center mt-5 pt-2' >
    <h2 className="bg-warning">employeeDetails</h2>
    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
  
</div>
 
    <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
           
                <th>ContactId</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phonenumber</th>
                <th>email</th>


                
              
                <th></th>
                




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
    contact.map((item, index) => (
                <tr  className="table" key={index}> 
                    <td>{item.contact_id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.email}</td>
                  
                    
                    
                 
             
                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
  )
}

export default Contact;