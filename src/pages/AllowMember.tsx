import Footer from "@/components/Footer";
import InfoInput from "@/components/InfoInput";
import { useEffect, useState } from "react";
import cnsComputer from "../../asset/cnsComputer.svg";
import * as S from "../styles/AllowMemberStyle";

interface IContentsValue {
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
  portfolio?: File | null;
  link: string;
}

const AllowMember = () => {
  const [contentsValue, setContentsValue] = useState<IContentsValue>({
    name: "",
    schoolNumber: "",
    phoneNumber: "",
    introduce: "",
    portfolio: null,
    link: "",
  });
  const [name, setName] = useState<string>("");
  const [schoolNumber, setSchoolNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [check, setCheck] = useState<boolean>();

  const [errorManager, setErrorManager] = useState();

  useEffect(() => {
    setContentsValue({
      name: name,
      schoolNumber: schoolNumber,
      phoneNumber: phoneNumber,
      introduce: introduce,
      link: link,
    });
  }, [name, schoolNumber, phoneNumber, introduce, link]);

  return (
    <>
      <S.MainWrapDiv>
        <nav>
          <S.title>지원서 작성하기</S.title>
          <S.subTitle>CNS 프론트 엔드 ( 아이다 신개발 론칭 )</S.subTitle>
        </nav>
        <InfoInput
          index={1}
          value={name}
          setValue={setName}
          entrieValue={contentsValue}
          title="이름"
          isEssential={true}
          placehorderContext="이름을 입력해주세요."
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
          index={2}
          value={schoolNumber}
          setValue={setSchoolNumber}
          entrieValue={contentsValue}
          title="학번"
          isEssential={true}
          placehorderContext="학번을 입력해주세요."
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
          index={3}
          value={phoneNumber}
          setValue={setPhoneNumber}
          entrieValue={contentsValue}
          title="연락처"
          isEssential={true}
          placehorderContext='"-"를 제외한 연락처를 입력해주세요.'
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
          index={4}
          value={introduce}
          setValue={setIntroduce}
          entrieValue={contentsValue}
          title="한줄 자기소개"
          isEssential={true}
          placehorderContext="자유롭게 입력해주세요."
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
          index={5}
          value={name}
          setValue={setName}
          entrieValue={contentsValue}
          title="포트폴리오 (선택사항)"
          isEssential={false}
          placehorderContext="pdf형식을 권장합니다."
          errorAlertContext="ErrorAlret"
          isFile={true}
          isExplane={true}
          explaneContent={[
            "포트폴리오는 필수가 아닌 선택사항입니다.",
            "파일은 pdf형식을 권장하며 최대 50mb까지 업로드 하실 수 있습니다.",
            "파일은 면접이 끝나는 즉시 삭제될 예정이며 외부 공유를 금지합니다.",
          ]}
        ></InfoInput>
        <InfoInput
          index={6}
          value={link}
          setValue={setLink}
          entrieValue={contentsValue}
          title="링크 (선택사항)"
          isEssential={false}
          placehorderContext="https://"
          errorAlertContext="ErrorAlret"
          isExplane={true}
          explaneContent={[
            "링크 또한 필수가 아닌 선택사항입니다.",
            "자신을 드러낼 수 있는 깃허브, 개인 블로그 등 자유롭게 입력해주세요.",
          ]}
        ></InfoInput>

        <S.CNSComputer
          src={cnsComputer}
          alt="CNS 저거 무슨 사진이야 (컴퓨터)"
          width={10}
          height={10}
        />
        <S.PrivacyCheckBoxWrap>
          <S.PrivacyCheckBox
            type="checkbox"
            onChange={() => setCheck(!check)}
          />
          <S.PrivacyCheckContext>
            개인정보 수집 및 이용에 동의합니다.
          </S.PrivacyCheckContext>
        </S.PrivacyCheckBoxWrap>
        <p>
          <S.ButtonStyle
            onClick={() => {
              if (check) {
                alert("제출하시겠습니까?");
              } else {
                alert("개인정보 수집 동의에 동의해주세요.");
              }
            }}
          >
            제출하기
          </S.ButtonStyle>
        </p>
      </S.MainWrapDiv>
      <Footer></Footer>
    </>
  );
};

export default AllowMember;
