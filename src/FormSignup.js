import React from "react";

const FormSignup = () => {
  return (
    <div>
      <div className="form-content-right">
        <form className="form">
          <h1>
            Get started with us today! Create your account by filling out the
            information below,
          </h1>
          <div className="form-input">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              className="form-input"
            />
          </div>

          <div className="form-input">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
            />
                  </div>
                  
                  <div className="form-input">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
            />
                  </div>
                  
                  <div className="form-input">
            <label htmlFor="password2" className="form-label">
              Confirmed Password
            </label>
            <input
              id="password2"
              type="password2"
              name="password2"
              placeholder="Enter your password2"
              className="form-input"
            />
                  </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignup;
