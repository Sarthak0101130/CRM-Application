import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Base_Url } from "../../config/api";
import {userData} from '../Data/ApiData';
import { USER_ROLES } from "../Data/Roles";

function Log() {
  const [success, setSuccess] = useState(false);
  const [invalid, setInvaild] = useState(false);
  const Navigate = useNavigate();

  const HandleLogin = async (email, password) => {
    try {
    
      const res =  await axios.post(`${Base_Url}/user/login`,{email,password})
     
   

   

      window.localStorage.setItem("loggedInUser", JSON.stringify(res.data.token)); 
     
      setInvaild(false);
      setSuccess(true);
      setTimeout(() => {
        Navigate("/staf");
      }, 500);
    } catch (err) {
      console.log(err);
      setSuccess(false);
      setInvaild(true);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "*Required";
    }
    if (!values.password) {
      errors.password = "*Required";
    }
    return errors;
  };

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      HandleLogin(Formik.values.email, Formik.values.password);
      Formik.values.email = "";
      Formik.values.password = "";
    },
  });

  return (
    <section className="vh-100 vw-100 justify-content-center" style={{ backgroundColor: "#0d6efd" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://media.istockphoto.com/id/1267110917/vector/black-woman-chatting-on-a-smartphone-sitting-at-the-cafe-table-happy-freelancer-or-office.jpg?s=612x612&w=0&k=20&c=8M3nynjkytfhwyhchxP2fg_GWfl4at8NpG4NxgI04-I="
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-lg-3 text-black">
                    <form onSubmit={Formik.handleSubmit}>
                      <div className="d-flex align-items-center ">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold">Login to CRM PORTAL</span>
                      </div>

                      <h5
                        className="fw-normal"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline">
                        <label className="form-label" htmlFor="loginemail">
                          Email address :
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder="Email address"
                          value={Formik.values.email}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.touched.email && Formik.errors.email ? (
                          <span className="fw-bold" style={{ color: "red" }}>
                            {Formik.errors.email}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="loginpassword">
                          Password :
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="Enter your Password"
                          value={Formik.values.password}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.touched.password && Formik.errors.password ? (
                          <span className="fw-bold" style={{ color: "red" }}>
                            {Formik.errors.password}
                          </span>
                        ) : null}
                      </div>
                      <p className="mb-1 text-center">
                        <span className="text-primary fw-bold">
                          {success ? "Successfully loggedin" : null}
                        </span>
                        <span className="text-danger fw-bold">
                          {invalid ? "Invalid user/ Activate your account through mail" : null}
                        </span>
                      </p>

                      <div className="pt-1 mb-2">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <Link
                        to="/user/forgot"
                        className="small text-muted"
                      >
                        Forgot password?
                      </Link>
                      <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link
                          to="/user/register"
                          style={{ color: "#393f81" }}
                        >
                          Register here
                        </Link>
                      </p>
                      <p className="small text-muted">
                        Terms of use. Privacy policy
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Log;