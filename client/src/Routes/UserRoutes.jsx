import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/User/Login'
import SignUp from '../pages/User/SignUp'
import Home from '../pages/User/Home'
import NavBar from '../components/User/NavBar/NavBar'
import PrivateComponent from '../components/Authorization/PrivateComponent';

const UserRoutes = () => {
  return (
    <div>
        <NavBar />
        <Routes>
        <Route element={<PrivateComponent />}>
          {/* <Route path="profile" element={<Profile />} /> */}

        </Route>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="/*" element={<Page404 user={true} />} /> */}
      </Routes>
    </div>
  )
}

export default UserRoutes