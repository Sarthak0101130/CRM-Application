import { useState ,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import { Base_Url } from '../config/api';
import './App.css';
import Register from './Register';

import Login from './Login';
import Regis from './staff/Register';

import Log from './staff/Login';
import Dashboard from './Dashboard';
import ViewProduct from './ViewProduct';
import CustomerDashboard from './CustomerDashboard';
import Lead from './Lead/lead';
import GetOrder from './order/GetOrder';
import EditLead from './Lead/EditLead';
import GetRequest from './request/request';
import StaffDashboard from './staff/StaffDashboard';
import AccountActivation from './AccountActivation';
import UpdateOrder from './order/UpdateOrder';
import GetReq from './request/GetReq';
import ADDLead from './Lead/AddLead';
import AddProduct from './AddProduct';

import ForgotPassword from './Forgetpassword';
import PasswordUpdate from './PasswordUpdate';
import ALLReq from './request/allRequest';
import CancelRequest from './request/CancelRequest';
import GetEmp from './GetEmp';
import Contact from './contactdetails';
import StDashboard from './stDashboard';
import AccActivation from './staff/AccountActivation';
import ViewOrder from './order/ViewOrder';
import ForgetPass from './staff/ForgetPass';
import PassReset from './staff/PassReset';
import AddContact from './AddContact';
import Meeting from './Meeting';
import GetMeet from './meet/GetMeet';
import UpdateMeet from './meet/UpdateMeet';
import MeetingDetail from './meet/MeetingDetail';



function App() {


  return (
    <>
      <Router>
        
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Dashboard/>}></Route> 
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/acc/:id" element={<AccountActivation/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
        <Route path="/user/register" element={<Regis/>}></Route>
        <Route path="/user/acc/:id" element={<AccActivation/>}></Route> 
        <Route path="/users/login" element={<Log/>}></Route>
        <Route path="/user/forgot" element={<ForgetPass/>}></Route>
        <Route path="user/reset/:id" element={<PassReset/>}></Route>

        
        <Route path="/staf" element={<StDashboard/>}></Route>
   
        <Route path="/forgot" element={<ForgotPassword/>}></Route>
        <Route path="/reset/:id" element={<PasswordUpdate/>}></Route>
       
        <Route Path="/user/Password" element={<PassReset/>}></Route>
        <Route path="/emp" element={<GetEmp/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       
      
  
        


        //Customer
        <Route path="/s" element={<StaffDashboard/>}></Route>
        <Route path="/cus" element={<CustomerDashboard/>}></Route>
        <Route path="/getproducts" element={<ViewProduct/>}></Route>
        <Route path="/meet" element={<Meeting/>}></Route>
        <Route path="/getmeet" element={<GetMeet/>}></Route>
        <Route path="/updatemeet" element={<UpdateMeet/>}></Route>
        <Route path="/allmeet" element={<MeetingDetail/>}></Route>

        <Route path="/lead" element={<Lead/>}></Route>
        <Route path="/order" element={<GetOrder/>}></Route>
        <Route path="/vieworder" element={<ViewOrder/>}></Route>
        <Route path="/update" element={<EditLead/>}></Route>
        <Route path="/request" element={<GetRequest></GetRequest>}></Route>
        <Route path="/updateorder" element={<UpdateOrder/>}></Route>
        <Route path="/getreq" element={<GetReq/>}></Route>
        <Route path="/addlead" element={<ADDLead/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/createcontact" element={<AddContact/>}></Route>
      <Route path="/addproduct" element={<AddProduct/>}></Route>
      <Route path="/all" element={<ALLReq/>}></Route>
      <Route path="/cancelreq" element={<CancelRequest/>}></Route>
                  
      </Routes>
    </Router>
  </>
  )
}
function Navbar() {
  const [userRole, setUserRole] = useState('');

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/cus')) {
      setUserRole('customer');
    } else if (path.startsWith('/staf')) {
      setUserRole('staff');
    }
  }, [location]);

  return (
    <>
     {userRole === 'customer' ? (
        <CustomerDashboard />
      ) : userRole === 'staff' ? (
        <StDashboard/>
      ) : null}
    </>
  );
}

export default App
