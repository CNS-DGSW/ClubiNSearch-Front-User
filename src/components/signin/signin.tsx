import * as S from "./signin.style"
import TitleBig from "@/asset/TitleBig.svg"
import Image from "next/image"

// 로그인
const signin = () => {
    return (
        <>
            <S.ContentWrapper>
                <S.TitleLogo alt="title" src={TitleBig}/>
                <S.Title>관리자 로그인</S.Title>

                <S.AllWithoutTitle>
                    <S.InputWrapper>
                        <S.InputLabel>아이디</S.InputLabel>
                        <S.Input></S.Input>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <S.InputLabel>비밀번호</S.InputLabel>
                        <S.Input></S.Input>
                    </S.InputWrapper>                    

                <S.SubmitBtn>로그인</S.SubmitBtn>

                <S.GrayLabel>회원가입</S.GrayLabel>
                </S.AllWithoutTitle>

            </S.ContentWrapper>
        </>
    )
}

export default signin