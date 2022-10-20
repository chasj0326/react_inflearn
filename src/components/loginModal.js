import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import '../index.css'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const sendLoginShow = () => {
    props.getLoginShow(false)
  }
  const modalRef = useRef();
  useEffect(()=>{
    function handleOutside(e){
      if (modalRef.current && !modalRef.current.contains(e.target)){
          sendLoginShow()
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () =>{
      document.removeEventListener("mousedown",handleOutside);
    }
  },[modalRef])

  const [type1, setType1] = useState('password');
  return(
    <>
      <Background>
        <Modal ref={modalRef}>
          <CloseBtn onClick={sendLoginShow}>
            <svg width="16px" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#3E4042" fill-rule="evenodd" d="M.203.203c.27-.27.708-.27.979 0L6 5.02 10.818.203c.27-.27.709-.27.98 0 .27.27.27.708 0 .979L6.978 6l4.818 4.818c.27.27.27.709 0 .98-.27.27-.709.27-.979 0L6 6.978l-4.818 4.818c-.27.27-.709.27-.98 0-.27-.27-.27-.709 0-.979L5.022 6 .203 1.182c-.27-.27-.27-.709 0-.98z" clip-rule="evenodd"></path></svg>
          </CloseBtn>
          <Logo>
            <LogoImage src='/image/inflearn_logo.png'></LogoImage>
          </Logo>
          <FormSection>
            <Box>
              <Input placeholder="이메일"/>
            </Box>
            <Box>
              <Input type={type1} placeholder='비밀번호'/>
              {
                type1==='password'?
                <i onClick={()=>{setType1('text')}} className="fa-solid fa-eye"></i>
                :
                <i onClick={()=>{setType1('password')}} class="fa-solid fa-eye-slash"></i>
              }
            </Box>
            <Button>
              로그인
            </Button>
          </FormSection>
          <Others>
              <span onClick={()=>{navigate('/find-account')}}>아이디(이메일) 찾기</span>
              <span className="divider"></span>
              <span onClick={()=>{navigate('/find-password')}}>비밀번호 찾기</span>
              <span className="divider"></span>
              <span onClick={()=>{navigate('/signup')}}>회원가입</span>
          </Others>
          <Social>
              <hr/>
              <span>간편 로그인</span>
              <BtnGroup>
                <Btn onClick={()=>window.open('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=0de1184063abadc9cef9dbf417c567a5&redirect_uri=https%3A%2F%2Fwww.inflearn.com%2Fauth%2Fkakao&scope=profile%2Caccount_email%2Cbirthday%2Cbirthyear%2Cphone_number%2Cage_range%2Cgender&state=%7B%22prev_url%22%3A%22https%3A%2F%2Fwww.inflearn.com%2Fsignin%3FreferUrl%3Dhttps%253A%252F%252Fwww.inflearn.com%252Ffind-account%22%7D','_target')}>
                  <svg width="18px" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 18 17">
                    <g transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)" stroke="none">
                      <path fill="#212529" d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"></path>
                    </g>
                  </svg>
                </Btn>
                <Btn onClick={()=>window.open('https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=887875630717-ror9t8ig4obhvokdij07eoochpqbu5kf.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.inflearn.com%2Fauth%2Fgoogle&state=%7B%22prev_url%22%3A%22https%3A%2F%2Fwww.inflearn.com%2Fsignin%3FreferUrl%3Dhttps%253A%252F%252Fwww.inflearn.com%252Ffind-account%22%7D','_target')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                    <path fill="#4285F4" d="M17.785 9.169c0-.738-.06-1.276-.189-1.834h-8.42v3.328h4.942c-.1.828-.638 2.073-1.834 2.91l-.016.112 2.662 2.063.185.018c1.694-1.565 2.67-3.867 2.67-6.597z"></path>
                    <path fill="#34A853" d="M9.175 17.938c2.422 0 4.455-.797 5.94-2.172l-2.83-2.193c-.758.528-1.774.897-3.11.897-2.372 0-4.385-1.564-5.102-3.727l-.105.01-2.769 2.142-.036.1c1.475 2.93 4.504 4.943 8.012 4.943z"></path>
                    <path fill="#FBBC05" d="M4.073 10.743c-.19-.558-.3-1.156-.3-1.774 0-.618.11-1.216.29-1.774l-.005-.119L1.254 4.9l-.091.044C.555 6.159.206 7.524.206 8.969c0 1.445.349 2.81.957 4.026l2.91-2.252z"></path>
                    <path fill="#EB4335" d="M9.175 3.468c1.684 0 2.82.728 3.468 1.335l2.531-2.471C13.62.887 11.598 0 9.175 0 5.667 0 2.638 2.013 1.163 4.943l2.9 2.252c.727-2.162 2.74-3.727 5.112-3.727z"></path>
                  </svg>
                </Btn>
                <Btn onClick={()=>window.open('https://github.com/login/oauth/authorize?response_type=code&client_id=5fd8e44b142806d9cbea&redirect_uri=https%3A%2F%2Fwww.inflearn.com%2Fauth%2Fgithub&scope=user%3Aemail&state=%7B%22prev_url%22%3A%22https%3A%2F%2Fwww.inflearn.com%2Fsignin%3FreferUrl%3Dhttps%253A%252F%252Fwww.inflearn.com%252Ffind-account%22%7D','_target')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                    <path fill="#fff" fill-rule="evenodd" d="M6.02 14.494c0 .074-.083.134-.188.134-.12.01-.203-.049-.203-.134 0-.075.083-.134.188-.134.11-.012.204.048.204.134zm-1.128-.168c-.025.074.047.16.156.182.094.038.203 0 .225-.074.022-.074-.047-.16-.156-.193-.094-.027-.2.01-.225.085zm1.604-.063c-.105.026-.178.097-.167.182.01.075.105.123.214.097.105-.026.178-.097.167-.171-.01-.071-.109-.12-.214-.108zM8.884 0C3.85 0 0 3.92 0 9.082c0 4.127 2.533 7.66 6.151 8.903.465.085.628-.209.628-.45 0-.231-.01-1.504-.01-2.286 0 0-2.541.558-3.075-1.109 0 0-.413-1.083-1.009-1.362 0 0-.83-.585.059-.574 0 0 .903.075 1.4.96.795 1.438 2.127 1.024 2.646.779.083-.596.32-1.009.58-1.255-2.028-.23-4.075-.532-4.075-4.112 0-1.024.276-1.538.857-2.193-.095-.242-.403-1.24.094-2.527.758-.242 2.504 1.005 2.504 1.005.726-.208 1.506-.316 2.279-.316.773 0 1.553.108 2.28.316 0 0 1.745-1.25 2.503-1.005.497 1.292.189 2.285.095 2.527.58.66.936 1.173.936 2.193 0 3.591-2.138 3.878-4.166 4.112.334.294.617.853.617 1.727 0 1.255-.011 2.807-.011 3.112 0 .242.167.536.628.45C15.54 16.742 18 13.21 18 9.082 18 3.919 13.917 0 8.884 0zM3.527 12.837c-.047.037-.036.123.026.194.058.06.141.085.189.037.047-.037.036-.123-.026-.194-.058-.06-.141-.085-.189-.037zm-.392-.301c-.025.048.011.108.084.145.058.037.13.026.156-.026.025-.048-.01-.108-.083-.145-.073-.023-.131-.011-.157.026zm1.176 1.325c-.058.048-.036.16.047.23.084.086.19.097.236.038.048-.049.026-.16-.047-.231-.08-.086-.189-.097-.236-.037zm-.413-.547c-.058.037-.058.134 0 .22.058.085.156.122.203.085.058-.049.058-.145 0-.23-.051-.086-.145-.124-.203-.075z" clip-rule="evenodd"></path>
                  </svg>
                </Btn>
                <Btn onClick={()=>window.open('https://facebook.com/dialog/oauth?response_type=code&client_id=1101702136522636&redirect_uri=https%3A%2F%2Fwww.inflearn.com%2Fauth%2Ffacebook&scope=email&state=%7B%22prev_url%22%3A%22https%3A%2F%2Fwww.inflearn.com%2Fsignin%3FreferUrl%3Dhttps%253A%252F%252Fwww.inflearn.com%252Ffind-account%22%7D','_target')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" fill="none" viewBox="0 0 10 18">
                    <path fill="#fff" fill-rule="evenodd" d="M8.91 10.125l.467-3.258H6.459V4.753c0-.89.407-1.76 1.714-1.76H9.5V.22S8.296 0 7.145 0C4.742 0 3.171 1.56 3.171 4.385v2.482H.5v3.258h2.671V18H6.46v-7.875H8.91z" clip-rule="evenodd"></path>
                  </svg>
                </Btn>
                <Btn onClick={()=>window.open('https://appleid.apple.com/auth/authorize?client_id=com.inflab.inflearn.web&redirect_uri=https%3A%2F%2Fwww.inflearn.com%2Fauth%2Fapple&response_type=code+id_token&scope=email%20name&response_mode=form_post&state=%7B%22prev_url%22%3A%22https%3A%2F%2Fwww.inflearn.com%2Fsignin%3FreferUrl%3Dhttps%253A%252F%252Fwww.inflearn.com%252Ffind-account%22%7D','_target')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" fill="none" viewBox="0 0 15 18">
                    <path fill="#000" fill-rule="evenodd" d="M12.541 9.512c-.008-1.475.654-2.588 1.993-3.408-.75-1.08-1.881-1.676-3.376-1.792-1.414-.113-2.96.832-3.526.832-.598 0-1.97-.792-3.045-.792C2.363 4.388 0 6.14 0 9.705c0 1.053.191 2.14.574 3.263.51 1.475 2.351 5.091 4.272 5.031 1.004-.024 1.714-.72 3.02-.72 1.268 0 1.925.72 3.045.72 1.937-.028 3.603-3.315 4.089-4.794-2.598-1.234-2.459-3.617-2.459-3.693zm-2.255-6.599c1.088-1.302.988-2.487.956-2.913-.96.056-2.072.659-2.706 1.402-.697.796-1.108 1.78-1.02 2.89 1.04.08 1.989-.458 2.77-1.379z" clip-rule="evenodd"></path>
                  </svg>
                </Btn>
              </BtnGroup>
          </Social>
        </Modal>
      </Background>
    </>
  )
}

export default Login

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(11,19,30,.37);
  z-index: 990;
`

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  margin: auto;
  width: 360px;
  height: 432px;
  background-color: #fff;
  border-radius: 6px;
  z-index: 999;
`

const CloseBtn = styled.div`
  width: min-content;
  margin-right: 0px;
  margin-left: auto;
  cursor: pointer;
`

const Logo = styled.div`
  margin: 12px 0 24px;
  text-align: center;
`
const LogoImage = styled.img`
  width: 120px;
`
const FormSection = styled.div`

`
const Box = styled.div`
  position: relative;
  &>label{
    color: #3e4042;
    font-size: 14px;
  }
  &>i{
    position: absolute;
    right: 12px;
    top: 18px;
    color: #3e4042;
    cursor: pointer;
  }
`
const Input = styled.input`
  margin: 0px 0px 12px;
  padding: 13px 12px;
  background: #ffffff;
  width: 100%;
  height: 48px;
  border: 1px solid #dee2eb;
  border-radius: 4px;
  &::-webkit-input-placeholder {
    color: #dee2e6
  }
`
const Button = styled.div`
  cursor: pointer;
  color: #ffffff;
  background: #00c471;
  margin: 12px 0px 12px;
  padding: 0px 12px;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  font-family: 'Pretendard-bold';
  text-align: center;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
const Others = styled.p`
  margin: 0px 0px 24px;
  font-family: 'Pretendard-Regular';
  font-weight: 200;
  text-align: center;
  color: #858a8d;
  font-size: 13px;
  &>span{
    cursor:pointer;
    border-bottom: 1px solid #858a8d;
    padding-bottom: 2px;
  }
  &>.divider{
    display: inline-block;
    margin: 0 8px;
    width: 1px;
    height: 10px;
    background-color: #858a8d;
    pointer-events: none;
  }
`

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &>hr{
    position: relative;
    bottom: -8px;
    display: block;
    height: 1px;
    width: 100%;
    background-color: #f1f3f5;
    border: none;
  }
  &>span{
    padding: 0 8px;
    margin-bottom: 16px;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -.3px;
    color: #abb0b5;
    z-index: 11;
    background-color: #fff;
  }
`
const BtnGroup = styled.div`
  display: flex;
  column-gap: 12px;
  margin-auto;
`
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  &:nth-child(1){
    background-color: #fae500;
  }
  &:nth-child(2){
    background-color: #f8f8f8;
  }
  &:nth-child(3){
    background-color: #3c4043;
  }
  &:nth-child(4){
    background-color: #325ca6;
  }
  &:nth-child(5){
    background-color: #fff;
  }
`