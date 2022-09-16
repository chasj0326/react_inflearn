import React from 'react';
import './home.css'
import  styled  from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/css/navigation';

import Scene from '../components/sceneComponent'

SwiperCore.use([Navigation,Pagination])

const Home = () => {
  const freeLectures = [
    {
      img : "https://cdn.inflearn.com/public/courses/328577/cover/d7cd62c2-db07-45d8-af8d-a3fa728cd8e7/inflearn-logo.jpg",
      title : "[코드팩토리] [입문] Dart 언어 4시간만에 완전정복",
      tutor: "코드팩토리",
      score: "(108)",
      cost: "무료",
      tutee: "+1600명"
    },
    {
      img : "https://cdn.inflearn.com/public/courses/327126/cover/13b0e441-4a3d-44cb-acbb-d86af2412e18/327126-eng-2.png",
      title : "[리뉴얼] 렛츠기릿 자바스크립트",
      tutor: "조현영",
      score: "(59)",
      cost: "무료",
      tutee: "+6700명"
    },
    {
      img : "https://cdn.inflearn.com/public/courses/329009/cover/30f0e54d-4ea6-4de3-85e0-c6e8f2fba2f3/001.png",
      title : "프론트엔드 날개달기: Vuejs, React 배우기 전에 꼭 알아야하는 지식",
      tutor: "짐코딩 GYM CODING",
      score: "(26)",
      cost: "무료",
      tutee: "+900명"
    },
    {
      img : "https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C-002%20(5).png",
      title : "이것이 진짜 크롤링이다 - 기본편",
      tutor: "스타트코딩",
      score: "(236)",
      cost: "무료",
      tutee: "+4900명"
    },
    {
      img : "https://cdn.inflearn.com/public/course-326295-cover/eaba30bd-b9ec-4277-b178-a418b5daf1a3",
      title: "Svelte.js 입문 가이드",
      tutor: "HEROPY",
      score: "(114)",
      cost: "무료",
      tutee: "+1800명"
    },
    // 5
    {
      img: "https://cdn.inflearn.com/public/course-324063-cover/3c856a69-e213-4394-8317-1469386b82cc",
      title: "웹 게임을 만들며 배우는 React",
      tutor: "조현영",
      score: "(239)",
      cost: "무료",
      tutee: "+8900명"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/328431/cover/27200e19-6296-4eb5-8d9d-4dcfc1189758/REALNEW_THUMB.001.jpeg",
      title: "기초부터 따라하는 디지털포렌식",
      tutor: "손지훈",
      score: "(26)",
      cost: "무료",
      tutee: "+1200명"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/327067/cover/141fa9cb-69ed-48ca-8de2-d205b0e09200/썸네일_하드웨어_fin.png",
      title: "컴알못이 보는 컴퓨터 하드웨어 기초 상식",
      tutor: "제주코딩베이스캠프",
      score: "(99)",
      cost: "무료",
      tutee: "+2700명"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/325123/course_cover/7867a30d-49f9-4312-89f5-b0e883db8a4e/시빅해킹-썸넬.png",
      title: "Microcosm SW Fair - 경쟁없는, 나만의 시빅해킹",
      tutor: "제주코딩베이스캠프",
      score: "(12)",
      cost: "무료",
      tutee: "+500명"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/329130/cover/99c5a76f-a0c0-4c7d-8667-1ec13bf9b0cb/329130-eng-resize.png",
      title: "30분 요약강좌 시즌5 : 알잘딱깔센 flex & grid",
      tutor: "제주코딩베이스캠프",
      score: "(7)",
      cost: "무료",
      tutee: "+200명"
    }
  ];
  const freeLecturesList1 = freeLectures.map((freeLecture, idx)=>(
    (idx<5)?
    <div className="class-card">
      <img src={freeLecture.img} alt="" className="lecture-img"/>
      <div className="lecture-title">{freeLecture.title}</div>
      <div className="lecture-tutor">{freeLecture.tutor}</div>
      <div className="lecture-score">⭐⭐⭐⭐⭐<span> {freeLecture.score}</span></div>
      <div className="lecture-cost">{freeLecture.cost}</div>
      <div className="lecture-tutee">{freeLecture.tutee}</div>
    </div>
    :
    <div style={{display:"none"}}></div>
  ))
  const freeLecturesList2 = freeLectures.map((freeLecture, idx)=>(
    (idx>4)?
    <div className="class-card">
      <img src={freeLecture.img} alt="" className="lecture-img"/>
      <div className="lecture-title">{freeLecture.title}</div>
      <div className="lecture-tutor">{freeLecture.tutor}</div>
      <div className="lecture-score">⭐⭐⭐⭐⭐<span> {freeLecture.score}</span></div>
      <div className="lecture-cost">{freeLecture.cost}</div>
      <div className="lecture-tutee">{freeLecture.tutee}</div>
    </div>
    :
    <div style={{display:"none"}}></div>
  ))

  const newbieLectures = [
    {
      img : "https://cdn.inflearn.com/public/courses/328376/cover/6baa63b8-8f8f-473d-9b55-9047a521037e/328376-eng.jpg",
      title : "실제 이력서 사례로 알아보는 [합격하는 이력서] 작성 가이드",
      tutor: "워니",
      score: "(116)",
      cost: "￦49,500",
      tutee: "+600명"
    },
    {
      img : "https://cdn.inflearn.com/public/courses/324145/course_cover/f4b28e4f-6635-4e57-95be-5f4ac7b1ea49/I_O_python_1.png",
      title : "프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)",
      tutor: "인프런",
      score: "(687)",
      cost: "￦55,000",
      tutee: "+13100명"
    },
    {
      img : "https://cdn.inflearn.com/public/courses/324718/course_cover/9fa72fd8-ce56-4091-aa73-a31145acf37e/rookiss-rpg-1.png",
      title : "[C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part1: C# 기초 ...",
      tutor: "Rookiss",
      score: "(440)",
      cost: "￦44,000",
      tutee: "+3800명"
    },
    {
      img : "https://cdn.inflearn.com/public/courses/328842/cover/c833baeb-5d5d-4e08-832c-4ecc9e90a1bc/cover.png",
      title : "Flutter 앱 개발 완성",
      tutor: "DevStory",
      score: "(16)",
      cost: "￦64,900",
      tutee: "+200명"
    },
    {
      img : "https://cdn.inflearn.com/public/courses/328918/cover/4935a53d-ef09-47af-b799-a374d365d412/328918-eng.jpg",
      title : "입문자를 위한 게임 프로그래머 개론",
      tutor: "Rookiss",
      score: "(8)",
      cost: "￦49,500",
      tutee: "+800명"
    },
  ];
  const newbieLecturesList = newbieLectures.map((newbieLecture)=>(
    <div className="class-card">
      <img src={newbieLecture.img} alt="" className="lecture-img"/>
      <div className="lecture-title">{newbieLecture.title}</div>
      <div className="lecture-tutor">{newbieLecture.tutor}</div>
      <div className="lecture-score">⭐⭐⭐⭐⭐<span> {newbieLecture.score}</span></div>
      <div className="lecture-cost">{newbieLecture.cost}</div>
      <div className="lecture-tutee">{newbieLecture.tutee}</div>
    </div>
  ))

  const roadLectures = [
    {
      img : "https://cdn.inflearn.com/public/roadmaps/d9511869-3055-444a-985d-12278ddcf18c/roadmap-16.png",
      title : "Javascript 풀스택 로드맵 (+ 트위터 클론앱 만들기 🐦)",
    },
    {
      img : "https://cdn.inflearn.com/public/roadmaps/c6c69670-7155-423a-bc3a-80d9d3386953/roadmap-93.png",
      title : "자바 개발자 Level Up! - 더 나은 자바 개발자 되기"
    },
    {
      img : "https://cdn.inflearn.com/public/roadmaps/fa1e0dbf-1786-4d81-bd22-d412b7937500/roadmap-77.png",
      title: "코딩 해볼래요? - 하루 11분, 60일 완성 코딩 왕초보 탈출부터 활용까지!"
    },
    {
      img : "https://cdn.inflearn.com/public/roadmaps/373/cover/7b49797b-67d7-4d2d-89b8-8326496ca0cf/roadmap-119-2x-b.png",
      title: "우아한형제들 최연소 기술이사 김영한의 스프링 완전 정복"
    }
  ];
  const roadLecturesList = roadLectures.map((roadLecture)=>(
    <div className="class-card2">
      <img src={roadLecture.img} alt="" className="lecture-img"/>
      <div className="lecture-title2">{roadLecture.title}</div>
    </div>
  ))

  const readContents = [
    {
      img : "https://cdn.inflearn.com/public/files/pages/704da898-1db6-42ba-95c2-806806443f4d/infcon-thumbnail-c.jpg",
      title : "IT인의 축제, 인프콘 2022 현장 스케치",
      detail : "인프런의 첫 오프라인 IT 콘퍼런스, 인프콘 2022가 8월 26일 코엑스 그랜드볼룸에서 개최되었어요. 무려 1만 여명이 참가..."
    },
    {
      img : "https://cdn.inflearn.com/public/files/pages/180fc479-e7f7-4da1-be59-a4da13fdf3c1/curation-infcon2022-story-main.png",
      title : "[큐레이션] INFCON 2022 기념 릴레이 할인 통합편!",
      detail : "🌱 🏃🏻 🎫 인프런의 첫 번째 오프라인 콘퍼런스,INFCON 2022! 인프콘 발표자들분들 중엔인프런 지식공유자가 많다는..."
    },
    {
      img: "https://cdn.inflearn.com/public/files/pages/4b326a17-3443-4c56-b3f8-017178b0379f/event-infcon-story-main-5.png",
      title: "[INFCON Tech Series] FE 개발자도 할 수 있다! ...",
      detail: "FE 개발자도 할 수 있다! RESTful API 개발\n#REST #RESTful_API #Firebase #인프콘..."
    }
  ]
  const readContentsList = readContents.map((readContent)=>(
    <div className="class-card3">
      <img src={readContent.img} alt=""/>
      <div className="lecture-title3 fw-b">{readContent.title}</div>
      <div className="lecture-detail">{readContent.detail}</div>
    </div>
  ))

  const newLectures = [
    {
      img: "https://cdn.inflearn.com/public/courses/329430/cover/c4140103-e26d-4da4-890c-b281c4afd58e/329430-eng.png",
      title: "알아두면 쓸모 있는 엑셀 팁 (1)",
      tutor: "은희쌤",
      oldcost: "￦15,400",
      newcost: "￦12,320",
      tag1: "새강의",
      tag2: "할인중"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/329443/cover/28e09d28-4890-4b5d-8273-99aa7dde1308/329443-eng-resize.png",
      title: "블로그 자동화 프로그램 개발 강의 (파이썬 + 셀레니움)",
      tutor: "김지유",
      oldcost: "￦99,000",
      newcost: "￦84,150",
      tag1: "새강의",
      tag2: "할인중"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/329381/cover/92fb432a-465d-46db-9ac4-fffc3b3f4cb1/329381-eng.png",
      title: "너네 백엔드 하고 싶은 거 있으면 얼마든지 해 난 괜찮어 왜냐면 나는 파이...",
      tutor: "제주코딩베이스캠프",
      oldcost: "￦33,000",
      newcost: "￦23,100",
      tag1: "새강의",
      tag2: "할인중"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/329254/cover/638389ff-5a78-47f4-b3d2-4ca4b3bf0d11/329254-eng.png",
      title: "해외 명문대학 무크(MOOC) 이용 외국어(영어,중국어,프랑스어 등등) ...",
      tutor: "김형률",
      oldcost: "",
      newcost: "무료",
      tag1: "새강의"
    },
    {
      img: "https://cdn.inflearn.com/public/courses/329444/cover/4a3f32ef-f73b-4f47-a682-1e282d01012d/329444-eng.png",
      title: "ADsP 2주 합격 올인원 패스",
      tutor: "마소캠퍼스",
      oldcost: "￦119,900",
      newcost: "￦83,930",
      tag1: "새강의",
      tag2: "할인중"
    },
  ]
  const newLecturesList = newLectures.map((newLecture)=>(
    <div className="class-card">
      <img src={newLecture.img} alt="" className="lecture-img"/>
      <div className="lecture-title title-smaller">{newLecture.title}</div>
      <div className="lecture-tutor">{newLecture.tutor}</div>
      <div className="lecture-cost">
        <span className="old-cost">{newLecture.oldcost}</span>
        {newLecture.newcost}
      </div>
      <div className="lecture-tag">
        <span className='tag1'>{newLecture.tag1}</span>
        {
          newLecture.tag2 ? <span className='tag2'>{newLecture.tag2}</span> : <span></span>
        }
      </div>
    </div>
  ))
  const menuContents = [
    {
      title: "인프런",
      contents: ["공지사항","인프런 소개","인프런 실Log","인프런 채용"]
    },
    {
      title: "고객센터",
      contents: ["자주묻는 질문","수료증 확인","이용약관","개인정보취급방침","저작권 신고센터"]
    },
    {
      title: "신청하기",
      contents: ["지식공유참여","멘토링 소개","인프런 비즈니스","인프런 X 대학교","인프런 X AWS 제휴"]
    },
    {
      title: "학습하기",
      contents: ["IT 프로그래밍","크리에이티브","업무스킬","수강코드 등록","포인트코드 등록"]
    },
    {
      title: "커뮤니티",
      contents: ["학습로드맵","질문 & 답변","수강평 모아보기","강의 · 기능요청"]
    }
  ]
  const menuContentsList = menuContents.map((menuContent)=>(
    <MenuContent>
      <Title className='fw-b'>{menuContent.title}</Title>
      {
        menuContent.contents.map((content)=>(
          <Content>{content}</Content>
        ))
      }
    </MenuContent>
  ))
  
  return(
    <>
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
            <div className="nav-brand_logo" onclick="location.href='index.html'">
              <svg width="110" id="icon_brand_logo"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 90"><path className="A" d="M79.1 31.6c-2-4.6-4.7-8.7-8.1-12.2-3.5-3.5-7.5-6.3-12.1-8.3S49.3 8 43.9 8c-5.2 0-10.2.9-14.9 2.9s-8.8 4.7-12.4 8.1c-3.6 3.5-6.4 7.5-8.4 12.1A37.14 37.14 0 0 0 5.1 46c0 5.2.9 10.2 2.9 14.9s4.7 8.8 8.2 12.4 7.6 6.4 12.2 8.4c4.7 2 9.6 3.1 14.9 3.1l38.3.3.3-38.5c.1-5.3-.9-10.3-2.8-15zM74 77.4l-30.7-.3c-4.2 0-8.2-.9-11.9-2.5s-7-3.9-9.8-6.7A32.99 32.99 0 0 1 15 58c-1.6-3.8-2.3-7.7-2.3-11.9 0-4.3.9-8.3 2.5-12s3.9-6.9 6.7-9.7c2.9-2.8 6.2-4.9 9.9-6.5 3.8-1.6 7.7-2.3 11.9-2.3 4.3 0 8.3.9 12 2.5s6.9 3.8 9.7 6.7c2.8 2.8 4.9 6.1 6.5 9.8s2.3 7.7 2.3 12L74 77.4z"></path><path className="A" d="M76.9 83.7c-.9 0-1.8-.3-2.5-1L27.6 35.1c-1.4-1.4-1.3-3.6 0-4.9 1.4-1.4 3.6-1.3 4.9 0l46.8 47.6c1.4 1.4 1.3 3.6 0 4.9-.6.7-1.5 1-2.4 1z"></path><path className="A" d="M43.1 47.3c-.4 0-.8-.1-1.2-.2-1.8-.7-2.8-2.7-2.1-4.5l6.3-17.3c.7-1.8 2.7-2.8 4.5-2.1s2.8 2.7 2.1 4.5L46.4 45c-.5 1.4-1.9 2.3-3.3 2.3zm12.2 16.2H33.5C31.6 63.5 30 62 30 60c0-1.9 1.6-3.5 3.5-3.5h21.8c1.9 0 3.5 1.6 3.5 3.5 0 2-1.5 3.5-3.5 3.5zm44.1-32.4V85H88.8V31.1h10.6zm5.6 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5zm76.1-26.2c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v5.5h21.6v10.7h-21.6V85h-10.7V36.4c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.3v10.7h-5.3c-2.1 0-4.2.4-6.2 1.2zm43.2-11.9V85h-10.7V9.5h10.7zM270.5 66l7.6 7.6-3.7 3.7c-2.6 2.6-5.5 4.5-8.8 5.9s-6.7 2-10.3 2-7-.7-10.3-2c-3.3-1.4-6.2-3.3-8.8-5.9s-4.6-5.6-5.9-8.9-1.9-6.7-1.9-10.1.6-6.8 1.9-10.1 3.2-6.2 5.9-8.9c2.6-2.6 5.6-4.6 8.9-5.9s6.7-2 10.1-2 6.8.7 10.1 2 6.3 3.3 8.9 5.9l3.7 3.7L248 72.9c3 1.5 6.3 2 9.7 1.5s6.4-2.1 8.9-4.6l3.9-3.8zm-26.8-19.3c-3.2 3.2-4.8 7-4.8 11.5 0 2.5.6 4.8 1.7 7.1l10.6-10.6 6.4-6.3 4.7-4.7c-3-1.5-6.3-2-9.7-1.6-3.3.5-6.3 2.1-8.9 4.6zm64.8-15.6c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.5 5.8a27.88 27.88 0 0 1 5.8 8.5c1.4 3.2 2.1 6.7 2.1 10.5v27h-26.9c-3.7 0-7.2-.7-10.4-2.1-3.3-1.4-6.2-3.3-8.6-5.8-2.5-2.5-4.4-5.4-5.8-8.6-1.4-3.3-2.1-6.8-2.1-10.4 0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.5 6.8-2.2 10.4-2.2zm16.2 43.2V58c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.3-1.3s-4.4.4-6.4 1.3c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3s.4 4.4 1.3 6.4c.8 2 2 3.7 3.5 5.2s3.2 2.6 5.2 3.5c2 .8 4.1 1.3 6.4 1.3h16.3zm46.2-43.2v10.7h-5.4c-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.8V58c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.6zm5.3 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5z"></path><title>인프런 브랜드 로고</title></svg>
            </div>
            <div className="nav-menu">
              <div className="nav-item">강의</div>
              <div className="nav-item">로드맵</div>
              <div className="nav-item">멘토링</div>
              <div className="nav-item">커뮤니티</div>
              <div className="nav-item">인프런</div>
            </div>
          </div>
          <div className="nav-forms">
            <div className="nav-searchbar">
              <input type="text"/>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="nav-btns">
              <button className="btn-login">로그인</button>
              <button className="btn-signup">회원가입</button>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- MOVING SECTION --> */}
      <Scene></Scene>
      {/* <!-- SEARCH SECTION --> */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-title">성장기회의 평등을 추구합니다</div>
          <div className="search-bar">
            <input type="text" placeholder="배우고 싶은 지식을 입력해보세요."/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="search-tags">
            <div className="search-tag">#MVC</div>
            <div className="search-tag">#Spring Boot</div>
            <div className="search-tag">#JPA</div>
            <div className="search-tag">#Python</div>
            <div className="search-tag">#Java</div>
            <div className="search-tag">#Spring</div>
            <div className="search-tag">#JavaScript</div>
          </div>
        </div>
      </section>
      {/* <!-- class SECTION1 --> */}
      <section className="class-section">
        <div className="class-container">
          <div className="class-maintitle fw-b">
            무료강의? 오히려 좋아 ✨
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="class-subtitle">무료 강의부터 가볍게 시작해 보세요.</div>
          <Swiper modules={[Navigation]} navigation>
            <SwiperSlide>
              <div className='class-cards'>{freeLecturesList1}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='class-cards'>{freeLecturesList2}</div>
            </SwiperSlide>                            
          </Swiper>
        </div>
      </section>
      <section className="class-section">
        <div className="class-container">
          <div className="class-maintitle fw-b">
            왕초보도 할 수 있어요 💪
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="class-subtitle">이미 검증된 쉽고 친절한 입문 강의!!</div>
          <Swiper modules={[Navigation]} navigation loop>
            <SwiperSlide>
              <div className="class-cards">{newbieLecturesList}</div>
            </SwiperSlide>
          </Swiper>  
        </div>
      </section>
      <section className="class-section">
        <div className="class-container">
          <div className="class-maintitle fw-b">
            기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️
            <span className="roadmap">RoadMap!!</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="class-subtitle">아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!</div>
          <Swiper modules={[Navigation]} navigation loop>
            <SwiperSlide>
            <div className="class-cards">{roadLecturesList}</div>
            </SwiperSlide>
          </Swiper> 
        </div>
      </section>
      <section className="class-section">
        <div className="class-container">
          <div className="class-maintitle fw-b">
            읽어보기
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="class-cards">
            {readContentsList}
          </div>
        </div>
      </section>
      <section className="class-section">
        <div className="class-container">
          <div className="class-maintitle fw-b">
            따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️
            <span className="roadmap">NEW!!</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <Swiper modules={[Navigation]} navigation loop>
            <SwiperSlide>
            <div className="class-cards">{newLecturesList}</div>
            </SwiperSlide>
          </Swiper> 
        </div>
      </section>
      <Footer>
        <Inner>
          <Menu>
            {menuContentsList}
          </Menu>
          <Bottom>
            <Left>
              <LeftTop className="fw-b">
                <Logo className='logo'>
                  <svg width="85" id="icon_brand_logo" class="brand_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 90"><path class="A" d="M79.1 31.6c-2-4.6-4.7-8.7-8.1-12.2-3.5-3.5-7.5-6.3-12.1-8.3S49.3 8 43.9 8c-5.2 0-10.2.9-14.9 2.9s-8.8 4.7-12.4 8.1c-3.6 3.5-6.4 7.5-8.4 12.1A37.14 37.14 0 0 0 5.1 46c0 5.2.9 10.2 2.9 14.9s4.7 8.8 8.2 12.4 7.6 6.4 12.2 8.4c4.7 2 9.6 3.1 14.9 3.1l38.3.3.3-38.5c.1-5.3-.9-10.3-2.8-15zM74 77.4l-30.7-.3c-4.2 0-8.2-.9-11.9-2.5s-7-3.9-9.8-6.7A32.99 32.99 0 0 1 15 58c-1.6-3.8-2.3-7.7-2.3-11.9 0-4.3.9-8.3 2.5-12s3.9-6.9 6.7-9.7c2.9-2.8 6.2-4.9 9.9-6.5 3.8-1.6 7.7-2.3 11.9-2.3 4.3 0 8.3.9 12 2.5s6.9 3.8 9.7 6.7c2.8 2.8 4.9 6.1 6.5 9.8s2.3 7.7 2.3 12L74 77.4z"></path><path class="A" d="M76.9 83.7c-.9 0-1.8-.3-2.5-1L27.6 35.1c-1.4-1.4-1.3-3.6 0-4.9 1.4-1.4 3.6-1.3 4.9 0l46.8 47.6c1.4 1.4 1.3 3.6 0 4.9-.6.7-1.5 1-2.4 1z"></path><path class="A" d="M43.1 47.3c-.4 0-.8-.1-1.2-.2-1.8-.7-2.8-2.7-2.1-4.5l6.3-17.3c.7-1.8 2.7-2.8 4.5-2.1s2.8 2.7 2.1 4.5L46.4 45c-.5 1.4-1.9 2.3-3.3 2.3zm12.2 16.2H33.5C31.6 63.5 30 62 30 60c0-1.9 1.6-3.5 3.5-3.5h21.8c1.9 0 3.5 1.6 3.5 3.5 0 2-1.5 3.5-3.5 3.5zm44.1-32.4V85H88.8V31.1h10.6zm5.6 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5zm76.1-26.2c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v5.5h21.6v10.7h-21.6V85h-10.7V36.4c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.3v10.7h-5.3c-2.1 0-4.2.4-6.2 1.2zm43.2-11.9V85h-10.7V9.5h10.7zM270.5 66l7.6 7.6-3.7 3.7c-2.6 2.6-5.5 4.5-8.8 5.9s-6.7 2-10.3 2-7-.7-10.3-2c-3.3-1.4-6.2-3.3-8.8-5.9s-4.6-5.6-5.9-8.9-1.9-6.7-1.9-10.1.6-6.8 1.9-10.1 3.2-6.2 5.9-8.9c2.6-2.6 5.6-4.6 8.9-5.9s6.7-2 10.1-2 6.8.7 10.1 2 6.3 3.3 8.9 5.9l3.7 3.7L248 72.9c3 1.5 6.3 2 9.7 1.5s6.4-2.1 8.9-4.6l3.9-3.8zm-26.8-19.3c-3.2 3.2-4.8 7-4.8 11.5 0 2.5.6 4.8 1.7 7.1l10.6-10.6 6.4-6.3 4.7-4.7c-3-1.5-6.3-2-9.7-1.6-3.3.5-6.3 2.1-8.9 4.6zm64.8-15.6c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.5 5.8a27.88 27.88 0 0 1 5.8 8.5c1.4 3.2 2.1 6.7 2.1 10.5v27h-26.9c-3.7 0-7.2-.7-10.4-2.1-3.3-1.4-6.2-3.3-8.6-5.8-2.5-2.5-4.4-5.4-5.8-8.6-1.4-3.3-2.1-6.8-2.1-10.4 0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.5 6.8-2.2 10.4-2.2zm16.2 43.2V58c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.3-1.3s-4.4.4-6.4 1.3c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3s.4 4.4 1.3 6.4c.8 2 2 3.7 3.5 5.2s3.2 2.6 5.2 3.5c2 .8 4.1 1.3 6.4 1.3h16.3zm46.2-43.2v10.7h-5.4c-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.8V58c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.6zm5.3 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5z"></path><title>인프런 브랜드 로고</title></svg>
                </Logo>
                <Line className="fw-m">|</Line>
                개인정보취급방침
                <Line className="fw-m">|</Line>
                이용약관
              </LeftTop>
              <LeftMid>
              (주)인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612 사업자 정보 확인<br/>
              통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | 이메일: info@inflearn.com<br/>
              주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호<br/>
              <span>©INFLAB. ALL RIGHTS RESERVED</span>
              </LeftMid>
            </Left>
            <Right>
              
            </Right>
          </Bottom>
        </Inner>
      </Footer>
    </>
  )
};

export default Home;

const Footer = styled.footer`
  height: 440px;
  background-color: #303740;
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 1152px;
  height: 100%;
`

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 20px 42px 20px;
  border-bottom: 1px solid #444; 
`

const MenuContent = styled.div`
  margin-right: 20px;
`
const Title = styled.div`
  color: #eeeeee;
  padding: 16px 0px;
`
const Content = styled.div`
  color: #bdbdbd;
  margin: 0px 0px 7px;
  line-height: 1.5;
`
const Bottom = styled.div`
  width: 100%;
  height: 176px;
  display: flex;
  padding: 32px 20px;
  justify-content: space-between;
`
const Left = styled.div`
  width: 460px;
  color: #bdbdbd;
`
const LeftTop = styled.div`
  height: 24px;
  margin: 0px 0px 8px;
  font-size: 12px;
`
const LeftMid = styled.div`
  height: 54px;
  font-size: 12px;
  margin-bottom: 8px;
  line-height: 1.5;
  & span{
    display: block;
    margin-top: 8px;
  }
`

const Logo = styled.span`
  margin-right: 6px;
`

const Line = styled.span`
  margin: 0px 8px;
  font-weight: 400;
`

const Right = styled.div`
`

