import React, { useState } from "react";
import styles from "./login.module.css";
import bug from "../assets/bug.png";
import Button from "react-bootstrap/Button";
import {db} from "../fakedb/db.js"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [account, setAccount] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {
    setAccount(account == "signup" ? "signin" : "signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emails = db.filter(e => e.email === email)
    
    if (emails.length > 0) {
      navigate('/home')
    } else {
      alert("this email doesnt exist!")
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
    console.log("success")
    console.log(db[db.length - 1])
  }

  if (account === "signup") {
    return (
      <>
        <div className={styles.mainPage}>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.titles}>
              <h1>BUG TRACKER</h1>
              <h2>Login</h2>
            </div>
            <div className={styles.content}>
              <div className={styles.field}>
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
              </div>
              <div className={styles.field}>
                <label>Password</label>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" />

                <Button className="mt-5" variant="danger" type="submit">
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
      <div className={styles.mainPage}>
        <form onSubmit={handleSignup} className={styles.loginForm}>
          <div className={styles.titles}>
            <h1>BUG TRACKER</h1>
            <h2>Login</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.field}>
                <label>Name</label>
                <input onChange={e => setName(e.target.value)}  value={name} type="text" />
              </div>
            <div className={styles.field}>
              <label>Age</label>
              <input onChange={e => setAge(e.target.value)} value={age} type="date" />
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
            </div>
            <div className={styles.field}>
              <label>Password</label>
              <input onChange={e => setPassword(e.target.value)} value={password} type="password" />

              <Button className="mt-5" variant="danger" type="submit">
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
