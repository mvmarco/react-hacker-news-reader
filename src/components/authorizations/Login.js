import React from "react";
// custom hook
import useFormValidation from "./useFormValidation";
// validation function
import validateLogin from "./validateLogin";
// firebase
import firebase from "../../firebase";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function Login(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  // state
  const [login, setLogin] = React.useState(true); //input hidden if it is true
  const [firebaseError, setFirebaseError] = React.useState(null)
  // firebase autheticate user
  async function authenticateUser() {
    const { name, email, password } = values;
    try {
          login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password);
      props.history.push("/"); // pushing the user once logged to the homepage
    } catch (err) {
      console.log('autheticantion error', err)
      setFirebaseError(err.message)
    }
  }
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
        {firebaseError && <p className="error-text">{firebaseError}</p>}

        <div>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "white" }}
          >
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
