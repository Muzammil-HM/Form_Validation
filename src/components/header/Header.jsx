import { useState } from 'react';
import './header.css';
const Header = () => {

  const [userName, setUserName] = useState("");
  const [nameMesg, setNameMesg] = useState("Enter Your Name")
  const [showUserNameError, setShowUserNameError] = useState(false);
  

  const [userSurname, setUserSurname] = useState("");
  const [surnameMesg, setSurnameMesg] = useState("Enter Your Surname")
  const [showUserSurnameError, setShowUserSurnameError] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [emailMesg, setEmailMesg] = useState("Enter Your Email or Mobile number")
  const [showUserEmailError, setShowUserEmailError] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [passwordMesg, setPasswordMesg] = useState("Enter Your Password")
  const [showUserPasswordError, setShowUserPasswordError] = useState(false);


  const userNameHandler = (e) => {
    setUserName(e.target.value)
    
    if(userName !== ""){
      setNameMesg("Looks Good!")
    }

  }

  const userSurnameHandler = (e) => {
    setUserSurname(e.target.value)

    if(userSurname !== ""){
      setSurnameMesg("Looks Good!")
    }

  }

  const userEmailHandler = (e) => {
    setUserEmail(e.target.value)

    if(userEmail !== ""){
      setEmailMesg("Looks Good!")
    }
   
  }

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value)

    if(userPassword !== ""){
      setPasswordMesg("Looks Good!")
    }
   
  }

  const userFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log("working");
    if (userName === "") {
      setShowUserNameError(true)
    }

    if (userSurname === "") {
      setShowUserSurnameError(true)
    }

    if (userEmail === "") {
      setShowUserEmailError(true)
    }

    if (userPassword === "") {
      setShowUserPasswordError(true)
    }
  }

  return (

    <div className="form">
      <h1 className='color'>facebook</h1>
      <div className='bg-primary-subtle p-3'>
        <div className='text-center'>
          <h2>Create a new account</h2>
          <p>It's quick and easy</p>
        </div>
        <hr />

        <form onSubmit={userFormSubmitHandler}>
          <div className="top-row">
            <div className="field-wrap">
              <input value={userName} onChange={userNameHandler} type="text" placeholder='First name' />
              {showUserNameError && <p className={`${nameMesg ==="Looks Good!" ? "text-success" : "text-danger"} fw-bold`}>{nameMesg} </p>} 
            </div>

            <div className="field-wrap">
              <input value={userSurname} onChange={userSurnameHandler} type="text" placeholder='Surname' />
              {showUserSurnameError && <p className={`${surnameMesg ==="Looks Good!" ? "text-success" : "text-danger"} fw-bold`}>{surnameMesg} </p>}
            </div>
          </div>

          <div className="field-wrap">
            <input value={userEmail} onChange={userEmailHandler} type="email" placeholder='Mobile number or email Address' />
            {showUserEmailError && <p className={`${emailMesg ==="Looks Good!" ? "text-success" : "text-danger"} fw-bold`}> {emailMesg} </p>}
          
          </div>

          <div className="field-wrap">
            <input value={userPassword} onChange={userPasswordHandler} type="password" placeholder='New Password' />
            {showUserPasswordError && <p className={`${passwordMesg ==="Looks Good!" ? "text-success" : "text-danger"} fw-bold`}>{passwordMesg} </p>}
          </div>
         

          <div className='text-center'>
            <button className='rounded px-5 btn text-white'>Sign Up</button>
          </div>

        </form>

      </div>

    </div>

  )

}


export default Header;