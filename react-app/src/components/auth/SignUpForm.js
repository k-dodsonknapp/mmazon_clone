import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='sign-up-form-container'>
      <div className='logo-container'>
        <NavLink to={"/"}>
          <img className='mmazon-logo-login' src='https://raw.githubusercontent.com/k-dodsonknapp/mmazon_clone/main/mmazon-logo-white-background.png'></img>
        </NavLink>
      </div>
      <div className='signup-form-container'>
        <h1>Create account</h1>
        <form className='signup-form' onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='signup-input'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='signup-input'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='signup-input'>
            <label>Password</label>
            <input
              placeholder='At least 6 characters'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className='signup-input'>
            <label>Re-enter password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className='login-btn-div'>
            <button type='submit'>Sign Up</button>
          </div>
        </form>
        <div className='s-condition-div'>
          <h4> By continuing, you agree to Mmazon's
            <span> Conditions of Use </span>
            and
            <span> Privacy Notice.</span>
          </h4>
        </div>
        <div className='sign-in-redirect-div'>
          <h5>
            Already have an account? <NavLink to={'/login'}>Sign-In</NavLink>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
