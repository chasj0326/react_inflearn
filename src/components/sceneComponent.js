import styled from "styled-components";
import React, { useState, useEffect } from "react";
import '../index.css'
import App from './../App';
const Scene = () => {
  const [index, setIndex] = useState(1);
  const [play, setPlay] = useState(true);
  const pageItems = [
    '인프콘 다시보기', 'Top 50 👑', '신규 강의 🎁', '지식공유신청', '왕초보 모여라 😎', '입문 로드맵', '인프런 동료 찾기' , '인프런은 🌱', 
  ];
  const slideItems = [
    {
      background : '#000000',
      color: '#ffffff',
      tag: '인프콘 다시보기',
      tagbackground: '#00b3ff',
      tagcolor: '#ffffff',
      main: 'INFCON 2022의 뜨거웠던 열기!\n온라인에서 다시 만나보세요 🔥',
      sub: '오프닝부터 발표 세션 영상 28개,\n토크콘서트 영상과 클로징까지!',
      image: 'scene1.png'
    },
    {
      background : '#d2d9dd',
      color: '#000000',
      tag: '오늘 뭐 듣지?',
      tagbackground: '#1044ff',
      tagcolor: '#ffffff',
      main: '무슨 강의 들을지 고민이라면?\n현직자 Top 50 먼저 보기 👀',
      sub: '입문부터 실전까지!\n믿고 보는 실무자 Pick',
      image: 'scene2.gif'
    },
    {
      background : '#ff7836',
      color: '#ffffff',
      tag: '신규 강의',
      tagbackground: '#007bf8',
      tagcolor: '#ffffff',
      main: '나만 몰랐었던 이 강의~♬',
      sub: '매일 업데이트 되는\n인프런 신규강의를 만나보세요!',
      image: 'scene3.gif'
    },
    {
      background : '#086394',
      color: '#ffffff',
      tag: '지식공유신청',
      tagbackground: '#00de84',
      tagcolor: '#000000',
      main: '나누는 지식만큼\n커지는 보람과 보상',
      sub: '인프런 지식공유자로\n높은 수익과 가치를 만들어보세요.',
      image: 'scene4.gif'
    },
    {
      background : '#00d078',
      color: '#000000',
      tag: '',
      tagbackground: '',
      tagcolor: '',
      main: '뭘 들어야 하지? 🤔\n나에게 딱 맞는 입문 강의', 
      sub: '어디서부터 시작해야 할지 모르는\n당신을 위한 입문 강의',
      image: 'scene5.png'
    },
    {
      background : '#38e5ff',
      color: '#000000',
      tag: '추천 학습 로드맵',
      tagbackground: '#6344ec',
      tagcolor: '#ffffff',
      main: '왕초보를 위한\nLv. 1 인프런 로드맵 📖',
      sub: '인프런이 처음이라면, 길라잡이가 되어드릴게요.',
      image: 'scene6.gif'
    },
    {
      background : '#00c471',
      color: '#ffffff',
      tag: '함께해요',
      tagbackground: '#00dfff',
      tagcolor: '#ffffff',
      main: '함께 성장할\n동료를 찾아요 🌿',
      sub: '#우리 #함께성장해요\n#동료여어디계신가요?',
      image: 'scene8.gif'
    },
    {
      background : '#59cf92',
      color: '#ffffff',
      tag: '인프런 소개',
      tagbackground: '#ffffff',
      tagcolor: '#59cf92',
      main: '우리는 성장기회의\n평등을 추구합니다.',
      sub: '누구나 배움의 기회를 누리고 꿈을 이룰 수 있도록!\n인프런과 함께 배우고, 나누고, 성장하세요.',
      image: 'scene7.png'
    },
  ]
  const slideItemsList = slideItems.map((slideItem,idx)=>(
    <Slide style={{transform: `translate(${(index-1)*-100}%,0)`, backgroundColor: `${slideItem.background}`}}>
      <Container className="scene-container" style={{ backgroundColor: `${slideItem.background}`}}>
        <InfoCard>
          {
            slideItem.tag?
            <Tag style={{backgroundColor: `${slideItem.tagbackground}`, color: `${slideItem.tagcolor}`}}>
              {slideItem.tag}
            </Tag>
            :
            <Tag style={{display:'none'}}></Tag>
          }
          <Main style={{color: `${slideItem.color}`}}>
            {slideItem.main}
          </Main>
          <Sub style={{color: `${slideItem.color}`}}>
            {slideItem.sub}
          </Sub>
        </InfoCard>
        <ImageCard>
          <img src={`/image/${slideItem.image}`}/>
        </ImageCard>
      </Container>
    </Slide>
  ))
  const clickedItemStyle = {
    color: '#00c471',
    boxShadow: 'inset 0 0 0 2px #00c471'
  }
  const PageItemsList = pageItems.map((pageItem, idx)=>(
    idx+1===index ?
    <PageItem onClick={()=>{setIndex(idx+1)}} style={ clickedItemStyle }>{pageItem}</PageItem>
    :
    <PageItem onClick={()=>{setIndex(idx+1)}}>{pageItem}</PageItem>
  ))
  
  // useEffect(()=>{
  //   console.log(index);
  // },[index]);


  useEffect(()=>{
    if(play){
      setTimeout(()=>{
        if (index<8) { setIndex((index+1)) }
        else { setIndex((index+1)%8) }
      },3000)
    }
  })
  

  return(
  <>
    <ImageSection>
      {slideItemsList}
    </ImageSection>

    <NavSection>
      <Container className="nav-container">
        <PagePlayer>
          <PageNum>
            <Now>{index}</Now>/<Total>8</Total>
          </PageNum>
          <PageControll>
            <Icon onClick={()=>{
              if (index>1) { setIndex((index-1)) }
              else { setIndex(7+index) } //0 -1 -2 -3
              }}
              style={{cursor: 'pointer'}} className="fa-solid fa-chevron-left"></Icon>
              {
                play?
                <Icon
                onClick={()=>{setPlay(!play)}}
                style={{cursor: 'pointer'}} className="fa-solid fa-pause"></Icon>
                :
                <Icon 
                onClick={()=>{setPlay(!play)}} 
                style={{cursor: 'pointer'}} className="fa-solid fa-play"></Icon>
              }
            <Icon onClick={()=>{
              if (index<8) { setIndex((index+1)) }
              else { setIndex((index+1)%8) }
              }} 
              style={{cursor: 'pointer'}} className="fa-solid fa-chevron-right"></Icon>
          </PageControll>
        </PagePlayer>
        <Line></Line>
        <PageList>
          {PageItemsList}
        </PageList>
        <MoreBtn>
          <Icon className="fa-solid fa-chevron-down"></Icon>
        </MoreBtn>
      </Container>
    </NavSection>
  </>
  )
}

export default Scene;


const ImageSection = styled.section`
  width: 100%;
  height: 320px;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  overflow: hidden;
`

const Slide = styled.div`
  flex-basis: 100%;
  height: 100%;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  transition: .3s;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
`

const NavSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #e9ecef;
`

const Container = styled.div`
  width: 1200px;
  &.scene-container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
  }
  &.nav-container{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: center;
  // background-color: white;
  padding-bottom: 25px;
`
const ImageCard = styled.div`
  & img{
    height: 320px;
  }
  background: white;
`

const Tag = styled.div`
  width: max-content;
  height: 24px;
  padding: 4px 10px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 18px;
`
const Main = styled.div`
  white-space: pre-wrap;
  font-size: 32px;
  font-family: 'Pretendard-Bold';
  line-height: 1.5;
  margin-bottom: 8px;
`
const Sub = styled.div`
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 1.5;
`

const PagePlayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 135px;
  height: 36px;
  font-size: .875rem;
  color: #fff;
  border-radius: 20px;
  background-color: rgba(0,0,0,.5);
  margin-right: 8px;
`

const PageNum = styled.div`

`

const Now = styled.span`

`

const Total = styled.span`

`

const PageControll = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
`

const Icon = styled.i`
  display: block;
  font-size: 12px;
`

const Line = styled.div`
  margin: 0 8px;
  width: 1px;
  height: 36px;
  background-color: #dee2e6;
`

const PageList = styled.div`
  display: flex;
`

const PageItem = styled.div`
  text-align: center;
  padding: 10px 16px;
  margin-left: 8px;
  border-radius: 20px;
  font-weight: 700;
  color: #495057;
  box-shadow: inset 0 0 0 1px #ced4da;
  cursor: pointer;
`
  // color: #00c471;
  // box-shadow: inset 0 0 0 2px #00c471;

const MoreBtn = styled.div`
  margin-left: 8px;
  width: 36px;
  height: 36px;
  font-size: 16px;
  text-align: center;
  color: #495057;
  border-radius: 36px;
  border: 1px solid #ced4da;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  background-color: #fff;
  cursor: pointer;
  padding: 8px;
  box-sizing: border-box;

  position: absolute;
  right: 0;
`
