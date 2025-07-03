import React, { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFromData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  return <div>sup</div>;
};

export default SignUpPage;
