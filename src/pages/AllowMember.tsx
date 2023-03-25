import Footer from "@/components/Footer";
import InfoInput from "@/components/InfoInput";
import styles from "../styles/AllowMemberStyle.module.css";

const AllowMember = () => {
  return (
    <>
      <div className={styles.MainWrapDiv}>
        <nav>
          <p className={styles.title}>지원서 작성하기</p>
          <p className={styles.subTitle}>
            CNS 프론트 엔드 ( 아이다 신개발 론칭 )
          </p>
        </nav>
        <InfoInput
          title="이름"
          isEssential={true}
          placehorderContext="이름을 입력해주세요."
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
          title="학번"
          isEssential={true}
          placehorderContext="학번을 입력해주세요."
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
          title="연락처"
          isEssential={true}
          placehorderContext='"-"를 제외한 연락처를 입력해주세요.'
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
          title="한줄 자기소개"
          isEssential={true}
          placehorderContext="자유롭게 입력해주세요."
          errorAlertContext="ErrorAlret"
        ></InfoInput>
        <InfoInput
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

        <img src="" alt="CNS 저거 무슨 사진이야 (컴퓨터)" />
        <nav>
          <input type="checkbox" />
          <p>개인정보 수집 및 이용에 동의합니다.</p>
        </nav>
        <p>
          <button>제출하기</button>
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllowMember;
