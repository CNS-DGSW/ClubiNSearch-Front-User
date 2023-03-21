import md  from 'markdown-it';
import Ad from "../../../asset/Ad.png";
import Image from 'next/image';
// import {useState,useEffect} from "react";
import styles from '../../styles/slug.module.css';
import fs from 'fs';
import matter from 'gray-matter';
import Ask from '../../component/Ask'

export async function getStaticPaths() {
  const files = fs.readdirSync('ContentDetail');
  const paths = files.map((fileName) => ({
      params: {
          slug: fileName.replace('.md','')
      },
  }));
  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({params: {slug} }) {
  const file = fs.readFileSync(`ContentDetail/${slug}.md`,'utf-8');
  const { data: info, content } = matter(file);
    //console.log(file)
  return {
      props: {
          info,
          content
      }
  }
}

export default function DetailPage({ info, content }) {
    /* console.log(info)
   const [a,setA] = useState(0)
   useEffect(()=>{
    setA(10)
   },[]) */
    return (
        <div>
            <Image src={Ad} alt="Ad" width="1512" height='107'/>
            <div dangerouslySetInnerHTML={{__html: md().render(content)}} className={styles.content}/>
            <div className={styles.Box}>
            <hr className={styles.Hr}/>
            <div className={styles.EachBox}>
                <p className={styles.Label}>소속</p>
                <p className={styles.Introduce}>{info.group}</p>
            </div>
            <hr className={styles.Hr}/>
            <div className={styles.EachBox}>
                <p className={styles.Label}>채용 형태</p>
                <p className={styles.Introduce}>{info.how}</p>
            </div>
            <hr className={styles.Hr}/>
            <div className={styles.EachBox}>
                <p className={styles.Label}>직군</p>
                <p className={styles.Introduce}>{info.part}</p>
            </div>
            <button className={styles.ApplyBtn}>지원하기</button>
        </div>

        <Ask/>

        </div>
    );
}