import React from "react";
import { Button, ButtonToolbar } from "rsuite";
const Login = () => {
  return (
    <div className="container">
      <div className="bg-white">
        <div className="row ">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 offset-lg-4 offset-md-3 offset-sm-2 offset-col-2">
            <form className="border border-4 border-white p-4 container bg-white shadow-lg p-3 s bg-body m-n3 ">
              <div className="text-wrap p-1 text-center mb-3 ">
                <h3 className="fw-bolder">
                  Want to checkout this file? Log in or Sign up
                </h3>
              </div>
              <div className="align-items-center mt-3 mb-3">
                <ButtonToolbar>
                  <Button block size="lg" color="green" appearance="ghost">
                    Signin with Google
                  </Button>
                </ButtonToolbar>
              </div>
              <div className="mt-6 mb-6 text-center">
                <span>or</span>
              </div>
              <div class="mt-3">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
              </div>
              <div class="mt-3 mb-3">
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Password"
                  />
                  <label for="floatingInput">Password</label>
                </div>
              </div>

              <div className="mt-5">
                <Button block size="lg" appearance="primary" color="violet">
                  Create Account
                </Button>
              </div>

              <div className="text-center mt-3 text-wrap">
                <p className="fs-6 fw-light lh-1.5">
                  By clicking "Create account" or "Continue with Google", you
                  agree to the
                  <span>
                    <Button size="sm" color="violet" appearance="link">
                      Figma TOS
                    </Button>
                  </span>
                  &
                  <span>
                    <Button size="sm" color="violet" appearance="link">
                      Privacy Policy
                    </Button>
                  </span>
                </p>
              </div>

              <div className="text-center mt-3">
                <Button size="md" appearance="link" color="violet">
                  Use single Sign-on
                </Button>
              </div>
              <div className="text-center mt-3 align-items-center">
                <span className="fs-6 fw-light lh-1.5">
                  Already have an account?
                </span>
                <Button size="sm" appearance="link" color="violet">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
