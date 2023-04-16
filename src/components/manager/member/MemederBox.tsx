import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import React, { useRef, useState } from "react";
import * as S from "./MemberBox.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";

const MemederBox = (props: IMemberBoxValue) => {
  const [menuClick, setMenuClick] = useState<boolean>(false);

  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.TitleConatainer>
          <S.Title>{props.title}</S.Title>
          <S.TitleLeftContainer>
            <S.TitleDateInput type="date" placeholder="날짜 선택" />
            <S.TrashCanIcon
              src={TrashCanIcon}
              alt=""
              onClick={() => setMenuClick(true)}
            />
          </S.TitleLeftContainer>
        </S.TitleConatainer>
        <div></div>
        <div></div>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default MemederBox;
