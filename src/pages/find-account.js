import Header from '../components/header';
import Footer from './../components/footer';
import '../index.css'
import Login from './../components/loginModal';
import React,{useState} from 'react';
import styled from 'styled-components';

const FindAccount = () => {
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
              <h1>아이디(이메일) 찾기</h1>
              <p>계정에 등록된 휴대폰 번호를 인증하시면<br/>사용중인 계정의 이메일 주소를 알려드립니다.</p>
            </div>
            <InputBox>
              <label>
                휴대폰 번호 
                <span> * </span>
                (숫자만 입력)
              </label>
              <div>
                <Number>
                  <Select>+82</Select>
                  <svg class="display__icon-down" width="16" color="#3e4042" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16">
                    <path fill="#212529" fill-rule="evenodd" d="M12.77 5.563c.196.195.196.512 0 .707l-4.166 4.167c-.195.195-.512.195-.707 0L3.73 6.27c-.195-.195-.195-.512 0-.707.195-.195.512-.195.707 0L8.25 9.376l3.813-3.813c.196-.195.512-.195.707 0z" clip-rule="evenodd">
                  </path></svg>
                  <Input placeholder='010123241234'></Input>
                </Number>
                <Button>인증요청</Button>
              </div>
            </InputBox>
          </Box>
        </Main>
        <div style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
          <Footer/>
        </div>
      </>
  )
}

export default FindAccount;

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
    margin-bottom: 32px;
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
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  &>label{
    margin: 0px 0px 4px;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 4px;
    color: #858a8d;
  }
  &>label>span{
    color: #e5503c;
    display: inline-block;
    position: relative;
    top: 1px;
    width: 15px;
  }
  &>div{
  display: flex;
  align-items: center;
  }
`
const Number = styled.div`
  display: flex;
  padding: 10px 12px;
  width: 200px;
  height: 40px;
  letter-spacing: -.3px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: #fff;
  aling-items: center;
`

const Select = styled.div`
  position: relative;
  bottom: 1px;
  margin-right: 2px;
`

const Input = styled.input`
  padding: 0;
  width: 100%;
  line-height: 1.43;
  letter-spacing: -.3px;
  font-size: 14px;
  border: 0;
  background: none;
  &::placeholder{
    opacity:.5;
  }
`

const Button = styled.button`
  border-radius: 4px;
  border: 1px solid #d5dbe2;
  color: #495057;
  background-color: #fff;
  margin-left: 8px;
  padding: 0 12px;
  height: 40px;
  line-height: 1.43;
  font-size: 14px;
  letter-spacing: -.3px;
`