// checking errors on the state objects based on the conditions
export default function validateLogin(values) {
  let errors = {};

  // email
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }
  // passwords
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password < 6) {
    errors.password = "Password Must Be At Least 6 Characters";
  }
  return errors; // sent it back to useFormValidations
}
