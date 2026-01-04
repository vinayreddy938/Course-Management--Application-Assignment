import validator from "validator";

export const registerValidations = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ success: false, message: "body required" });
  }

  const allowedKeys = ["firstName", "lastName", "email", "password"];
  const bodyKeys = Object.keys(req.body);

  const hasInvalidKeys = bodyKeys.some(key => !allowedKeys.includes(key));

  if (hasInvalidKeys) {
    return res.status(400).json({
      success: false,
      message: "invalid fields in request body"
    });
  }

  const isRequiredKeys = allowedKeys.every(key => bodyKeys.includes(key));

  if (!isRequiredKeys) {
    return res.status(400).json({
      success: false,
      message: "data should be in firstName,lastName,email,password"
    });
  }

  const { firstName, lastName, email, password } = req.body;

  if (!firstName || firstName.trim().length === 0) {
    return res.status(400).json({ success: false, message: "firstName required" });
  }

  if (!lastName || lastName.trim().length === 0) {
    return res.status(400).json({ success: false, message: "lastName required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ success: false, message: "invalid email" });
  }

  if (!validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })
  ) {
    return res.status(400).json({ success: false, message: "password not strong" });
  }

  next();
};
