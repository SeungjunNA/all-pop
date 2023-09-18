import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/signPage.css';
import axios from 'axios';

function SignPage() {
  const [name, setName] = useState(''); //아이디말고 이름변수 새로 생성
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  //  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const goLogin = () => {
    history.push('/login');
  };

  const handleSignup = () => {
    // 회원가입 로직을 여기에 구현
    //    if (password !== confirmPassword) {
    //            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    //            return;
    //        }
    const memberDto = {
      id: id,
      password: password,
      name: name,
    };
    axios
      .post('http://localhost:8080/signup', memberDto)
      .then((response) => {
        console.log(response.data);
        alert('회원가입이 완료되었습니다.');
        history.push('/login');
      })
      .catch((error) => {
        alert('이미 존재하는 아이디');
      });

    console.log('회원가입 버튼 클릭 - 아이디:', id, '비밀번호:', password);
  };

  return (
    <div className="sign-container">
      <img className="clouds" src="../imgs/signup/bg.svg" />
      <div className="signup">
        <h2>Sign Up</h2>
        <h3>It's quick & simple</h3>
        <form className="form">
          <div className="textbox">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Name</label>
            <span className="material-symbols-outlined"> account_circle </span>
          </div>
          <div className="textbox">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <label>Email (ID)</label>
            <span className="material-symbols-outlined"> email </span>
          </div>
          <div className="textbox">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <span className="material-symbols-outlined"> key </span>
          </div>
          <p>
            Signed up already?
            <span onClick={goLogin}> Login here</span>
          </p>

          <button type="submit" onClick={handleSignup}>
            Join The Elitists
            <span className="material-symbols-outlined"> arrow_forward </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignPage;