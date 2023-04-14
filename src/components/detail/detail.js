import * as S from "./detail.style";
import Image from "next/image";
import Link from "next/link";
import Ask from "../common/Ask/Ask";
import Ad from "../../asset/Ad.svg";
import fs from 'fs';
import matter from 'gray-matter';
import md  from 'markdown-it';

export default function Detail({ info, content }) {

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

                <S.ApplyBtn>
                    <Link href="/apply">지원하기</Link>
                </S.ApplyBtn>
            </S.Box>

            <Ask/>
        </div>
    );
}