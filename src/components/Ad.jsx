import React from 'react'
/*
Ad.jsx
광고를 출력하는 코드 => showAd가 true 이면 출력하고, false이면 null을 반환하도록 
*/

const Ad = ({ showAd }) => {
  if (showAd) {
    return <img src= "banner.svg" alt="bannerImg"/>;
  } else {
    return null;
  }
};

export default Ad;
