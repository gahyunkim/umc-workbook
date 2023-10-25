import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor() {
    super();
    this.state = {
      showAd: false, // 광고 표시 여부를 초기에 숨김으로 설정
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd, // 클릭할 때 광고 표시 여부를 토글
    }));
  };

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? '광고 안 보기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;
