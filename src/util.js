export const schemaValidate = (values) => {
  const errors = {};
  for (let key in values) {
    if (key === "email") {
      const value = values[key];
      const isEmail = validateEmail(value);
      if (!value) {
        errors[key] = `${key} field cannot be empty`;
      } else if (!isEmail) {
        errors[key] = `Enter a valid ${key}`;
      }
    }
    if (key === "password") {
      const value = values[key];
      if (!value) {
        errors[key] = `${key} field cannot be empty`;
      }
    }
  }
  return errors;
};

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
