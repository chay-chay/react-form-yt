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
      const {name, value} = e.target
    setValue({
      ...values,
      [name]: value,
    });
};
