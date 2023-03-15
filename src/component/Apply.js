import styles from '../styles/Apply.module.css'
// import fs from 'fs';

export async function getStaticProps({params: {slug} }) {
    

    const file = fs.readFileSync(`ContentDetail/${slug}.md`,'utf-8');
    const { data: info, content } = matter(file);
  
    return {
        props: {
            info,
            content
        }
    }
  }

export default function Apply({info}) {

    return (
        <div className={styles.Box}>
            <hr/>
            <div>
                <p>소속</p>
                <p>{info}</p>
            </div>
            <hr/>
            <div>
                <p>정규직</p>
                <p></p>
            </div>
            <hr/>
            <div>
                <p>직군</p>
                <p></p>
            </div>
            <button>지원하기</button>
        </div>
    )
}