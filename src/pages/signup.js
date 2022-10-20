import React, {useState, useEffect, useRef} from 'react';
import  styled  from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from './../components/footer';
import '../index.css'
import Login from './../components/loginModal';
SwiperCore.use([Navigation,Pagination,Autoplay]);

const Signup = () => {
  const navigate = useNavigate();

  const textStyle = {
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '1.6',
    color: '#000a12',
    fontWeight:'300'
  }

  const [type1, setType1] = useState('password');
  const [type2, setType2] = useState('password');

  let inputInit = [false, false, false]
  const [inputStatus, setInputStatus] = useState(inputInit);
  const [inputIn, setInputIn] = useState(false)
  const inputHandler = (n) => {
    inputInit[n-1] = true
    setInputStatus(inputInit)
    setInputIn(true)
  }

  const inputRef = useRef();
  useEffect(()=>{
    function handleOutside(e){
      if (inputRef.current && !inputRef.current.contains(e.target)){
        
          console.log(inputStatus)
          setInputStatus([false,false,false])
        
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () =>{
      document.removeEventListener("mousedown",handleOutside);
    }
  },[inputRef])

  const inputStyle = {
    border : '1px solid #00c471'
  }
  const [loginShow, setLoginShow] = useState(false);
  const getLoginShow = () => {
    setLoginShow(!loginShow);
  }
  return(
    <>
      <div style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
        <Header getLoginShow={getLoginShow}/>
      </div>
      {
        loginShow?
        <Login getLoginShow={getLoginShow}></Login>
        :
        <div></div>
      }
      <Main style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
        <SignForm>
          <Title>회원가입</Title>
          <Swiper modules={[Autoplay]} autoplay={{delay:3000}} loop speed={600}>
            <SwiperSlide style={textStyle}>성장에 목마를 때, 인프런</SwiperSlide>
            <SwiperSlide style={textStyle}>나의 온라인 사수, 인프런</SwiperSlide>
            <SwiperSlide style={textStyle}>인프런에서 가치를 높이세요</SwiperSlide>
            <SwiperSlide style={textStyle}>인프런에서 다양한 성장의 기회를 얻으세요</SwiperSlide>
            <SwiperSlide style={textStyle}>나의 성장을 돋는 IT 실무 지식 플랫폼</SwiperSlide>
          </Swiper>
          <Formsection ref={inputRef}>
            <Box>
              <label for="email">이메일</label>
              <Input type="email" placeholder='example@inflab.com' onMouseDown={()=>{inputHandler(1)}}
                    style={inputStatus[0]?inputStyle:{border:'1px solid #dee2eb'}}/>
            </Box>
            <Box>
              <label for="password">비밀번호</label>
              <Input type={type1} placeholder='******'  onMouseDown={()=>{inputHandler(2)}}
                    style={inputStatus[1]?inputStyle:{border:'1px solid #dee2eb'}}/>
              {
                type1==='password'?
                <i onClick={()=>{setType1('text')}} className="fa-solid fa-eye"></i>
                :
                <i onClick={()=>{setType1('password')}} class="fa-solid fa-eye-slash"></i>
              }
              {
                inputStatus[1]?
                <Ispan>영문/숫자/특수문자 2가지 이상 포함<br/>
                8자 이상 32자 이하 입력 (공백 제외)<br/>
                연속 3자 이상 동일한 문자/숫자 제외</Ispan>
                :
                <Ispan></Ispan>
              }
            </Box>
            <Box>
              <label>비밀번호 확인</label>
              <Input type={type2} placeholder='******' onMouseDown={()=>{inputHandler(3)}}
                  style={inputStatus[2]?inputStyle:{border:'1px solid #dee2eb'}}/>
              {
                type2==='password'?
                <i onClick={()=>{setType2('text')}} className="fa-solid fa-eye"></i>
                :
                <i onClick={()=>{setType2('password')}} class="fa-solid fa-eye-slash"></i>
              }

            </Box>
            <Button>
              가입하기
            </Button>
          </Formsection>
          <Policy>
            <span>
              가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다. <Blue>통합 계정</Blue> 및 서비스 이용약관 ( <Blue>인프런</Blue> / <Blue>랠릿</Blue> ), <Blue>개인정보취급방침</Blue>에 동의합니다
            </span>
            <Check>
              <Input type="checkbox" checked/>
              <label>통합회원 할인 혜택 및 유용한 채용 소식을 받아볼래요</label>
            </Check>
          </Policy>
          <Social>
            <hr/>
            <span>간편 회원가입</span>
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
            </BtnGroup>
          </Social>
        </SignForm>
        
      </Main>
      <div style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
        <Footer/>
      </div>
      
    </>
  )
}

export default Signup;

const Main = styled.section`
  height: 800px;
  width: 100%;
  margin-top: 64px;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  
`

const SignForm = styled.div`
  width: 320px;
  height: max-content;
  // background: yellow;
`

const Title = styled.div`
  color: #000a12;
  font-size: 26px;
  text-align: center;
  font-family: 'Pretendard-Medium'
`

const Formsection = styled.div`
  margin-top: 32px;

`

const Box = styled.div`
  position: relative;
  margin-bottom: 16px;
  &>label{
    color: #3e4042;
    font-size: 14px;
  }
  &>i{
    position: absolute;
    right: 12px;
    top: 42px;
    color: #3e4042;
    cursor: pointer;
  }
`

const Input = styled.input`
  margin: 4px 0px 0px;
  padding: 13px 12px;
  background: #ffffff;
  width: 320px;
  height: 48px;
  border: 1px solid #dee2eb;
  border-radius: 4px;
  &::-webkit-input-placeholder {
    color: #dee2e6
  }
`
const Ispan = styled.div`
  color: rgba(200,200,200);
  font-size: 12px;
`

const Button = styled.div`
  cursor: pointer;
  color: #ffffff;
  background: #00c471;
  margin: 32px 0px 12px;
  padding: 12px 16px;
  height: 48px;
  width: 320px;
  border-radius: 4px;
  font-family: 'Pretendard-bold';
  text-align: center;
  font-size: 15px;
  box-sizing: border-box;
`

const Policy = styled.div`
  width: 320px;
  height: 78px;
  color: #000a12;
  margin-bottom: 32px;
  font-size: 12px;
  letter-spacing: -.3px;
  &>span{
    color: #858a8d;
    margin: 0px 0px 6px;
    font-size: 12px;
  }
`

const Check = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
  height: 20px;
  font-size: 12px;
  color: #858a8d;
  &>label{
    margin-left: 4px;
  }
  &>input{
    width: 12px;
    height: 12px;
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
`

const Blue = styled.span`
  color: #1964d5;
`