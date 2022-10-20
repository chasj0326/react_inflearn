import Header from '../components/header';
import Footer from '../components/footer';
import '../index.css'
import Login from '../components/loginModal';
import React,{useState} from 'react';
import styled from 'styled-components';

const FindPassword = () => {
  const [loginShow, setLoginShow] = useState(false);
  const getLoginShow = () => {
    setLoginShow(!loginShow);
  }
  return(
    <>
    {
      loginShow?
      <div style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
        <Header getLoginShow={getLoginShow}/>
      </div>
      :
      <Header getLoginShow={getLoginShow}/>
    }
    {
      loginShow?
      <Login getLoginShow={getLoginShow}></Login>
      :
      <div></div>
    }
    <Main style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
      <Box>
        <div>
          <h1>비밀번호 재설정</h1>
          <p>비밀번호를 잃어버리셨나요?<br/>인프런에 가입한 이메일을 정확히 입력해 주세요.<br/>이메일을 통해 비밀번호 변경 링크가 전송됩니다.</p>
        </div>
        <Form>
          <div>
            <input placeholder='example@gmail.com'/>
          </div>
          <button>인증 메일 전송하기</button>
        </Form>
      </Box>
    </Main>
    <div style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
      <Footer/>
    </div>
  </>
  )
}

export default FindPassword

const Main = styled.section`
  height: 800px;
  width: 100%;
  line-height: 1.5;
`
const Box = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px 0px;
  color: #212529;
  &>div{
    margin-bottom: 12px;
    text-align: center;
    color: #212529;
    line-height: 1.5;
  }
  &>div>h1{
    font-family: 'Pretendard-Bold';
    margin: 0 0 12px 0;
    font-size: 28px;
  }
  &>div>p{
    font-size: 16px;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  &>div{
    margin-bottom: 8px;
  }
  &>div>input{
    display: block;
    width: 300px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 2;
    color: #adb5bd;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &::placeholder{
      opacity: .5;
    }
  }
  &>div>input:focus{
    color: #adb5bd;
    background-color: #fff;
    border-color: #80e1b8;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(0 196 113 / 25%);
  }
  &>button{
    cursor: pointer;
    color: #ffffff;
    background: #00c471;
    padding: 6px 12px;
    height: 42px;
    width: 100%;
    border-radius: 4px;
    font-family: 'Pretendard-bold';
    text-align: center;
    font-size: 14px;
    box-sizing: border-box;
    &:focus{
      background-color: #26cd86;
      border-color: #1aca7f;
      box-shadow: 0 0 0 0.25rem rgb(0 167 96 / 50%);
    }
    &:hover{
      background-color: #26cd86;
      border-color: #1aca7f;
    }
  }
`