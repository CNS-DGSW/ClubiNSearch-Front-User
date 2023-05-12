import React, { useState } from "react";
import * as S from "./Sidebar.style";
import {
  Logo,
  detailBtn,
  FavoritedetailBtn,
  AnnounceIcon,
  EditButton,
  FileIcon,
} from "./useSideBar";
import PlusButton from "../common/PlusButton";

const Sidebar = () => {
  const [position, setPosition] = useState([
    {
      name: "디자인",
      active: false,
      index: 0,
      List: [{ name: "웹 디자인" }],
    },
    {
      name: "개발",
      active: false,
      index: 0,
      List: [
        { name: "프론트엔드 개발자" },
        { name: "백엔드 개발자" },
        { name: "안드로이드 개발자" },
        { name: "iOS 개발자" },
      ],
    },
  ]);

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <S.TitleImage src={Logo} alt="dd" />
        <S.TitleContext>Care And Service</S.TitleContext>
      </S.TitleContainer>
      <S.ContentsContainer>
        <S.AnnounceContentsContainer>
          <S.AnnounceTitleContainer>
            <S.AnnounceIcon src={AnnounceIcon} alt="announceIcon" />
            <p>공고 리스트</p>
          </S.AnnounceTitleContainer>
          <S.AnnounceEditContainer>
            <S.AnnounceImage src={EditButton} alt="editBtn" />
            <PlusButton />
          </S.AnnounceEditContainer>
        </S.AnnounceContentsContainer>
        <S.SubContentsContainer>
          <S.FavoriteTitleContainer>
            <p>즐겨찾기</p>
            <S.FavoriteDetailButton src={FavoritedetailBtn} alt="dd" />
          </S.FavoriteTitleContainer>
          <div></div>
        </S.SubContentsContainer>
        <S.SubContentsContainer>
          {position.map((value, index) => {
            return (
              <>
                <S.PositionTitleContaiver
                  onClick={() => {
                    console.log(value.active);
                    let copyPosition = [...position];
                    copyPosition[index].active = !copyPosition[index].active;
                    setPosition([...copyPosition]);
                  }}
                >
                  <S.DetailBtn
                    src={detailBtn}
                    alt="Image"
                    isActive={value.active}
                  />
                  <S.FileIcon src={FileIcon} alt="dd" />
                  <S.PositionTitle>{value.name}</S.PositionTitle>
                </S.PositionTitleContaiver>
                {value.active
                  ? value.List.map((value, index) => {
                      return (
                        <S.PositionName>
                          <S.PositionRadioBtn type="checkbox" />
                          <p>{value.name}</p>
                        </S.PositionName>
                      );
                    })
                  : null}
              </>
            );
          })}
        </S.SubContentsContainer>
      </S.ContentsContainer>
      <S.InquiryBox></S.InquiryBox>
    </S.MainContainer>
  );
};

export default Sidebar;
