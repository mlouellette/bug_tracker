import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import bug from "../assets/bug.png";
import Button from "react-bootstrap/Button";
import {db} from "../fakedb/db.js"
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [account, setAccount] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('name')
  }, []);

  const handleChange = () => {
    setAccount(account == "signup" ? "signin" : "signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emails = db.filter(e => e.email === email)
  
    if (emails.length > 0) {
      const name = emails[0].name;
      localStorage.setItem("name", name);
  
      toast.success('Logged in successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      setTimeout(() => {
        navigate('/home')
      }, 3000);
  
    } else {
      alert("this email doesn't exist!")
    }
  }

  console.log(db)

  const handleSignup = (e) => {
    e.preventDefault();
    const schema = {
      id: db.length + 1,
      name: name,
      email: email,
      password: password

    }

    
    db.push(schema);
    setName("");
    setEmail("");
    setPassword("");

    toast.success('Signed up successfuly!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   
      });

      setTimeout(() => {
        setAccount("signup")
        }, 3000);

    console.log("success")
    console.log(db[db.length - 1])
  }

  if (account === "signup") {
    return (
      <>

          <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />




        <div className={styles.mainPage}>
          <form onSubmit={handleLogin} className={styles.loginForm}>
    
            <div className={styles.titles}>
            <img style={{top:0, width:"30%"}} src={bug} />
              <h4 className="mt-1 mb-5 pb-1">BUGTRACKER APP.</h4>
              
            </div>
            <p>Please login to your account</p>
            <div className={styles.content}>
              <div className={styles.field}>
            
                <input placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} type="email" />
              </div>
              <div className={styles.field}>
              
                <input placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} type="password" />

                <Button className="mt-5" style={{backgroundColor:"rgba(255, 118, 48, 1)"}} variant="danger" type="submit">
                  Submit
                </Button>
              </div>
            </div>

            <p>
              Don't have an account?{" "}
              <a className="link-warning" onClick={handleChange}>
                Sign up.
              </a>
            </p>
          </form>
        </div>
      </>
    );
  }
  return (
    <>

      <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
    
      <div className={styles.mainPage}>
        <form onSubmit={handleSignup} className={styles.loginForm}>
          <div className={styles.titles}>
          <img style={{top:0, width:"30%"}} src={bug} />
          <h4 className="mt-1 mb-5 pb-1">BUGTRACKER APP.</h4>
          </div>
          <div className={styles.content}>
            <div className={styles.field}>
            <p>Please enter your credentials</p>
                <input placeholder="Name" onChange={e => setName(e.target.value)}  value={name} type="text" />
              </div>
            <div className={styles.field}>
        
              <input placeholder="Age" onChange={e => setAge(e.target.value)} value={age} type="date" />
            </div>
            <div className={styles.field}>
              
              <input placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} type="email" />
            </div>
            <div className={styles.field}>
            
              <input placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} type="password" />

              <Button style={{backgroundColor: '#FF7630'}}  className="mt-5" type="submit">
                Submit
              </Button>
            </div>
          </div>

          <p>
            Already registered?{" "}
            <a className="link-warning" onClick={handleChange}>
              Sign in.
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
