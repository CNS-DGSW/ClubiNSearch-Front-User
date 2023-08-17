import AskCNS from "../../../asset/AskCNS.svg";
import Image from "next/image";
import * as S from "./Ask.style";

export default function Ask() {
  const askEvent = () => {
    alert("문의 사항은 카카오워크\n2-3 조수현학생에게 문의 부탁드립니다.");
  };
  return (
    <S.Ask onClick={askEvent}>
      <p>
        채용팀에
        <br />
        문의하기
      </p>
      <Image src={AskCNS} alt="Ask" />
    </S.Ask>
  );
}
