import { useState } from "react";
import "./login.css";
import "./signup.css";
import logo from '../assets/app-logo.svg'
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Signup = () => {
  const initialValues = {
    lname: "",
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/])(?=.*\d)(?=.*[a-z]).{8,}$/
      )
      .required("Password is required"),
  });

  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordFocus = () => {
    setShowCheckboxes(!showCheckboxes);
  };
  const handleBlur = (event) => {
    const value = event.target.value;
    console.log(value);

    if (value.length > 8) {
      setShowConfirmPassword(!showConfirmPassword);
      // location.reload(true)
      // Execute the desired action here
    }
  };

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
    localStorage.setItem('values', values)
    setSubmitting(false);
    resetForm();
  };

  return (
    <main className="loginPage">
      <div className="loginPage__div-quickteller">
      <img src={logo} width='180px' height='60px' style={{padding:'1rem 2rem'}} />
      </div>
      <section className="loginPage__section-wrapper">
        <div className="loginPage__div-container">
          <div className="loginPage__div">
            <header className="loginPage__header">
              <div className="signupPage__div-step">
                <span className="signupPage__span-circular"></span>
                <span className="signupPage__span-middler"></span>
                <span className="signupPage__span-circular"></span>
              </div>
              <h3 className="loginPage__h3-text">Create an account</h3>
              <p className="loginPage__p-subtext">
                Sign up to create your business account
              </p>
            </header>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              {({ values, errors, handleChange, isSubmitting, submitForm }) => (
                <form className="loginPage__form">
                  <div className="signupPage__div-flex">
                    <div className="loginPage__div-inputContainer">
                      <div className="loginPage__div-label">First Name</div>
                      <Field
                        name="fname"
                        values={values.fname}
                        type="text"
                        onChange={handleChange}
                        className={`loginPage__input-name`}
                      />
                    </div>
                    <div className="loginPage__div-inputContainer">
                      <div className="loginPage__div-label">Last Name</div>
                      <Field
                        name="lname"
                        values={values.lname}
                        type="text"
                        onChange={handleChange}
                        className={`loginPage__input-name`}
                      />
                    </div>
                  </div>

                  <div className="loginPage__div-label">Email</div>
                  <div className="loginPage__div-inputContainer">
                    <Field
                      name="email"
                      values={values.email}
                      type="email"
                      onChange={handleChange}
                      className={`loginPage__input-name`}
                    />
                  </div>
                  <div className="loginPage__div-label">Password</div>
                  <div className="loginPage__div-inputContainer">
                    <Field
                      name="password"
                      id="password"
                      values={values.password}
                      type="password"
                      onChange={handleChange}
                      onFocus={handlePasswordFocus}
                      onBlur={(event) => {
                        handlePasswordFocus();
                        handleBlur(event);
                      }}
                      className={
                        "loginPage__input-name signup__input-password "
                      }
                    />
                  </div>

                  {showCheckboxes && (
                    <div className="signupPage__div-checkboxes">
                      <div id="checkboxes">
                        <label className="checkbox-label">
                          <Field
                            type="checkbox"
                            name="length"
                            checked={values.password.length >= 8}
                            disabled
                            className="checkbox"
                          />
                          A minimum of 8 characters
                        </label>
                      </div>
                      <div id="checkboxes">
                        <label className="checkbox-label">
                          <Field
                            type="checkbox"
                            name="letter"
                            checked={/[a-z]/.test(values.password)}
                            disabled
                            className="checkbox"
                          />
                          At least one letter
                        </label>
                      </div>
                      <div id="checkboxes">
                        <label className="checkbox-label">
                          <Field
                            type="checkbox"
                            name="number"
                            checked={/\d/.test(values.password)}
                            disabled
                            className="checkbox"
                          />
                          At least one number
                        </label>
                      </div>
                      <div id="checkboxes">
                        <label className="checkbox-label">
                          <Field
                            type="checkbox"
                            name="symbol"
                            checked={/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(
                              values.password
                            )}
                            disabled
                            className="checkbox"
                          />
                          At least one special character
                        </label>
                      </div>
                    </div>
                  )}

                  {showConfirmPassword && (
                    <div className="loginPage___div-cfContainer">
                      <div className="loginPage__div-label">
                        Confirm Password
                      </div>
                      <div className="loginPage__div-inputContainer">
                        <Field
                          name="confirmPassword"
                          values={values.confirmPassword}
                          type="password"
                          onChange={handleChange}
                          className={`loginPage__input-name`}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={(e) => {
                      submitForm();
                      e.preventDefault();
                    }}
                    className="loginPage__btn btn-blue"
                  >
                    Sign in
                  </button>
                </form>
              )}
            </Formik>
            <div className="loginPage__a-forget">
              <span>Forget password?</span>
            </div>
          </div>
          <p className="loginPage__p-new">
            New to Quickteller  Business?{" "}
            <Link to='/login' className="loginPage-signUp">Sign up</Link>
          </p>
        </div>
      </section>
      <div className="loginPage__div-quickteller"></div>
    </main>
  );
};

export default Signup;
