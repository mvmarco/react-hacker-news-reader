import React from "react";
import useFormValidation from "./useFormValidation";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function Login(props) {
  const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE);
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
        />
        <input
          name="password"
          values={values.password}
          onChange={handleChange}
          type="password"
          placeholder="Choose a Secure Password"
        />
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="submit"
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
