import AskCNS from '../../asset/AskCNS.png';
import Image from 'next/image';
import styles from '../styles/Ask.module.css';

export default function Ask() {

    return(
        <div className={styles.Ask}>
            <p >채용팀에<br/>문의하기</p>
            <Image src={AskCNS} alt='Ask'/>
        </div>
    )
}