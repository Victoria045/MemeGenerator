import React from "react"

export default function News(){

  const [formData, setFormData] = React.useState({
     email:"",
     password: "",
     confirmPassword: "",
     isChecked: false
  })
 
  // console.log(formData)

  function handleChange(event){

    const {name, type,  value, checked} = event.target

     setFormData(prevFormValue => {
        return {
          ...prevFormValue,
          [name] : type === "checkbox" ? checked : value 
        }
     })
    //  console.log(value)
  }

  function handleSubmit(event){

    event.preventDefault()

    // formData.password === formData.confirmPassword ? console.log("Successfully signed up") : console.log("Password Mismatch")

    // formData.isChecked ? console.log("Thanks for signing up for our newsletter") : ""

    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up")
    } else {
      console.log("Password Mismatch")
      return
    }

    if (formData.isChecked) {
      console.log("Thanks for signing up for our newsletter")
    }

  }

  return(
    <div className="form-wrap">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input">
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address"/>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password"/>
        </div>
        <input className="check" type="checkbox" name="isChecked" checked={formData.isChecked} onChange={handleChange} id="isChecked"/>
        <label htmlFor="isChecked">I want to join the newsletter</label>
        <button className="submit-btn">Sign up</button>
      </form>
    </div>
    
  )
}