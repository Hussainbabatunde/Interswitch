import "./login.css";
import { Formik, Field } from "formik";
import logo from '../assets/app-logo.svg'
import { Link } from "react-router-dom";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
    localStorage.setItem('values', values)
    setSubmitting(false);
    resetForm()
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
              <h3 className="loginPage__h3-text">Welcome Back!</h3>
              <p className="loginPage__p-subtext">
                Login to visit your dashboard
              </p>
            </header>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ values, handleChange, isSubmitting, submitForm }) => (
                <form className="loginPage__form">
                  <div className="loginPage__div-label">Email</div>
                  <div className="loginPage__div-inputContainer">
                    <Field
                      name="email"
                      values={values.email}
                      type="text"
                      onChange={handleChange}
                      className={`loginPage__input-name`}
                    />
                  </div>
                  <div className="loginPage__div-label">Password</div>
                  <div className="loginPage__div-inputContainer">
                    <Field
                      name="password"
                      values={values.password}
                      type="text"
                      onChange={handleChange}
                      className={`loginPage__input-name`}
                    />
                  </div>
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
            New to Quickteller Business?{" "}
            <Link to='/signup' className="loginPage-signUp">Sign up</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
