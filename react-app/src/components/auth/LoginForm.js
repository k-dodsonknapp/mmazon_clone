import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import "./auth.css"

const LoginForm = () => {
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      console.log(data)
      if (data[0] === 'email : This field is required.') {
        setEmailErrors(["Enter your email"]);
      } 
      if (data[1] === 'password : This field is required.'){
        setPasswordError(["Enter your password"])
      }
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    history.push("/sign-up")
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-container'>
      <div className='logo-container'>
        <NavLink to={"/"}>
        <img className='mmazon-logo-login' src='https://raw.githubusercontent.com/k-dodsonknapp/mmazon_clone/main/mmazon-logo-white-background.png'></img>
        </NavLink>
      </div>
      <div className='form-container'>
        <h1>Sign-In</h1>
        <form className='login-form' onSubmit={onLogin}>
          <div className='login-input'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              // placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
            <div>
              {emailErrors.map((error, ind) => (
                <div key={ind} className="login-errors">{error}</div>
              ))}
            </div >
          </div>
          <div className='login-input'>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              // placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <div>
              {passwordError.map((error, ind) => (
                <div key={ind} className="login-errors">{error}</div>
              ))}
            </div >
            <div className='login-btn-div'>          
              <button className='login-btn' type='submit'>Continue</button>
            </div>
          </div>
        </form>
        <div className='condition-div'>
          <h4> By continuing, you agree to Mmazon's
            <span> Conditions of Use </span>
            and
            <span> Privacy Notice.</span>
          </h4>
        </div>
      </div>
      <div className='sign-up-div'>
        <div className='memo-div'>
          <div className='memo-line'></div>
          <h4> New to Mmazon? </h4>
          <div className='memo-line'></div>
        </div>
        <button onClick={createAccount}>Create your Mmazon account</button>
      </div>
    </div>
  );
};

export default LoginForm;
