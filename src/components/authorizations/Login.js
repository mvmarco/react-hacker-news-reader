function Login(props) {
  return (
    <div className="login-section">
      <h2 className="login-title">Create Account</h2>
      <form className="login-section">
        <input type="text" placeholder="Your Name" autoComplete="off" />
        <input type="email" placeholder="Your Email" autoComplete="off" />
        <input type="passwod" placeholder="Choose a Secure Password" />
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="submit" className="account-button">
            Already have an account?
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
