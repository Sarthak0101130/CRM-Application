import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../config/api";

function AccActivation() {
  const { id } = useParams();
  const Navigate = useNavigate();

  const [activated, setActivated] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const checkAccountActivation = async () => {
      try {
        // Make an API call to check if the account is already activated
        const response = await axios.get(`${Base_Url}/user/check-activation/${id}`);
        const { activated } = response.data;
        setActivated(activated);
      } catch (err) {
        console.error(err);
        setDone(true);
      }
    };

    checkAccountActivation();
  }, [id]);

  const handleActivate = async (id) => {
    try {
      await axios.patch(`${Base_Url}/user/activate/${id}`);
      setActivated(true);
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    } catch (err) {
      console.error(err);
      setDone(true);
      setTimeout(() => {
        Navigate("/");
      }, 2000);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#0d6efd" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card text-center fw-bold"
              style={{ borderRadius: "1rem", height: "10vw", fontSize: "3vw" }}
            >
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-sm-12">
                  {!activated && (
                    <Link>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleActivate(id)}
                      >
                        Click Me to Activate
                      </button>
                    </Link>
                  )}
                </div>
              </div>

              <p>
                <span>
                  {activated
                    ? "Account Activated Successfully"
                    : done
                    ? " already Activated Account"
                    : null}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccActivation;