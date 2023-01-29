// import Pablo from '../../assets/Pablo.jpg';
import axios from 'axios';
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
const Pablo = require ('../../assets/pablo.jpg');
const Union = require ('../../assets/Union.jpg')



const Login = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
     
  const Userlogin = (e:any) => {
    e.preventDefault()
     axios.post('http://localhost:3030/users/login', { email, password }).then(
      (response) => {  
         navigate('/dashboard')
      },
      (error) => {
       
      }
      
    )
  }

    return (
        
        <><div className="general-container">

            <div className="container">
            
            <div className="img-div">
            <img className="logo-img" src={Union} alt="Site-logo" />
                <h2 className='site-name'>lendsqr</h2>
                <img className='pablo' src={Pablo} alt="" />
            </div>

            <div className="welcome-div">
                <div className="welcome">
                    <h1 className='welcome-text'>Welcome!</h1>
                    <p className='login-details'>Enter details to login</p>
                </div>
                <div className="welcome-form">
                <div className="formLabel">
			
								<input
                                    className='login-info'
									type="email"
									name="email"
									placeholder="Email"
                                    value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
			
								/>
							</div>
							
							<div className="formLabel">
								
								<input
                                    className='login-info'
									type="password"
									name="password"
									placeholder="Password"
                                    value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
									
								/>
							</div>

                            <div className="formLabel">
								<Link className='forget-password' to={""}><label>Forget Password?</label></Link>
								
							</div>

                            <div className="formLabel">
								<button onClick={Userlogin} type='submit' className='login-btn'>log in</button>
								
							</div>



                </div>


            </div>

        </div>
        </div>
        </>
     );
}
 
export default Login;