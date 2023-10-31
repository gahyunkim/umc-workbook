import React, { useState } from 'react';

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='login-container'>
      {isLoggedIn ? (
        <div className='login-wrap'>
          <button onClick={handleLogoutClick}>로그아웃</button>
          <p>환영합니다!</p>
        </div>
      ) : (
        <div className='login-wrap'>
          <button onClick={handleLoginClick}>로그인</button>
          <p>로그인 해주세요!</p>
        </div>
      )}
    </div>
  );
};

export default LoginControl;

/*
//useState를 사용하지 않은 코드 구성
import React, { Component } from 'react';

class LoginControl extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className='login-container'>
        {isLoggedIn ? (
          <div className='login-wrap'>
            <button onClick={this.handleLogoutClick}>로그아웃</button>
            <p>환영합니다!</p>
          </div>
        ) : (
        <div className='login-wrap'>
            <button onClick={this.handleLoginClick}>로그인</button>
            <p>로그인 해주세요!</p>
        </div>
        )}
      </div>
    );
    }
}

export default LoginControl;
*/
