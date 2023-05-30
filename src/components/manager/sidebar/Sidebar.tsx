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
  const [favPosition, setFavPosition] = useState<boolean>(false);
  const [position, setPosition] = useState([
    {
      name: "디자인",
      active: false,
      index: 0,
      List: [{ name: "웹 디자인", active: false }],
    },
    {
      name: "개발",
      active: false,
      index: 0,
      List: [
        { name: "프론트엔드 개발자", active: false },
        { name: "백엔드 개발자", active: false },
        { name: "안드로이드 개발자", active: false },
        { name: "iOS 개발자", active: false },
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
          <S.FavoriteTitleContainer
            onClick={() => {
              setFavPosition(!favPosition);
            }}
          >
            <p>즐겨찾기</p>
            <S.FavoriteDetailButton
              src={FavoritedetailBtn}
              alt="dd"
              isActive={favPosition}
            />
          </S.FavoriteTitleContainer>

          <>
            {favPosition &&
              position.map((value) => {
                return (
                  <>
                    {value.List.map((value) => {
                      if (value.active) {
                        return (
                          <S.PositionName>
                            <S.PositionRadioBtn
                              type="checkbox"
                              checked={value.active}
                              onClick={() => {
                                value.active = !value.active;
                              }}
                            />
                            <p>{value.name}</p>
                          </S.PositionName>
                        );
                      }
                    })}
                  </>
                );
              })}
          </>
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
                {value.active &&
                  value.List.map((value) => {
                    return (
                      <S.PositionName>
                        <S.PositionRadioBtn
                          type="checkbox"
                          checked={value.active}
                          onClick={() => (value.active = !value.active)}
                        />
                        <p>{value.name}</p>
                      </S.PositionName>
                    );
                  })}
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
