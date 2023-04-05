// import fs from 'fs';
import Ask from '../component/Ask';
import Image from 'next/image';
import Ad from '../../asset/Ad.svg';
import SearchIcon from '../../asset/SearchIcon.svg';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import * as S from "../styles/index.style";

export async function getStaticProps() {
  const files = fs.readdirSync('ContentDetail');

  const getposts = files.map((fileName) =>{
    const slug = fileName.replace('.md','');
    const readFile = fs.readFileSync(`ContentDetail/${fileName}`,'utf-8')
    const {data : info, content} = matter(readFile)
    return {
      info , slug
    }
  }
  );

  return {
      props : {
        getposts
      }
  }
}

export default function Home({getposts}) {

  const [posts, setPosts] = useState(getposts)
  const [groupstyle, setGroupstyle] = useState()
  const [pages, setPages] = useState([])
  const [totalPages , setTotalPages] = useState(Math.ceil(posts.length/7))
  const [itemOffset, setItemOffset] = useState(0);
  
  const currentItems = posts.slice(itemOffset,itemOffset + 7)

  const contentRef = useRef([])
  const backRef = useRef(null)

  const [groupType, setGroupType] = useState(
    getposts.filter(({info,slug}, index)=>{ //이 코드 이해하기 [완료]
      return ( 
        getposts.findIndex(({info : info2}, jdex) => { // 어째서....post2에 값이 들어있는 것이지? 어떻게 넘어가는 거지?
          return info.group === info2.group //첫번째 맞는 조건 찾자마자 그 값의 인덱스(jdex) 번호를 리턴하고 종료, post가 바뀜, 근데 계속 0 나옴 -> {info}로 들고왔어야 함, 경로 잘못 됌
        }) === index //만약 중복이라면 getposts.findIndex 리턴 값이 index보다 작을 것 -> 조건 충족 X
      )
    })
  )

  const searchTitle = (e) => {
    // 검색 창이 포함하고있는 값을 제목과 비교해서 맞는 값만 찾기 => 현재 화면에 보여지고 있는 글 관리하는 상태 필요 -> 그 상태 기반으로 필터,필터,필터
    setPosts(
      posts.filter((post)=>(
        (post.info.title).includes(e.target.value)
      ))
    )
  }
  
  const onKeyPress = (e) => {
    if(e.key == 'Enter') {
      searchTitle(e)
    }
  }

  const changePosition = (e) => {
    setPosts(
      getposts.filter((post)=>(
        (post.info.part) === (e.target.value)
      ))
    )
  }

  const changeHowwork = (e) => {
    setPosts(
      getposts.filter((post)=>(
        (post.info.how) === (e.target.value)
      ))
    )    
  }

  const clickGroup = (e) => {
    setGroupstyle(e.target.id)
    const backTag = document.getElementById(`${e.target.id}back`)
    backTag.style.width = e.target.clientWidth + "px"
    backTag.style.height = e.target.clientHeight + "px"

    setPosts(
      getposts.filter((post)=>
        post.info.group === e.target.id
      )
    )
  }

  useEffect(() => {
    groupType.map(({slug},idx)=>{
      const contentTag = contentRef[idx]
      const backTag = backRef[idx]

      backTag.style.width = contentTag.clientWidth + "px"
      backTag.style.height = contentTag.clientHeight + "px"

      setTotalPages(Math.ceil(posts.length/7))
    })
  }
  , [posts]) 

  const handlePageClick = (e) => {
    const newOffset = (e.selected * 7) % posts.length;
    setItemOffset(newOffset)
  }

  const ShowGroup = groupType.map(({info,slug},idx)=> {
      return(
      <div  key={info.group}>
        {
          groupstyle === info.group ?
          <S.ChooseGroupBackClick id={`${info.group}back`} ref={elem =>backRef[idx] = elem }></S.ChooseGroupBackClick>
          : <S.ChooseGroupBack id={`${info.group}back`} ref={elem =>backRef[idx] = elem } ></S.ChooseGroupBack>
        }
        {
          groupstyle === info.group ?
          <S.ChooseGroupContentClick id={info.group} ref={elem =>contentRef[idx] = elem } onClick={clickGroup}>{info.group}</S.ChooseGroupContentClick>
          : <S.ChooseGroupContent id={info.group} ref={elem =>contentRef[idx] = elem } onClick={clickGroup}>{info.group}</S.ChooseGroupContent>
        }
        </div>)
    })

  const ShowPosts = currentItems.map(({info,slug},index)=>{
      return (
      <S.EachPostBox key={info}>
        <Link href={`/Detail/${slug}`}>
          {info.title}
        </Link>
        <S.PostPosition>{info.part}</S.PostPosition>
        <S.PostHow>{info.how}</S.PostHow>
          
      </S.EachPostBox>
      )
    })

  return (
    <div>
      <S.AdWrapper>
        <Image src={Ad} alt="Ad"/>
      </S.AdWrapper>

      <S.ContentWrapper>
        <S.IntroH1>가슴 뛰는 미래,<br/>내일이 있는 삶</S.IntroH1>
        <S.IntroDiv>우리는 “세상을 이롭게 하는 소프트웨어 개발자가 되겠다”는  같은 목표에 마음이 움직여<br/> 
              이곳 “DGSW”에 모이게 되었습니다. DGSW는 모두가 협동하여 서로의 목표를 향해 나아갑니다.<br/>
              동료들과 함께 서로 도우며 불가능한 가능하게 하며 열정적으로 유능한 개발자로 성장하고 있습니다.<br/>
              가슴이 설레시나요?지금이 바로 “DGSW”동아리에 합류할 때입니다. 
        </S.IntroDiv>

        <S.ChooseGroupParents>
        {ShowGroup}
        </S.ChooseGroupParents>

        <S.SearchBox>
          <S.SearchPosition>
            <Image src={SearchIcon} alt='SearchIcon'/>
            <S.SearchTitleInput placeholder='포지션 역할 검색하기' onKeyPress={onKeyPress}/>
          </S.SearchPosition>
          
          <S.ChoosePosition required  onChange={changePosition}>
            <option disabled selected hidden>채용 포지션</option>
            <option value="Front-end">프론트엔드</option>
            <option value="Back-end">벡엔드</option>
            <option value="Designer">디자이너</option>
            <option value="3D-Design">3D 디자인</option>
            <option value="Planner">기획</option>
          </S.ChoosePosition>
          <S.ChooseHowwork required onChange={changeHowwork}>
            <option disabled selected hidden>채용 형태</option>
            <option>정규직</option>
            <option>비정규직</option>
            <option>인턴</option>
          </S.ChooseHowwork>
        </S.SearchBox>
        
        <S.PostWrapper>
          {ShowPosts}
        </S.PostWrapper>

        <S.StyledReactPaginate
          pageCount={totalPages}
          previousLabel=""
          nextLabel=""
          onPageChange={handlePageClick}
          containerClassName="containerPaginate"
          pageClassName="pagePaginate"
          activeClassName="ctivePagePaginate"
        ></S.StyledReactPaginate>
      </S.ContentWrapper>


      <Ask/>
    </div>
  )
}