import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // react-router-dom을 사용하여 페이지 이동
import '../css/LoginPage.css';
import axios from 'axios';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // 페이지 이동을 위한 useHistory

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직을 여기에 구현
    const memberDto = {
      id: id,
      password: password,
    };
    axios
      .post('http://localhost:8080/login', memberDto)
      .then((response) => {
        console.log(response.data); // Handle the response from the backend
        // If login is successful, redirect to the next page (e.g., home)
        alert('로그인 성공');
        history.push('/');
      })
      .catch((error) => {
        console.error(error); // Handle any errors that occur during login
        alert('로그인 실패');
      });
    console.log('로그인 버튼 클릭 - 아이디:', id, '비밀번호:', password);
    // 로그인 로직을 처리한 후 다음 페이지로 이동하도록 구현
  };

  const goSignup = () => {
    // 회원가입 버튼 클릭 시 회원가입 페이지로 이동
    history.push('/sign'); // /signup 경로로 이동
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="avatar">
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </div>
        <h2>Login</h2>

        <form className="login-form">
          <div className="textbox">
            <input
              type="email"
              placeholder="Email (ID)"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <span className="material-symbols-outlined"> email </span>
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="material-symbols-outlined"> lock </span>
          </div>
          <button type="submit" onClick={handleLogin}>
            LOGIN
          </button>
          <button onClick={goSignup}>SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;