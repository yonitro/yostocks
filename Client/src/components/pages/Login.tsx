import React from "react";
import Add from "../../styles/images/add.jpg";
import Yahoo from "../../styles/images/yahoo.png";
const Login = () => {
  return (<> <div className="container">
  <div className="row">
      <div className="yahoo-header">
          <img src={Yahoo} alt=""/>
          <a href="#" className="y-help">Help</a>
      </div>
  </div>
      
      <div className="row box-cont-holder">
          <div className="col-md-8 adHolder">
              <img src={Add}/>
          </div>
          <div className="col-md-3 col-md-offset-4">
              <div className="account-box">
                  <div className="logo ">
                      <img src={Yahoo} alt=""/>
                  </div>
                  <form className="form-signin" action="#" autoComplete="off">
                  <div className="form-group usrinpt">
                      <input type="text" className="form-control" placeholder="Email" autoFocus autoComplete="off"/>
                  </div>
                  <div className="form-group usrinpt">
                      <input type="password" className="form-control" placeholder="Password" autoComplete="off"/>
                  </div>
                  <label className="checkbox keeper">
                      <input type="checkbox" value="remember-me" />
                      Keep me signed in
                  </label>
                  <button className="btn btn-lg btn-block purple-bg" type="submit">
                      Sign in</button>
                  </form>
                  <a className="forgotLnk" href="http://localhost:3000">I can't access my account</a>
                  <div className="or-box">
                      <span className="or">OR</span>
                      <div className="row">
                          <div className="col-md-6 row-block">
                              <a href="http://localhost:3000" className="btn btn-facebook btn-block">Facebook</a>
                          </div>
                          <div className="col-md-6 row-block">
                              <a href="http://localhost:3000" className="btn btn-google btn-block">Google</a>
                          </div>
                      </div>
                  </div>
                  <div className="or-box row-block">
                      <div className="row">
                          <div className="col-md-12 row-block">
                              <a href="http://localhost:3000" className="btn btn-primary btn-block newac">Create New Account</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div></>);
};

export default Login;
