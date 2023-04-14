import md  from 'markdown-it';
import Ad from "../../asset/Ad.svg";
import Image from 'next/image';
// import {useState,useEffect} from "react";
import * as S from "../../components/detail/detail.style";
import fs from 'fs';
import matter from 'gray-matter';
import Ask from '../../components/common/Ask/Ask';
import Link from 'next/link';
import Detail from "../../components/detail/detail";

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

    return <Detail info={info} content={content}/>;
}