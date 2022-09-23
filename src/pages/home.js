import React, {useState} from 'react';
import './home.css'
import  styled  from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css/navigation';

import Scene from '../components/sceneComponent';
import Header from '../components/header';
import Footer from './../components/footer';


SwiperCore.use([Navigation,Pagination,Autoplay])

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
  
  
  const reviewElements = [
    {
      name: "rewef1234",
      time: "3",
      title: "MariaDB 클라이언트 개발, HeidiSQL ",
      text: "유익한 강의 감사합니다!",
    },
    {
      name: "Bruce Han",
      time: "3",
      title: "자바 ORM 표준 JPA 프로그래밍 - 기본편 ",
      text: "JPA 활용1에서 모르는 개념 마구 나와서 아주 정글 갔다온 줄 알았습니다...기본편으로 다시 돌아가서 야수의 심정으로 JPA를 단련하겠습니다 스프링 지식 공유 덕분에 나날이 성장하고 있어요^^ 감사합니다",
    },
    {
      name: "dongdong",
      time: "3",
      title: "10주 완성 C++ 코딩테스트 | 알고리즘 IT취업 ",
      text: "안녕하세요! 백엔드 개발 취업 준비생입니다. 강의 구매는 몇달 전에 했었는데 부트캠프를 중간에 진행했어서 이제 섹션1을 다 들었네요! 교안에 C++에 대해 잘 설명해주셔서 너무 도움되고 해설 강의 영상 역시 잘 듣고 있습니다!! 수강평 이벤트 때문에 섹션1만 듣고 작성하는데 모든 강의를 듣고 수정해야 겠네요ㅎㅎㅎ 감사합니다!"
    },
    {
      name: "sseng134",
      time: "4",
      title: "모든 개발자를 위한 HTTP 웹 기본 지식 ",
      text: "재밌게 잘 봤어요ㅎㅎ"
    },
    {
      name: "app_123",
      time: "4",
      title: "Vue-Django-Bootstrap 뚝딱 블로그 ",
      text: "django와 vuejs를 연동 개발하려면 꼭 봐야하는 강의입니다. 완성도 높은 개발예제와 강의로 많은것을 배울 수 있습니다."
    },
    {
      name: "CodeNum1",
      time: "4",
      title: "따라하며 배우는 리액트 A-Z ",
      text: "프론트를 하며 기본적으로 알아야 할 부분을 가볍게 리마인드 하기 좋은 강의 같습니다! 프로젝트 하나 끝날 때 마다 이 강의를 다시 한번 보면서, 환기를 시키려고 합니다."
    },
    {
      name: "bread",
      time: "5",
      title: "8명의 비전공자는 어떻게 개발자로 취업했을까 ",
      text: "비전공자로서 취업에 성공하기까지 어떠한 과정을 거쳐야 하는지 안개속에 있는 기분이었습니다. 이 강의를 수강하고선 안개가 걷히고 어디로 나아가야 될지 길이 보이는 것 같습니다. 개발자로 취업하기 위해서 어떠한 마음가짐, 방향성이 필요한지 큰 그림을 그리고 싶은 분들에게 강의를 추천합니다."
    }
  ]

  const reviewList = reviewElements.map((reviewEl)=>(
    
      <ReviewBox>
        <ReviewInfo>
          <span className="name">{reviewEl.name} 님(수강생)</span>
          <span className="time">{reviewEl.time}시간 전</span>
        </ReviewInfo>
        <ReviewTitle>
          {reviewEl.title}<i className="fa-solid fa-chevron-right"></i>
        </ReviewTitle>
        <ReviewText>
          {reviewEl.text}
        </ReviewText>
      </ReviewBox>
  ))
  
  const BannerStyle = [
    {
      backgroundImage: 'url("https://cdn.inflearn.com/public/main_sliders/3b67a1a1-aae3-442e-8e17-791b7cdfb5f5/bottom-1920-205-%281111%29.jpg")',
      width: '1742px',
      height: '182px',
      backgroundPositionX: '40%',
      padding: '36px 0px'
    },
    {
      backgroundImage: 'url("https://cdn.inflearn.com/public/main_sliders/38744ba0-b12a-491a-9ca2-43375c3905ba/share-you.jpg")',
      width: '1742px',
      height: '182px',
      backgroundPositionX: '40%',
      padding: '36px 0px'
    },
    {
      backgroundImage: 'url("https://cdn.inflearn.com/public/main_sliders/39bcb91f-64a4-4a16-8878-e8dc7cd342e8/bottom-1920-205-%28221%29.jpg")', 
      width: '1742px',
      height: '182px',
      backgroundPositionX: '40%',
      padding: '36px 0px'
    }
  ]


  return(
    <>
      
      <Header></Header>
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

      <ReviewSection>
        <Container>
          <LeftContent>
            <H1><span style={{color:'#47C880'}}>964,904</span> 명이<br/>인프런과 함께합니다</H1>
            <Textsmall>
              인프런은 강의의 수강생수, 평점을 투명하게 공개합니다.
              <br/>
              실제로 많은 온오프라인 학원들은 단기적 성과를 높이기 위해 잘나온 특정 후기만 노출하거나, 
              아예 숨겨버리는 경우가 많습니다.
              <br/>
              반면 인프런은 강의에 대한 후기, 학생수 등 정보를 투명하게 공개합니다.
              신뢰성을 바탕으로 학습자들이 더 좋은 컨텐츠를 선택하고 교육의 질을 높입니다.
            </Textsmall>
            <MoreBtns>
              <MoreBtn>수강평 더보기 <i className="fa-solid fa-chevron-right"></i></MoreBtn>
              <MoreBtn>기능/강좌 요청하기 <i className="fa-solid fa-chevron-right"></i></MoreBtn>
            </MoreBtns>
          </LeftContent>
          <RightContent>
              {reviewList}
          </RightContent>
        </Container>
      </ReviewSection>

      <Banner>
        <Swiper modules={[Autoplay]} autoplay={{delay: 3000}} speed={600} loop>
          <SwiperSlide style={BannerStyle[0]}>
            <BannerBox>
              <BannerText>모든 팀원이 인프런의 강의들을<br/>자유롭게 학습하는 환경을 제공해주세요.</BannerText>
              <BannerBtn>비즈니스 알아보기</BannerBtn>
            </BannerBox>
          </SwiperSlide>
          <SwiperSlide style={BannerStyle[1]}>
            <BannerBox>
              <BannerText>지식을 나눠주세요.<br/>쉽게 시작하고 합당한 보상을 받을 수 있어요.</BannerText>
              <BannerBtn>지식공유 알아보기</BannerBtn>
            </BannerBox>
          </SwiperSlide>
          <SwiperSlide style={BannerStyle[2]}>
            <BannerBox>
              <BannerText style={{color:'white'}}>당신은 더 좋은 곳에 갈 수 있어요.<br/>지금 열려있는 채용공고를 확인해보세요.</BannerText>
              <BannerBtn>공고 확인하기</BannerBtn>
            </BannerBox>
          </SwiperSlide>
        </Swiper>
      </Banner>

      <Groups>
        <GroupsTitle>이미 많은 기업 구성원들이 인프런에서 성장하고 있어요.</GroupsTitle>
        <GroupsLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/c085de89-e640-4bc0-afad-efd1e96dbb58/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB.png" alt="라인"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/0add4321-40e2-46db-9aac-3222b25a69c4/%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6%E1%84%83%E1%85%B3%E1%86%AF.png" alt="우아한형제들"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/34618dc7-2862-4db0-9bbc-631ca0c8f5b5/sk.png" alt="sk"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/1429748f-8c44-4941-8913-752071578eaf/%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5.png" alt="네이버"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/e7dd4c2a-8496-4708-b9fd-ae66317e40ad/%E1%84%82%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%86%AB.png" alt="넥슨"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/10b49bf2-cd9a-4501-ac3c-84059d04f171/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC.png" alt="삼성"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/a041f2fa-7f40-4517-bdb7-822fc7800d80/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9.png" alt="카카오"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/b47b4ead-5141-46ec-8003-81c6dbc2e5b7/LG.png" alt="LG"/>
          </GLogo>
          <GLogo>
            <img src="https://cdn.inflearn.com/public/group_logo/0/4aa479b9-4e05-4f8e-84b3-1fb7edb60c0c/nc.png" alt="nc"/>
          </GLogo>
        </GroupsLogo>
      </Groups>

      <ApplySection>
        <Container>
          <Applymain>다양한 서비스를 신청하세요</Applymain>
          <Applysub>인프런의 지식공유지 ' 비즈니스 ' 대학생 신청방법에 대해 알아보세요.</Applysub>
          <ApplyCards>
            <Apply>
              <ATitle>
                지식공유자 되기
              </ATitle>
              <ADetail>
                9개월간 온라인 기술 강의로만 1억원!<br/>나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.
              </ADetail>
              <ABtn>
                지식공유자 참여하기&nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </ABtn>
            </Apply>

            <Apply>
              <ATitle>
                인프런 비즈니스 신청
              </ATitle>
              <ADetail>
                모든 팀원의 인프런의 강의들을 자유롭게 학습하는 환경을 제공해주세요.<br/>업무 스킬에 집중된 콘텐츠를 통해 최신 트렌드의 업무역량을 습득할 수 있습니다.
              </ADetail>
              <ABtn>
                비즈니스 신청하기&nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </ABtn>
            </Apply>

            <Apply>
              <ATitle>
                인프런 X 대학생
              </ATitle>
              <ADetail>
                학교와 인프런이 함께 하여,<br/>많은 학생 분들께 정해진 커리큘럼 이외에도 필요한 학습을 보완하고, 더욱 성장할 수 있도록 도와드립니다.
              </ADetail>
              <ABtn>
                대학생 신청하기&nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </ABtn>
            </Apply>

          </ApplyCards>
        </Container>
      </ApplySection>

      <Footer>
      </Footer>
    </>
  )
};

export default Home;

const ReviewSection = styled.section`
  height: 528px;
  padding: 24px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1200px;
  padding: 0px 10px;
  position: relative;
`

const LeftContent = styled.div`
  height: 480px;
  width: 480px;
  padding: 40px 16px 40px 0px;
  background-color: white;
`

const H1 = styled.div`
  color: #242424;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 36px;
  font-family: 'Pretendard-Bold';
`

const Textsmall = styled.div`
  font-size: 16px;
  color: #757575;
  margin: 0px 0px 36px;
  line-height: 1.5;
`

const MoreBtns = styled.div`
  height: 46px;
  display: flex;
  margin-bottom: -8px;
`

const MoreBtn = styled.div`
  color: #333333;
  padding: 10px 16px;
  margin: 0px 8px 8px 0px;
  background-color: #ffffff;
  border: 1px solid #1dc098;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  &:hover{
    background-color: rgba(29,192,120,.12);
  }
`

const RightContent = styled.div`
  // background: yellow;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 590px;
  overflow-y: scroll;
  // overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 1px;
  }
`

const ReviewBox = styled.div`
  width: 580px;
  margin: 5px 5px 20px;
  padding: 16px;
  background-color: #f9f9f9;
  color: #333333;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 0 2px 3px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
`

const ReviewInfo = styled.div`
  margin-bottom: 16px;
  &>span.name{
    margin-right: 8px;
    color: #757570;
  }
  &>span.time{
    color: #979797;
  }
  font-size: 14px;
`

const ReviewTitle = styled.div`
  font-family: 'Pretendard-Bold';
  margin-bottom: 4px;
  line-height: 1.5;
  font-size: 18px;
`

const ReviewText = styled.div`
  line-height: 1.5;
`

const Banner = styled.section`
  width: 100%;
  height: 230px;
  padding: 24px 0px;
  cursor: pointer;
`

const BannerBox = styled.div`
  margin: 0px 238px;
  padding: 0px 10px;
  width: 1200px;
  height: 100%;
`

const BannerText = styled.div`
  color: #404040;
  font-size: 18px;
  margin: 0px 0px 16px;
  line-height: 1.5;
`

const BannerBtn = styled.div`
  color: #1dc078;
  background: #ffffff;
  padding: 12px 16px;
  font-weight: 700;
  border-radius: 4px;
  width: max-content;
  font-size: 16px;
`

const Groups = styled.section`
  width: 100%;
  height: 204px;
  padding: 64px 0px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const GroupsTitle = styled.div`
  line-height: 1.4;
  letter-spacing: -.3px;
  font-size: 20px;
  font-family: 'Pretendard-Bold';
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: #000a12;
`
const GroupsLogo = styled.div`
  display: flex;
`
const GLogo = styled.div`
  height: 28px;
  margin: 0 15px 20px;
  &>img{
    height: 28px;
    filter: grayscale(1)
  }
`

const ApplySection = styled.section`
  height: 512.5px;
  width: 100%;
  padding: 48px 0px;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
`
const Applymain = styled.div`
  color: #1e1e1e;
  font-size: 24px;
  font-family: 'Pretendard-Bold';
  margin: 0px 0px 4px;
  line-height: 1.5;
`
const Applysub = styled.div`
  color: #757575;
  font-size: 15px;
  line-height: 1.5;
`
const ApplyCards = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
`
const Apply = styled.div`
  width: 380px;
  height: 330px;
  padding: 48px;
  margin: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  border-radius: 4px;
  background: white;
`
const ATitle = styled.div`
  color: #363636;
  margin: 0px 0px 8px;
  font-size: 18px;
  font-family: 'Pretendard-Bold';
  font-weight: 900;
  line-height: 1.5;
`
const ADetail = styled.div`
  color: #757575;
  font-size: 16px;
  line-height: 1.5;
`
const ABtn = styled.div`
  color: #ffffff;
  background: #1dc078;
  position: absolute;
  bottom: 48px;
  padding: 12px 16px;
  border-radius: 20px;
  width: max-content;
  font-size: 16px;
  font-family: 'Pretendard-bold'
`

