import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/signPage.css';
import axios from 'axios';

function SignPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSignup = () => {
  // 회원가입 로직을 여기에 구현
        console.log('회원가입 버튼 클릭 - 아이디:', id, '비밀번호:', password);
        // 회원가입 로직을 처리한 후 로그인 페이지로 이동하도록 구현
    if (password !== confirmPassword) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
    }
    const memberDto = {
        id: id,
        password: password,
    };

     axios.post('http://localhost:8080/signup', memberDto)
        .then(response => {
            console.log(response.data); // 성공 시 응답 데이터 출력
            history.push('/login'); // 회원 가입 성공 시 로그인 페이지로 이동
        })
       .catch(error => {
           alert('이미 존재하는 아이디');
       });

  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>회원가입</h2>
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
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup}>회원가입</button>
      </div>
    </div>
  );
}

export default SignPage;