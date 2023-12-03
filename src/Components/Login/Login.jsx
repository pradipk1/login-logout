import React, { useContext, useState } from 'react'
import './Login.css'
import myContext from '../Context/Context';

function Login() {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    });

    const {user, setUser} = useContext(myContext);

    const handleForm = (e) => {
        e.preventDefault();
        if(formData.username==='user' && formData.password==='password') {
            alert("Logged in successfully!");
            setUser({
                name:formData.username,
                isLoggedIn: true
            })
        } else {
            alert("Wrong credentials entered! Please try again.");
        }
    }
  return (
    <div className='loginContainer'>
        <form className='loginForm' onSubmit={handleForm}>
            <h2 style={{textAlign:'center', marginBottom:'20px'}}>Login Form</h2>
            <div className='loginInpCont'>
                <label>Username</label>
                <input type="text" placeholder='Enter Username' 
                required
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        username: e.target.value
                    })
                }}
                />
            </div>
            <div className='loginInpCont'>
                <label>Password</label>
                <input type="password" placeholder='Enter Password' 
                required
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }}
                />
            </div>
            <div className='submitBtnDiv'>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login