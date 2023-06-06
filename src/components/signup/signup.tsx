import * as S from "./signup.style"

// 회원가입
const signup = () => {
    return (
        <S.Wrapper>
            <S.GlobalStyle/>
            <S.ContentWrapper>
                <S.Title>관리자 회원가입</S.Title>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>아이디</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input></S.Input>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>비밀번호</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input></S.Input>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>이름</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input></S.Input>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>이메일</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input></S.Input>
                </S.InputWrapper>

                <S.AgreeWrapper>
                    <S.CheckAgree type="checkbox"/>
                    <S.AgreeLabel>개인정보 수집 및 이용에 동의합니다.</S.AgreeLabel>                    
                </S.AgreeWrapper>


                <S.SubmitBtn>가입하기</S.SubmitBtn>

            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default signup