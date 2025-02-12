import * as S from "./detail.style";
import Image from "next/image";
import Link from "next/link";
import Ask from "../common/Ask/Ask";
import Ad from "../../asset/Ad.svg";
import md from "markdown-it";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getToday } from "@/util/getToday";
import { isOverDate } from "@/store/atom";
import { useRecoilState } from "recoil";

export default function Detail({ data }) {
  const router = useRouter();
  const [pageId, setPageID] = useState(null);
  const [isOverDateRecoil, setIsOverDateRecoil] = useRecoilState(isOverDate);
  const {
    title,
    clubName,
    position,
    detailContent,
    employmentType,
    startDate,
    endDate,
  } = data;
  const compareDate = () => {
    if (endDate) {
      const today = getToday();
      const EachTodayDate = today.split("-");
      const EachStartDate = startDate.split("-");
      const EachEndDate = endDate.split("-");
      if (
        Number(EachTodayDate[0]) < Number(EachStartDate[0]) &&
        Number(EachTodayDate[1]) < Number(EachStartDate[1]) &&
        Number(EachTodayDate[2]) < Number(EachStartDate[2])
      ) {
        setIsOverDateRecoil(true);
        return;
      }
      EachTodayDate.map((e, i) => {
        if (Number(e) > Number(EachEndDate[i])) {
          setIsOverDateRecoil(true);
          return;
        }
      });
      setIsOverDateRecoil(false);
    }
  };

  useEffect(() => {
    const { slug } = router.query;
    console.log(data);
    setPageID(slug);
    compareDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <div>
      <S.AdWrapper>
        <Image src={Ad} alt="Ad" width="1512" height="107" />
      </S.AdWrapper>
      <S.ContentWrapper>
        <div>
          <S.Content
            dangerouslySetInnerHTML={{ __html: md().render(`# ${title}`) }}
          />
          <S.Content
            dangerouslySetInnerHTML={{ __html: md().render(detailContent) }}
          />
        </div>
        <S.Box>
          <S.Hr />
          <S.EachBox>
            <S.Label>소속</S.Label>
            <S.Introduce>{clubName}</S.Introduce>
          </S.EachBox>

          <S.Hr />
          <S.EachBox>
            <S.Label>채용 형태</S.Label>
            <S.Introduce>{employmentType}</S.Introduce>
          </S.EachBox>

          <S.Hr />
          <S.EachBox>
            <S.Label>직군</S.Label>
            <S.Introduce>{position}</S.Introduce>
          </S.EachBox>

          <S.Hr />
          <S.EachBox>
            <S.Label>기간</S.Label>
            <S.Introduce>
              {startDate} ~ <br />
              {endDate}
            </S.Introduce>
          </S.EachBox>

          {isOverDateRecoil ? (
            <S.FinishApplyBtn>지원이 끝났습니다.</S.FinishApplyBtn>
          ) : (
            <Link href={`/apply/${pageId}`}>
              <S.ApplyBtn>지원하기</S.ApplyBtn>
            </Link>
          )}
        </S.Box>
      </S.ContentWrapper>
      <Ask />
    </div>
  );
}
