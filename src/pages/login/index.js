import React from "react";
import logo from "../../assets/images/logo/DH.png"
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/home")
  }

  return (
    <>
      <div id="auth">
        <div className="row h-100">
          <div className="col-lg-5 col-12">
            <div id="auth-left">
              <img src=""></img>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div id="auth-right">
              <div className="auth-logo">
                <a href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <h1 className="auth-title">OGC PLM DATA COLLECTOR</h1>
              {/* <p className="auth-subtitle mb-5">
                Log in with your data that you entered during registration.
              </p> */}
              <p>
                <h4>Sign In Admin</h4>
              </p>

              <form action="index.html">
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="text"
                    className="form-control form-control-xl"
                    placeholder="Username"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-person"></i>
                  </div>
                </div>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="password"
                    className="form-control form-control-xl"
                    placeholder="Password"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-shield-lock"></i>
                  </div>
                </div>
                <div className="form-check form-check-lg d-flex align-items-end">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label text-gray-600"
                    for="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5" onClick={handleClick}>
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
