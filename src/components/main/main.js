// import fs from 'fs';
import Ask from '../common/Ask/Ask.tsx';
import Image from 'next/image';
import Ad from '../../asset/Ad.svg';
import SearchIcon from '../../asset/SearchIcon.svg';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import * as S from "./index.style";
import axios from 'axios';

export default function Main({ getposts }) {
  const [posts, setPosts] = useState(getposts);
  const [groupstyle, setGroupstyle] = useState();
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState(Math.ceil(posts.length / 7));
  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = posts.slice(itemOffset, itemOffset + 7);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * 7) % posts.length;
    setItemOffset(newOffset);
  };

  const ShowPosts = currentItems.map(({title,position,employmentType},index)=>{
      return (
      <S.EachPostBox key={title}>
        <Link href={`/Detail/${title}`}>
          {title}
        </Link>
        <S.PostPositionHow>{position}</S.PostPositionHow>
        <S.PostPositionHow>{employmentType}</S.PostPositionHow>
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
            <S.SearchTitleInput placeholder='포지션 역할 검색하기'/>
          </S.SearchPosition>
          
          <S.ChoosePositionHow required  onChange={changePosition}>
            <option disabled selected hidden>채용 포지션</option>
            {
              // option 채우기
            }
          </S.ChoosePositionHow>
          <S.ChoosePositionHow required onChange={changeHowwork}>
            <option disabled selected hidden>채용 형태</option>
            {
              // option 채우기
            }
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
