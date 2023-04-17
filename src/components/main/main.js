// import fs from 'fs';
import Ask from '../common/Ask/Ask';
import Image from 'next/image';
import Ad from '../../asset/Ad.svg';
import SearchIcon from '../../asset/SearchIcon.svg';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import * as S from "./index.style";

export default function Main({ getposts }) {
  const [posts, setPosts] = useState(getposts);
  const [groupstyle, setGroupstyle] = useState();
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState(Math.ceil(posts && posts.length / 7));
  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = posts && posts.slice(itemOffset, itemOffset + 7);

  const contentRef = useRef([]);
  const backRef = useRef(null);

  const [groupType, setGroupType] = useState(
    getposts && getposts.filter(({ info, slug }, index) => {
      return (
        getposts.findIndex(({ info: info2 }, jdex) => {
          return info.group === info2.group;
        }) === index 
      );
    })
  );

  const searchTitle = (e) => {
    setPosts(posts.filter((post) => post.info.title.includes(e.target.value)));
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      searchTitle(e);
    }
  };

  const changePosition = (e) => {
    setPosts(getposts.filter((post) => post.info.part === e.target.value));
  };

  const changeHowwork = (e) => {
    setPosts(getposts.filter((post) => post.info.how === e.target.value));
  };

  const clickGroup = (e) => {
    setGroupstyle(e.target.id);
    const backTag  = document.getElementById(`${e.target.id}back`);
    backTag.style.width = e.target.clientWidth + "px";
    backTag.style.height = e.target.clientHeight + "px";

    setPosts(getposts.filter((post) => post.info.group === e.target.id));
  };

  useEffect(() => {
    groupType && groupType.map(({ slug }, idx) => {
      // const contentTag = contentRef[idx];
      // const backTag = backRef[idx];

      // backTag.style.width = contentTag.clientWidth + "px";
      // backTag.style.height = contentTag.clientHeight + "px";

      setTotalPages(Math.ceil(posts.length / 7));
    });
  }, []);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * 7) % posts.length;
    setItemOffset(newOffset);
  };

/*  const ShowGroup = groupType && groupType.map(({info,slug},idx)=> {
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
    }) */

  const ShowPosts = currentItems && currentItems.map(({info,slug},index)=>{
      return (
      <S.EachPostBox key={info}>
        <Link href={`/Detail/${slug}`}>
          {info.title}
        </Link>
        <S.PostPositionHow>{info.part}</S.PostPositionHow>
        <S.PostPositionHow>{info.how}</S.PostPositionHow>
      </S.EachPostBox>
      )
    })

  return (
    <S.Wrapper>
      <S.AdWrapper>
        <Image src={Ad} alt="Ad"/>
      </S.AdWrapper>

      <S.ContentWrapperWithoutPagination>
        <S.IntroH1>가슴 뛰는 미래,<br/>내일이 있는 삶</S.IntroH1>
        <S.IntroDiv>우리는 “세상을 이롭게 하는 소프트웨어 개발자가 되겠다”는  같은 목표에 마음이 움직여<br/> 
              이곳 “DGSW”에 모이게 되었습니다. DGSW는 모두가 협동하여 서로의 목표를 향해 나아갑니다.<br/>
              동료들과 함께 서로 도우며 불가능한 가능하게 하며 열정적으로 유능한 개발자로 성장하고 있습니다.<br/>
              가슴이 설레시나요?지금이 바로 “DGSW”동아리에 합류할 때입니다. 
        </S.IntroDiv>

        <S.SearchBox>
          <S.SearchPosition>
            <Image src={SearchIcon} alt='SearchIcon'/>
            <S.SearchTitleInput placeholder='포지션 역할 검색하기' onKeyPress={onKeyPress}/>
          </S.SearchPosition>
          
          <S.ChoosePositionHow required  onChange={changePosition}>
            <option disabled selected hidden>채용 포지션</option>
            <option value="Front-end">프론트엔드</option>
            <option value="Back-end">벡엔드</option>
            <option value="Designer">디자이너</option>
            <option value="3D-Design">3D 디자인</option>
            <option value="Planner">기획</option>
          </S.ChoosePositionHow>
          <S.ChoosePositionHow required onChange={changeHowwork}>
            <option disabled selected hidden>채용 형태</option>
            <option>정규직</option>
            <option>비정규직</option>
            <option>인턴</option>
          </S.ChoosePositionHow>
        </S.SearchBox>
        
        <S.PostWrapper>
          {ShowPosts}
        </S.PostWrapper>
      </S.ContentWrapperWithoutPagination>
      
      <S.StyledReactPaginate
        pageCount={totalPages}
        previousLabel=""
        nextLabel=""
        onPageChange={handlePageClick}
        containerClassName="containerPaginate"
        pageClassName="pagePaginate"
      ></S.StyledReactPaginate>

      <Ask />
    </S.Wrapper>
  );
}
