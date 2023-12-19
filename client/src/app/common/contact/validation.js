export const ValidateForm = (formValues) => {
  const errors = {};
  if (!formValues.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formValues.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required";
  }

  if (!formValues.emailAddress.trim()) {
    errors.emailAddress = "Email address is required";
  } else if (
    !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(formValues.emailAddress)
  ) {
    errors.emailAddress = "Invalid email address";
  }

  if (!formValues.message.trim()) {
    errors.message = "Message is required";
  }
  return errors;
};
