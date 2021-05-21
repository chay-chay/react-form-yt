import { useState, useEffect } from "react";

const userForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
};
