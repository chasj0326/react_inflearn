import Header from '../components/header';
import Footer from '../components/footer';
import '../index.css'
import Login from '../components/loginModal';
import React,{useState} from 'react';
import styled from 'styled-components';

const Courses = () => {
  const [loginShow, setLoginShow] = useState(false);
  const getLoginShow = () => {
    setLoginShow(!loginShow);
  }

  const lectureMenu = ['개발 · 프로그래밍', '보안 · 네트워크', '데이터 사이언스', '개임 개발', '크리에이티브', 
                '직무 · 마케팅', '학문 · 외국어', '커리어', '교양']
  
  const lectureMenuList = lectureMenu.map((item, idx)=>(
    <Item>
      {item}
      <i className="fa-solid fa-chevron-right"></i>
    </Item>
  ))
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
      <Container>
        <Columns>
          <Side>
            <Nav>
              <Item>전체 강의</Item>
              {lectureMenuList}
            </Nav>
          </Side>
          <Body>

          </Body>
        </Columns>
      </Container>
    </Main>
    <div style={loginShow?{filter:'blur(4px)'}:{filter:'blur(0)'}}>
      <Footer/>
    </div>
  </>
  )
}

export default Courses

const Main = styled.section`
  min-height: 800px;
  width: 100%;
  line-height: 1.5;
`
const Container = styled.div`
  padding: 32px 0px;
  color: #000a12;
  font-size: 16px;
  display: flex;
  justify-content: center;

`
const Columns = styled.div`
  display: flex;
  width: 1180px;
`
const Side = styled.aside`
  display: block;
  padding: 0;
  width: 196px;
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;
`
const Item = styled.div`
  cursor: pointer;
  position: relative;
  &:nth-child(1){
    border-top: 1px solid #e4e4e4;
  }
  border-bottom: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  color: #595959;
  background: #fafafa;
  font-family: 'Pretendard-Medium';
  display: inline-flex;
  padding: 11.5px 13.5px;
  border-radius: 0;
  white-space: nowrap;
  width: 100%;
  &>i{
    position: absolute;
    right: 12px;
    top: 18.5px;
    font-size: 11.5px;
  }
`

const Body = styled.div`
  width: 100%;
  height: 800px;
  border: 2px solid gray;
  box-sizing: border-box;
`