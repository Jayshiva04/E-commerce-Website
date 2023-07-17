import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Blogs from '../Pages/Blogs';
import Shops from '../Pages/Shops';
import LoginForm from './Login'; 

const Routing = () => {
  const [isLogin, setisLogin] = useState(false);
  const usernameRef = useRef(); 
  const passwordRef = useRef(); 

  const loginHandler = () => {
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (enteredUsername !== '' && enteredPassword !== '') {
      setisLogin(true);
      console.log('User logged in:', enteredUsername);
    } else {
      console.log('Please enter all details');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/shop" element={<Shops />} />
        <Route
          path="/login"
          element={
            isLogin ? (
              <p>You are already logged in!</p>
            ) : (
              <LoginForm
                loginHandler={loginHandler}
                usernameRef={usernameRef}
                passwordRef={passwordRef}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
