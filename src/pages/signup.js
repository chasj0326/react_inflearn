import React, {useState} from 'react';
import  styled  from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from './../components/footer';
import '../index.css'
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

  return(
    <>
      <Header/>
      <Main>
        <SignForm>
          <Title>회원가입</Title>
          <Swiper modules={[Autoplay]} autoplay={{delay:3000}} loop speed={600}>
            <SwiperSlide style={textStyle}>성장에 목마를 때, 인프런</SwiperSlide>
            <SwiperSlide style={textStyle}>나의 온라인 사수, 인프런</SwiperSlide>
            <SwiperSlide style={textStyle}>인프런에서 가치를 높이세요</SwiperSlide>
            <SwiperSlide style={textStyle}>인프런에서 다양한 성장의 기회를 얻으세요</SwiperSlide>
            <SwiperSlide style={textStyle}>나의 성장을 돋는 IT 실무 지식 플랫폼</SwiperSlide>
          </Swiper>
          <Formsection>
            <Box>
              <label for="email">이메일</label>
              <Input type="email" placeholder='example@inflab.com'/>
            </Box>
            <Box>
              <label for="password">비밀번호</label>
              <Input type={type1} placeholder='******'/>
              {
                type1==='password'?
                <i onClick={()=>{setType1('text')}} className="fa-solid fa-eye"></i>
                :
                <i onClick={()=>{setType1('password')}} class="fa-solid fa-eye-slash"></i>
              }
              
            </Box>
            <Box>
              <label>비밀번호 확인</label>
              <Input type={type2} placeholder='******'/>
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
              가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다. 통합 계정 및 서비스 이용약관 ( 인프런 / 랠릿 ), 개인정보취급방침에 동의합니다
            </span>
            <Check>
              <Input type="checkbox" checked/>
              <label>통합회원 할인 혜택 및 유용한 채용 소식을 받아볼래요</label>
            </Check>
            
          </Policy>
        </SignForm>
      </Main>
      <Footer/>
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