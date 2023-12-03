import { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import myContext from './Components/Context/Context';
import Welcome from './Components/Welcome/Welcome';

function App() {
  const [user, setUser] = useState({
    name: '',
    isLoggedIn: false
  });
  
  
  return (
    <myContext.Provider value={{user, setUser}}>
      <div className="App">
        {
          user.isLoggedIn ? <Welcome /> : <Login />
        }
      </div>
    </myContext.Provider>
    
  );
}

export default App;
