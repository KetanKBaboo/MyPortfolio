import React,{useState,useEffect} from 'react'
import "../styles/Contact.css"

const Contact = () => {
  const [name, setName]=useState("");
  const [nameError, setNameError]=useState("")
  const [nameDone, setNameDone]=useState("")
  const [email, setEmail]=useState("")
  const [emailError, setEmailError]=useState("")
  const [emailDone, setEmailDone]=useState("")
  const [message, setMessage]=useState("")
  const [messageError, setMessageError]=useState("")
  const [messageDone, setMessageDone]=useState("")

  const [detail,setDetail]=useState([])

  const handleNameChange = (e) => {
    setName(()=> e.target.value)
    if(name!==""){
      setNameError("")
      setNameDone(name)
    } 
  }
  const handleEmailChange = (e) => {
    setEmail(()=> e.target.value)
    if(email!==""){
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(emailRegex.test(email)){
        setEmailError("")
        setEmailDone(email)
      }
      else{
        setEmailError("Invalid email address")
        setEmailDone("")
      }
    }
  }
  const handleMessageChange = (e) => {
    setMessage(()=> e.target.value)
    if(message!==""){
    const messageLength = message.length;
    if(messageLength<4){
      setMessageError("Message must be at least 4 characters")
      setMessageDone("")
    }
    else{
      setMessageError("")
      setMessageDone(message)
    }
  }
}
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name===""){
      setNameError("Name is required")
      setNameDone("")
    }
    if(email===""){
      setEmailError("Email is required")
      setEmailDone("")
    }
    if(message===""){
      setMessageError("Message can not be blank !")
      setMessageDone("")
    }
    (nameError || emailError || messageError) && alert("Error !!")
    let details={
      name,
      email,
      message
    }
    nameDone && emailDone && messageDone && setDetail([...detail, details]);
    
    setName("")
    setNameDone("")
    setNameError("")
    setEmail("")
    setEmailDone("")
    setEmailError("")
    setMessage("")
    setMessageDone("")
    setMessageError("")
  }
  useEffect(()=>{
    localStorage.setItem("detail", JSON.stringify(detail))
  },[detail])

  return (
    <div id="contact" className="contact-form">
      <h1>Send me a message</h1>
      <form onSubmit={handleSubmit} className="form-section">
      <div>
        <label htmlFor="name">Enter Name</label>
        <input type="text" placeholder="John Doe" className="text-area name" value={name} onChange={handleNameChange}/>
        {nameError && <div className="error-msg">{nameError}</div>}
      </div>
      <div>
        <label htmlFor="email">Enter Email</label>
        <input type="text" placeholder="example@example.com" className="text-area email" value={email} onChange={handleEmailChange}/>
        {emailError && <div className="error-msg">{emailError}</div>}
      </div>
      <div>
        <label htmlFor="text-area-message">Message</label>
        <input type="text" placeholder="Hi, There !!" className="text-area text-area-message" value={message} onChange={handleMessageChange}/>
        {messageError && <div className="error-msg">{messageError}</div>}
      </div>
        <button type="submit" className="submit-button">submit</button>
      </form>
    </div>
  )
}

export default Contact