import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // react-router-dom을 사용하여 페이지 이동
import '../css/LoginPage.css';
import axios from 'axios';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // 페이지 이동을 위한 useHistory

  const handleLogin = () => {
    // 로그인 로직을 여기에 구현
    const memberDto = {
              id: id,
              password: password,
         };
         axios.post('http://localhost:8080/login', memberDto)
               .then(response => {
                 console.log(response.data); // Handle the response from the backend
                 // If login is successful, redirect to the next page (e.g., home)
                 history.push('/home');
               })
               .catch(error => {
                 console.error(error); // Handle any errors that occur during login
                 alert('로그인 실패');
               });
    console.log('로그인 버튼 클릭 - 아이디:', id, '비밀번호:', password);
    // 로그인 로직을 처리한 후 다음 페이지로 이동하도록 구현
  };

  const handleSignup = () => {
    // 회원가입 버튼 클릭 시 회원가입 페이지로 이동
    history.push('/sign'); // /signup 경로로 이동
  };

  return (
    <div className="login-container">
      <div className="login-inputs">
        <h2>로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-buttons">
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleSignup}>회원가입</button>
      </div>
    </div>
  );
}

export default LoginPage;