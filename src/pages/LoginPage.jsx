import React, { useState } from 'react';

export default function LoginPage() {
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState("");
  const [isPasswordValid, setPasswordValid] = useState("");
  const [buttonActivated, setButtonActivated] = useState(false);
  

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setUserEmail(emailValue);
    
    const isValid = emailRegEx.test(emailValue);
    setEmailValid(isValid);
  }

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    const isValid = passwordRegEx.test(passwordValue);
    setPasswordValid(isValid);
  }

  const handleButtonClick = () => {
    if (isEmailValid && isPasswordValid) {
      setButtonActivated(true);
      console.log("로그인이 완료되었습니다")

    } else {
      setEmailValid(!isEmailValid);
      setPasswordValid(!isPasswordValid);

      setButtonActivated(false);
    }
  }

  const buttonStyle = {
    backgroundColor: (isEmailValid && isPasswordValid) ? '#032641' : '#DADADA',
    color: (isEmailValid && isPasswordValid) ? '#ffffff' : '#000000',
  };

  return (
    <div className='page-container'>
      <div className='login-title'>
        이메일과 비밀번호를<br/>입력해주세요
      </div>
      <div className='login-email-wrap'>
        <p>이메일 주소</p>
        <input type='email' name='email_address' onChange={handleEmailChange}></input>
        {!isEmailValid && <p id='id_check'>올바른 이메일을 입력해주세요.</p>}
      </div>
      <div className='login-pass-wrap'>
        <p>비밀번호</p>
        <input type='password' name='password' placeholder='영문, 숫자, 특수문자 포함 8자 이상'onChange={handlePasswordChange}></input>
        {!isPasswordValid && <p id='pass_check'>올바른 비밀번호를 입력해주세요.</p>}
      </div>
      <div className={`login-check-btn`}>
        <button id='logbtn_check'onClick={handleButtonClick} style={buttonStyle} disabled={!isEmailValid || !isPasswordValid}>
        확인
        </button>
      </div>
    </div>
  )
}