import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.MainFooter}>
      <nav className={styles.ContentWrapNav}>
        <nav>
          <p className={styles.title}>서비스</p>
          <ul className={styles.ContextWrap}>
            <li className={styles.Context}>공지사항</li>
            <li className={styles.Context}>자주 묻는 질문</li>
          </ul>
        </nav>
        <nav>
          <p className={styles.title}>동아리</p>
          <ul className={styles.ContextWrap}>
            <li className={styles.subTitle}>동아리 소개</li>
            <li className={styles.Context}>CNS</li>
            <li className={styles.Context}>B1nd</li>
            <li className={styles.Context}>Ducami</li>
            <li className={styles.Context}>Alt</li>
            <li className={styles.Context}>3D</li>
          </ul>
        </nav>
        <nav>
          <p className={styles.title}>문의</p>
          <ul className={styles.ContextWrap}>
            <li className={styles.subTitle}>문의사항</li>
          </ul>
        </nav>
        <nav>
          <p className={styles.title}>고객센터</p>
          <ul className={styles.ContextWrap}>
            <li className={styles.subTitle}>버그 접수</li>
            <li className={styles.Context}>전화 : 010-1234-5678</li>
            <li className={styles.Context}>이메일 : DGSW2023@dgsw.hs.kr</li>
          </ul>
        </nav>
      </nav>
    </footer>
  );
};

export default Footer;
