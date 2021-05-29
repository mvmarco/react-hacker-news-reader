// checking errors on the state objects based on the conditions 
export default function validateLogin(values) {
  let errors = {}

  // email
  if(!values.errors){
  errors.email = "Email required";
} else if () {
  errors.email = "Invalid Email"
}
  // passwords

  return errors; // sent it back to useFormValidations
}
