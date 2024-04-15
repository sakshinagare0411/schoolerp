import React, {useState} from "react";
import './Student.css';
{/* Import images import user_icon from "../images/user_icon.png"
import email_icon from "../images/email_icon.png"
import password_icon from "../images/password_icon.png"
*/}

const Student = () => {
  const [action,setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "username is required"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

    if(formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="container-login">
      <div className="header">
        <div className="stud">Teachers Portal</div>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src="" alt="" /> {/*src={user_icon}*/}
          <input type="text" name="username" placeholder="Name" autoComplete='off' onChange={handleChange} />
          {errors.username && <span>{errors.username}</span>}
        </div>}
        
        <div className="input">
          <img src="" alt="" />
          <input type="email" name="email" placeholder="example@gmail.com" autoComplete='off' onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>} 
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </div>

        {action==="Login"?<div></div>:<div className="input">
          <img src="" alt="" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>}
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
      <div className="submit-container">
      <button className={action==="Login Sign Up"?"submit gray":"submit"} type="submit">Submit</button>
      </div>
    </div>
    </form>
  )
}

export default Student;