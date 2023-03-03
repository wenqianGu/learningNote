import React, { useEffect } from "react";
import { useForm } from "./useForm"

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firtName: ""
  })

  useEffect(() => {
    console.log("render")
  }, [values.email, values.password])

  return (
    <div>
      <input
       name="email" 
       value={values.email} 
       placeholder="email"
       onChange={handleChange}
        />
      <input
        name="firstName"
        placeholder="first name"
        value={values.firtName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.name}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
