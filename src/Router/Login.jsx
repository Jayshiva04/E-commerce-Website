import React from 'react';

const LoginForm = ({ loginHandler, usernameRef, passwordRef }) => {
  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <br />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default LoginForm;


