import React, { Dispatch, SetStateAction } from "react";
import * as S from "./Modal.style";

const Modal = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <S.MainContainer>
      <S.MainBackground>
        <S.ModalHeader>
          <div>평과 과정 추가</div>
          <S.ExitBtn onClick={() => setModal(false)}>X</S.ExitBtn>
        </S.ModalHeader>
        <nav>
          <p>제목</p>
          <input type="text" placeholder="평과 제목을 입력해주세요." />
        </nav>
        <nav>
          <p>날짜</p>
          <input type="date" />
        </nav>
        <button>추가하기</button>
      </S.MainBackground>
    </S.MainContainer>
  );
};

export default Modal;
