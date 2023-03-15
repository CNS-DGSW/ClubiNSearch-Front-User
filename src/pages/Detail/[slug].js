import md  from 'markdown-it';
import Ad from "../../../asset/Ad.png";
import Image from 'next/image';
// import {useState,useEffect} from "react";
import styles from '../../styles/slug.module.css';
import Apply from '../../component/Apply';
import fs from 'fs';
import matter from 'gray-matter';

export async function getStaticPaths() {
  const files = fs.readdirSync('ContentDetail');
  const paths = files.map((fileName) => ({
      params: {
          slug: fileName.replace('.md','')
      },
  }));
  console.log(paths[0])
  return {
      paths,
      fallback: false,
  };
}

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
            <Apply></Apply>
        </div>
    );
}