import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  updateUsername,
  updatePassword,
  startLoading,
  stopLoading,
  loginSuccess,
  loginFailure,
} from '../redux/action';

export default function LoginPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const url = '//localhost:8000/user/login';

  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [buttonActivated, setButtonActivated] = useState(false);
  
  //const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  //const passwordRegEx = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 400:
        return 'body 값이 비어 있습니다.';
      case 401:
        return '존재하지 않는 ID입니다.';
      case 402:
        return '비밀번호가 틀렸습니다.';
      default:
        return '알 수 없는 오류가 발생했습니다.';
    }
  };


  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setUserEmail(emailValue);
    dispatch(updateUsername(emailValue)); // Redux 상태 업데이트
    
    //const isValid = emailRegEx.test(emailValue);
    //setEmailValid(isValid);
  }

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    dispatch(updatePassword(passwordValue)); 

    //const isValid = passwordRegEx.test(passwordValue);
    //setPasswordValid(isValid);
  }

  const handleButtonClick = async (event) => {
    // eslint-disable-next-line no-mixed-operators
    // isEmailValid && isPasswordValid || useremail !== ""|| password !== ""
    if (useremail !== ""&& password !== "") {
      //setButtonActivated(true);
      dispatch(startLoading());

      try {
        const response = await axios.post(url, {
          id: useremail,
          pw: password,
        });

        if (response.data.code === 2000) {
          dispatch(loginSuccess(response.data.userInfo));
          console.log("로그인이 완료되었습니다");
          console.log(response);

          // 로그인 후에 토큰과 id 받아오고, 이를 local Storage에 저장하기
          const accessToken = response.data.result.AccessToken;
          const id = response.data.result.userId;
          //console.log(accessToken, id);

          localStorage.setItem('token', accessToken);
          localStorage.setItem('id', id);

          console.log('Token and id stored in local storage:', accessToken, id);

        } else {
          dispatch(loginFailure(response.data.code));
          alert('로그인 실패: ' + getErrorMessage(response.data.code));
          console.log(response);
        }
      } catch (error) {
        dispatch(loginFailure(500));
        console.log(error);
        alert('서버 오류가 발생했습니다.');
      } finally {
        
        setTimeout(() => {
          setButtonActivated(false);
          dispatch(stopLoading());
        }, 1500); // Wait for 1.5 secondss
      }
    } else {
      //setEmailValid(!isEmailValid);
      //setPasswordValid(!isPasswordValid);

      //setButtonActivated(false);

      // 빈 값이 있다면 alert를 사용하여 사용자에게 메시지 표시
      alert('이메일과 비밀번호를 모두 입력하세요.');
      
      // submit 이벤트의 기본 동작을 중단
      event.preventDefault();
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
        <button
          id='logbtn_check'
          onClick={(event) => handleButtonClick(event)}
          style={buttonStyle}
          disabled={!isEmailValid || !isPasswordValid || buttonActivated}
        >
          확인
        </button>
      </div>
      <div className='axios_load'>
        <p>{loading ? '로딩 중...' : '로딩 전'}</p>
      </div>
    </div>
  )
}