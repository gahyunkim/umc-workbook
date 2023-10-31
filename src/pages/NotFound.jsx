import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='notFound-wrap'>
      <div className='notFound-title'>해당 페이지를 찾지 못했습니다.</div>
      <div id='text'>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
      <div id='link' onClick ={()=>navigate('/')} >메인 페이지로 이동</div>
    </div>
  )
}
