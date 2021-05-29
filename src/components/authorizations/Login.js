import React from "react";
// custom hook
import useFormValidation from "./useFormValidation";
// validation function
import validateLogin from "./validateLogin";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function Login(props) {
  const { handleChange, handleBlur, handleSubmit, errors, values, isSubmitting } = useFormValidation(
    INITIAL_STATE,
    validateLogin
  );
  // state
  const [login, setLogin] = React.useState(true); //input hidden if it is true
  return (
    <div className="login-section">
      <h2 className="login-title">{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className="login-section">
        {!login && (
          <input
            name="name"
            values={values.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            autoComplete="off"
          />
        )}
        <input
          name="email"
          values={values.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          autoComplete="off"
          onBlur={handleBlur}
          className={errors.email && "error-input"}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          name="password"
          values={values.password}
          onChange={handleChange}
          type="password"
          placeholder="Choose a Secure Password"
          onBlur={handleBlur}
          className={errors.password && "error-input"}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <div>
          <button type="submit" className="submit-button" disabled={isSubmitting}
          style={{background: isSubmitting ? "grey" : "blue"}}>
            Submit
          </button>
          <button
            type="button"
            className="account-button"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
          >
            {login ? "Need to create an account?" : "Already have an account?"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
