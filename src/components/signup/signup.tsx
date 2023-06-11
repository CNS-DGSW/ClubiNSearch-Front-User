import { useState } from "react"
import * as S from "./signup.style"
import axios from "axios"
import API from "@/util/api"

// 회원가입
const signup = () => {

    const [UserInformation, setUserInformation] = useState({
        accountId : "",
        name : "",
        email : "",
        password : ""
    })

    const submitHandler = (e:any) => {
        e.preventDefault()
        // 정규식으로 값 정확한지 확인
        // null일 때 / 조건 안 지켰을 때 다른 경고
        // 정확하지 않으면 빨간색 띄우기

        API.post('/api/auth/join', UserInformation)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    return (
        <S.Wrapper>
            <S.GlobalStyle/>
            <S.ContentWrapper onSubmit={submitHandler}>
                <S.Title>관리자 회원가입</S.Title>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>아이디</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="영어 / 숫자를 섞어 3자 이상 입력해주세요." 
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, accountId : e.target.value }}
                        )
                    }}></S.Input>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>비밀번호</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="영어 / 숫자 / 특수문자를 섞어 5자 이상 입력해주세요."
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, password : e.target.value }}
                        )
                    }}></S.Input>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>이름</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="이름을 한 글자 이상 입력해주세요."
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, name : e.target.value }}
                        )
                    }}></S.Input>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>이메일</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="이메일을 입력해주세요."
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, email : e.target.value }}
                        )
                    }}></S.Input>
                </S.InputWrapper>

                <S.AgreeWrapper>
                    <S.CheckAgree type="checkbox"/>
                    <S.AgreeLabel>개인정보 수집 및 이용에 동의합니다.</S.AgreeLabel>                    
                </S.AgreeWrapper>


                <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>

            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default signup