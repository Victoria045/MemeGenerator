import React from "react"

export default function Form(){
  const [formData, setFormData] = React.useState({
    firstName : "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  })

  // console.log(formData)

  // function handleChange(event) {
    
  //   setFormData(prevFormData => {
  //     return {
  //           ...prevFormData,
  //           [event.target.name] : event.target.value
  //     }
  //   })
  // }

  // function handleChange(event) {
    
  //   setFormData(prevFormData => {
  //     return {
  //           ...prevFormData,
  //           [event.target.name] : event.target.value
  //     }
  //   })
  // }

  function handleChange(event) {
    
    const {name, value, type, checked} = event.target

    setFormData(prevFormData => {
      return {
            ...prevFormData,
            [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
      <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
      <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
      <textarea placeholder="Comment Here..." name="comment" value={formData.comment} onChange={handleChange} />
      <input type="checkbox" id="isFriendly" name="isFriendly" checked={formData.isFriendly} onChange={handleChange}   />
      <label htmlFor="isFriendly">Are you friendly?</label><br /><br />
      <fieldset>
          <legend>Current employment status</legend>

          <input
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
           />
           <label htmlFor="unemployed">Unemployed</label><br />

           <input
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
           />
           <label htmlFor="part-time">Part-time</label><br />

           <input
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleChange}
           />
           <label htmlFor="full-time">Full-time</label><br />
      </fieldset>

      <select 
          id="favColor"
          name="favColor"
          value={formData.favColor}
          onChange={handleChange}
      >
          <option value="">-- Choose Color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
      </select><br /><br />
      <button>Submit</button>
    </form>
  )
}