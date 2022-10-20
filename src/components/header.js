import styled from "styled-components";
import React, { useState } from "react";
import '../index.css'
import '../pages/home.css'
import App from './../App';
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const firstStatus = [false, false, false];
  const secondStatus = [false, false, false, false, false, false, false, false, false];
  const [firstDropOpen, setFirstDropOpen] = useState(firstStatus);
  const [secondDropOpen, setSecondDropOpen] = useState(secondStatus);

  const lectureMenu = ['개발 · 프로그래밍', '보안 · 네트워크', '데이터 사이언스', '개임 개발', '크리에이티브', 
                '직무 · 마케팅', '학문 · 외국어', '커리어', '교양']
  const commuMenu = ['질문 & 답변', '자유주제', '스터디', '블로그']
  const inflMenu = ['수강평', '멘토링 후기', '공지사항', '인프런 스토리', '인프런 소개', '강의 기능 요청']

  const secondDrop = [
    ['웹 개발', '프론트엔드', '백엔드', '풀스택', '모바일 앱 개발', '게임 개발', 
    '프로그래밍 언어', '알고리즘 · 자료구조', '데이터베이스', '데브옵스 · 인프라', '자격증', '개발도구'],
    ['보안', '시스템', '클라우드', '블록체인', '자격증', '기타'],
    ['데이터 분석', '인공지능', '데이터 시각화', '데이터 수집 · 처리', '자격증', '기타'],
    ['게임 프로그래밍', '게임 기획', '게임 아트 · 그래픽', '기타', '청강대 게임스쿨'],
    ['CAD · 3D 모델링', '웹 퍼블리싱', 'UX/UI', '그래픽 디자인', '디자인 툴', '사진 · 영상', '자격증',
    'VR/AR', '사운드', '기타'],
    ['오피스', '마케팅', '기획 · 전략 · PM', '자격증', '업무 자동화', '금융 · 경영', '기타'],
    ['수학', '외국어', '기타'],
    ['취업 · 이직', '개인 브랜딩', '창업', '기타'],
    ['교양']
  ]

  

  const listedItem = (list) => {
    return(
      list.map((item)=>(
        <Item>{item}</Item>
      ))
    )
  }
  
  const handleShow1 = (num) => {
    let arr = [...firstStatus];
    arr[num] = true;
    setFirstDropOpen(arr);
  }
  const handleHide1 = (num) => {
    let arr = [...firstStatus];
    arr[num] = false;
    setFirstDropOpen(arr);
  }
  const handleShow2 = (num) => {
    let arr = [...secondStatus];
    arr[num] = true;
    setSecondDropOpen(arr);
  }
  const handleHide2 = (num) => {
    let arr = [...secondStatus];
    arr[num] = false;
    setSecondDropOpen(arr);
  }

  const lectureMenuList = lectureMenu.map((item, idx)=>(
    <Item onMouseOver={()=>{handleShow2(idx)}} onMouseOut={()=>{handleHide2(idx)}}>{item}
    {
      secondDropOpen[idx]?
      <>
        <DropList className="depth2">
          <List>
            {listedItem(secondDrop[idx])}
          </List>
        </DropList>
      </>
      :
      <></>
    }
    </Item>
  ))

  const navigate = useNavigate();
  const [blur, setBlur] = useState(false);
  const sendLoginShow = () => {
    props.getLoginShow(true)
  }

  return(
    <>
      {/* TOP */}
      <header>
        <div className="header-inner">
          <ul className="header-box">
            <li className="header-box-option">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4702 7.30208C16.1056 6.46354 15.6135 5.71615 14.9937 5.07813C14.3558 4.4401 13.6267 3.92969 12.7882 3.5651C11.9497 3.20052 11.0383 3 10.0723 3C9.12446 3 8.21308 3.16406 7.35638 3.52865C6.49969 3.89323 5.75236 4.38542 5.09617 5.00521C4.43998 5.64323 3.92961 6.3724 3.56505 7.21094C3.2005 8.04948 3 8.96094 3 9.92708C3 10.875 3.16405 11.7865 3.5286 12.6432C3.89315 13.5 4.38529 14.2474 5.02326 14.9036C5.66122 15.5599 6.40855 16.0703 7.24702 16.4349C8.10371 16.7995 8.99686 17 9.96292 17H16.9988V10.0365C17.017 9.07031 16.8347 8.15885 16.4702 7.30208ZM7.79384 15.1406C7.11943 14.849 6.51792 14.4297 6.00755 13.9193C5.49717 13.3906 5.09617 12.7891 4.80453 12.1146C4.51289 11.4219 4.38529 10.7109 4.38529 9.94531C4.38529 9.16146 4.54934 8.43229 4.84098 7.75781C5.13262 7.08333 5.55186 6.5 6.06223 5.98958C6.59083 5.47917 7.19234 5.09635 7.86676 4.80469C8.5594 4.51302 9.27028 4.38542 10.0358 4.38542C10.8196 4.38542 11.5487 4.54948 12.2231 4.84115C12.8976 5.13281 13.4808 5.53385 13.9912 6.0625C14.5016 6.57292 14.8844 7.17448 15.176 7.84896C15.4676 8.52344 15.5952 9.25261 15.5952 10.0365V14.7396L10.5644 9.65365L11.6763 6.59115C11.8039 6.26302 11.6216 5.89844 11.2935 5.77083C10.9654 5.64323 10.6009 5.82552 10.4733 6.15365L9.58015 8.63281L8.01258 7.04688C7.75739 6.79167 7.35638 6.79167 7.11943 7.04688C6.86424 7.30208 6.86424 7.70313 7.11943 7.9401L10.9472 11.8594H8.17662C7.8303 11.8594 7.53866 12.151 7.53866 12.4974C7.53866 12.8438 7.8303 13.1354 8.17662 13.1354H12.1502C12.1685 13.1354 12.1867 13.1354 12.1867 13.1354L14.6656 15.6146H9.96292C9.17914 15.5964 8.48649 15.4505 7.79384 15.1406Z" fill="#00C471"></path>
              </svg>
              <div className="fw-b">교육</div>
            </li>
            <li className="header-box-option">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.7626C3 7.3177 5.76662 4.52502 9.17943 4.52502H12.7955V7.11248H9.17943C7.1823 7.11248 5.56332 8.74672 5.56332 10.7626C5.56332 12.7786 7.1823 14.4128 9.17943 14.4128C11.1765 14.4128 12.7955 12.7786 12.7955 10.7626V7.11248H15.3589V10.7626C15.3589 14.2076 12.5922 17.0003 9.17943 17.0003C5.76662 17.0003 3 14.2076 3 10.7626Z" fill="#858A8D"></path>
                <path d="M15.4272 5.91089C16.2235 5.91089 16.8691 5.25927 16.8691 4.45545C16.8691 3.65163 16.2235 3 15.4272 3C14.6309 3 13.9854 3.65163 13.9854 4.45545V5.91089H15.4272Z" fill="#858A8D"></path>
              </svg>
              <div className="fw-m">채용</div>
            </li>
          </ul>
          <div className="header-box">
            지식공유 참여
          </div>
        </div>
      </header>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-content">
            <div onClick={()=>{navigate('/')}} className="nav-brand_logo" onclick="location.href='index.html'">
              <svg width="110" id="icon_brand_logo"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 90"><path className="A" d="M79.1 31.6c-2-4.6-4.7-8.7-8.1-12.2-3.5-3.5-7.5-6.3-12.1-8.3S49.3 8 43.9 8c-5.2 0-10.2.9-14.9 2.9s-8.8 4.7-12.4 8.1c-3.6 3.5-6.4 7.5-8.4 12.1A37.14 37.14 0 0 0 5.1 46c0 5.2.9 10.2 2.9 14.9s4.7 8.8 8.2 12.4 7.6 6.4 12.2 8.4c4.7 2 9.6 3.1 14.9 3.1l38.3.3.3-38.5c.1-5.3-.9-10.3-2.8-15zM74 77.4l-30.7-.3c-4.2 0-8.2-.9-11.9-2.5s-7-3.9-9.8-6.7A32.99 32.99 0 0 1 15 58c-1.6-3.8-2.3-7.7-2.3-11.9 0-4.3.9-8.3 2.5-12s3.9-6.9 6.7-9.7c2.9-2.8 6.2-4.9 9.9-6.5 3.8-1.6 7.7-2.3 11.9-2.3 4.3 0 8.3.9 12 2.5s6.9 3.8 9.7 6.7c2.8 2.8 4.9 6.1 6.5 9.8s2.3 7.7 2.3 12L74 77.4z"></path><path className="A" d="M76.9 83.7c-.9 0-1.8-.3-2.5-1L27.6 35.1c-1.4-1.4-1.3-3.6 0-4.9 1.4-1.4 3.6-1.3 4.9 0l46.8 47.6c1.4 1.4 1.3 3.6 0 4.9-.6.7-1.5 1-2.4 1z"></path><path className="A" d="M43.1 47.3c-.4 0-.8-.1-1.2-.2-1.8-.7-2.8-2.7-2.1-4.5l6.3-17.3c.7-1.8 2.7-2.8 4.5-2.1s2.8 2.7 2.1 4.5L46.4 45c-.5 1.4-1.9 2.3-3.3 2.3zm12.2 16.2H33.5C31.6 63.5 30 62 30 60c0-1.9 1.6-3.5 3.5-3.5h21.8c1.9 0 3.5 1.6 3.5 3.5 0 2-1.5 3.5-3.5 3.5zm44.1-32.4V85H88.8V31.1h10.6zm5.6 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5zm76.1-26.2c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v5.5h21.6v10.7h-21.6V85h-10.7V36.4c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.3v10.7h-5.3c-2.1 0-4.2.4-6.2 1.2zm43.2-11.9V85h-10.7V9.5h10.7zM270.5 66l7.6 7.6-3.7 3.7c-2.6 2.6-5.5 4.5-8.8 5.9s-6.7 2-10.3 2-7-.7-10.3-2c-3.3-1.4-6.2-3.3-8.8-5.9s-4.6-5.6-5.9-8.9-1.9-6.7-1.9-10.1.6-6.8 1.9-10.1 3.2-6.2 5.9-8.9c2.6-2.6 5.6-4.6 8.9-5.9s6.7-2 10.1-2 6.8.7 10.1 2 6.3 3.3 8.9 5.9l3.7 3.7L248 72.9c3 1.5 6.3 2 9.7 1.5s6.4-2.1 8.9-4.6l3.9-3.8zm-26.8-19.3c-3.2 3.2-4.8 7-4.8 11.5 0 2.5.6 4.8 1.7 7.1l10.6-10.6 6.4-6.3 4.7-4.7c-3-1.5-6.3-2-9.7-1.6-3.3.5-6.3 2.1-8.9 4.6zm64.8-15.6c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.5 5.8a27.88 27.88 0 0 1 5.8 8.5c1.4 3.2 2.1 6.7 2.1 10.5v27h-26.9c-3.7 0-7.2-.7-10.4-2.1-3.3-1.4-6.2-3.3-8.6-5.8-2.5-2.5-4.4-5.4-5.8-8.6-1.4-3.3-2.1-6.8-2.1-10.4 0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.5 6.8-2.2 10.4-2.2zm16.2 43.2V58c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.3-1.3s-4.4.4-6.4 1.3c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3s.4 4.4 1.3 6.4c.8 2 2 3.7 3.5 5.2s3.2 2.6 5.2 3.5c2 .8 4.1 1.3 6.4 1.3h16.3zm46.2-43.2v10.7h-5.4c-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.8V58c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.6zm5.3 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5z"></path><title>인프런 브랜드 로고</title></svg>
            </div>
            <div className="nav-menu">
              <div className="nav-item" onMouseOver={()=>{handleShow1(0)}} onMouseOut={()=>{handleHide1(0)}}>
                <NavItem>강의</NavItem>
                {
                  firstDropOpen[0]?
                  <>
                    <Arrow></Arrow>
                    <DropList className="lecture-drop depth1">
                      <List>
                        {lectureMenuList}
                      </List>
                    </DropList>
                  </>
                  :
                  <></>
                }
              </div>
              <div className="nav-item"><NavItem>로드맵</NavItem></div>
              <div className="nav-item"><NavItem>멘토링</NavItem></div>
              <div className="nav-item" onMouseOver={()=>{handleShow1(1)}} onMouseOut={()=>{handleHide1(1)}}>
                <NavItem>커뮤니티</NavItem>
                {
                  firstDropOpen[1]?
                  <>
                    <Arrow className="second"></Arrow>
                    <DropList className="commu-drop depth1">
                      <List>
                        {listedItem(commuMenu)}
                      </List>
                    </DropList>
                  </>
                  :
                  <></>
                }
              </div>
              <div className="nav-item" onMouseOver={()=>{handleShow1(2)}} onMouseOut={()=>{handleHide1(2)}}>
                <NavItem>인프런</NavItem>
                {
                  firstDropOpen[2]?
                  <>
                    <Arrow className="third"></Arrow>
                    <DropList className="infl-drop depth1">
                      <List>
                        {listedItem(inflMenu)}
                      </List>
                    </DropList>
                  </>
                  :
                  <></>
                }
              </div>
            </div>
          </div>
          <div className="nav-forms">
            <div className="nav-searchbar">
              <input type="text"/>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="nav-btns">
              <button className="btn-login" onClick={sendLoginShow}>로그인</button>
              <button className="btn-signup" onClick={()=>{navigate('/signup')}}>회원가입</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;

const NavItem = styled.span`
  &:hover{
    color: #1dc078;
  }
`
const Arrow = styled.div`
  position: absolute;
  top: 33px;
  width: 40px;
  height: 20px;
  z-index: 991;
  left: 10px;
  &.second{
    left: 20px;
  }
  &.third{
    left: 17px;
  }
  &::before{
    left: 10px;
    content: '';
    position: absolute;
    width: 20px;
    height: 8px;
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid rgba(0, 0, 0, .8);
  }
  &::after{
    left: 10px;
    content: '';
    position: absolute;
    width: 20px;
    height: 8px;
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid #ffffff;
  }
`

const DropList = styled.div`
  position: absolute;
  top: 46px;
  padding: 15px;
  box-sizing: border-box;
  z-index: 990;
  background: #ffffff;
  box-shadow: 8px 5px 8px 1px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
  &.depth2{
    width: 180px;
    height: 410px;
    top: 0px;
    left: 180px;
  }
  &.lecture-drop{
    width: 180px;
    height: 410px;
    left: -1px;
    padding-right: 0px;
  }
  &.commu-drop{
    white-space: nowrap;
    padding-bottom: 0;
    right: 5px;
  }
  &.infl-drop{
    white-space: nowrap;
    padding-bottom: 0;
    right: 5px;
  }
 
  
  &.lecture-drop::after,
  &.lecture-drop::before{
    left: 21px;
  }
  &.commu-drop::after,
  &.commu-drop::before{
    left: 45px;
  }
  &.infl-drop::after,
  &.infl-drop::before{
    right: 21px;
  }
`

const List = styled.ul`
  color: #4a4a4a;
`

const Item = styled.li`
  padding-bottom: 16px;
  font-size: 14px;
  &>span{
    display: inline-block;
    width: 100%;
  }
`