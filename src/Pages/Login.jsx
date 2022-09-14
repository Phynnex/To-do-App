



import { useRef, useState, useEffect } from "react";
// import './App.css';
import axios from "axios";
import Home from "../Pages/Home";


function App() {
  const errRef = useRef();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const [errMsg, setErrMsg] = useState('');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);




  useEffect(() => {
    setErrMsg('');
  }, [email, password])
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    console.log({ email, password })
    try {
      const response = await axios.post('https://reqres.in/api/login', JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },

        }
      );

      console.log(JSON.stringify(response?.data));
      const token = response?.data.token
      setEmail('');
      setPassword('');
      setIsSubmitSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('User not found');
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus();
    }

  }

  return (
    <>
      {isSubmitSuccess ? (
        <Home />
      ) : (
        <div className="login-container">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>Sign In</h1>
          <div className="input-container">
            <label className="signin-label">Email :</label>
              <input 
                value={email} 
                onChange={handleEmail} 
                type="email" 
                className="signin-input" 
              /> 
            <label className="signin-label">Password :</label>
              <input 
                value={password} 
                onChange={handlePassword} 
                type="password" 
                className="signin-input"
                required
              /> 
          <button onClick={handleSubmit} className="signin-btn">Login</button>
          </div>
         
        </div>
      )}
    </>

  );
}

export default App;











