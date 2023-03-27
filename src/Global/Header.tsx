import headerLogo from '../../asset/headerLogo.svg';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header(){

  return(
    <header>
      <div className={styles.Nav}>
        <Image src={headerLogo} alt="logo" width={179} height={35} className={styles.Logo}/>
        <div className={styles.NavItem}>채용 공고</div>
        <div className={styles.NavItem}>팀 문화</div>
        <div className={styles.NavItem}>지원서 작성</div>
        <div className={styles.NavItem}>자주 묻는 질문</div>
      </div>
    </header>
  )
}