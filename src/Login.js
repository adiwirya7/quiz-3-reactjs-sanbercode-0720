import React,{ useState, useContext }  from "react";
import logo from "../src/img/logo.png";
import { useHistory  } from "react-router-dom";
import { UserContext } from '../src/UserContext'



const Login = () => {
    const history = useHistory();
    const User = useContext(UserContext);
    const [InputEmail,setInputEmail] = useState("")
    const [InputPass,setInputPass] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        let email = InputEmail;
        let pass = InputPass;

        if(email === User.email && pass === User.pass)
        {
            console.log('true');
            User.status = true;
            history.push("/home")
        }
        else alert("Email atau Password Salah")

    }

const handleChangeEmail= (event) => {
    const newValue = event.target.value;
    setInputEmail(newValue);
  };

const handleChangePass = (event) => {
    const newValue = event.target.value;
    setInputPass(newValue);
  };
        return (
                    <section style={{width:"30%", marginLeft:"35%"}}>
                    <form onSubmit={handleSubmit}>
                      <div className="imgcontainer">
                        <img src={logo} className="avatar"/>
                      </div>

                      <div className="container">
                        <label><b>Username</b></label>
                        <input type="email" placeholder="Enter Username" name="email" value={InputEmail} onChange={handleChangeEmail} required/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" value={InputPass} onChange={handleChangePass} required/>
                            
                        <button type="submit">Login</button>
                      </div>
                    </form>
                    </section>
        )
    }

export default Login