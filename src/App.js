import React, { useState } from "react"
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from "react-router-dom"
import Users from './Components/Users/Users';
import Admin from './Components/Admin';
import { Persons } from './Components/UsersData'
import UserProfile from "./Components/UserProfile/UserProfile";
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  const [persons, setPersons] = useState(Persons)
  const [isAuth, setIsAuth] = useState(false)

  const login = () => setIsAuth(true)
  const logout = () => setIsAuth(false)

  return (
    <div className="App">
      <NavBar isAuth={isAuth} login={login} logout={logout} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users persons={persons} />} />
        <Route path='/users/:id' element={<UserProfile persons={persons} />} />
        <Route path='/admin' element={<PrivateRoute component={Admin} isAuth={isAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
