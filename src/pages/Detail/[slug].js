import md  from 'markdown-it';
import Ad from "../../../asset/Ad.svg";
import Image from 'next/image';
// import {useState,useEffect} from "react";
import * as S from "../../styles/slug.style";
import fs from 'fs';
import matter from 'gray-matter';
import Ask from '../../component/Ask';

export async function getStaticPaths() {
  const files = fs.readdirSync('ContentDetail');
  const paths = files.map((fileName) => ({
      params: {
          slug: fileName.replace('.md','')
      },
  }));
  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({params: {slug} }) {
  const file = fs.readFileSync(`ContentDetail/${slug}.md`,'utf-8');
  const { data: info, content } = matter(file);
    //console.log(file)
  return {
      props: {
          info,
          content
      }
  }
}

export default function DetailPage({ info, content }) {
    /* console.log(info)
   const [a,setA] = useState(0)
   useEffect(()=>{
    setA(10)
   },[]) */
    return (
        <div>
            <S.AdWrapper>
                <Image src={Ad} alt="Ad" width="1512" height='107'/>
            </S.AdWrapper>
            <S.Content dangerouslySetInnerHTML={{__html: md().render(content)}}/>
            <S.Box>
                <S.Hr/>
            
                <S.EachBox>
                    <S.Label>소속</S.Label>
                    <S.Introduce>{info.group}</S.Introduce>
                </S.EachBox>

                <S.Hr/>

                <S.EachBox>
                    <S.Label>채용 형태</S.Label>
                    <S.Introduce>{info.how}</S.Introduce>
                </S.EachBox>

                <S.Hr/>

                <S.EachBox>
                    <S.Label>직군</S.Label>
                    <S.Introduce>{info.part}</S.Introduce>
                </S.EachBox>

                <S.ApplyBtn>지원하기</S.ApplyBtn>
            </S.Box>

            <Ask/>
        </div>
    );
}