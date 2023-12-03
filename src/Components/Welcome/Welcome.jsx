import React, { useContext } from 'react'
import myContext from '../Context/Context'
import './Welcome.css';

function Welcome() {
    const {user, setUser} = useContext(myContext);

    const handleLogout = () => {
        setUser({
            name:'',
            isLoggedIn: false
        });
    }
  return (
    <div className='welcomeCont'>
        <div className='welcomeDiv'>
            <h2 style={{textAlign:'center'}}>Welcome <span style={{color:'green'}}>{user.name}</span> !</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Welcome