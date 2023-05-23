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
import API from "@/util/api.ts"

export async function getStaticPaths() {

  const {data} = await API.get('/api/recruitment/')
  const files = data;

  const paths = files.map((fileName) => ({
    params: {
      // fileName.id 자료형은 숫자
      slug: (fileName.id).toString()
    },
  }));
  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({params: {slug} }) {
  const {data} = await API.get(`/api/recruitment/${slug}`);
  return {
      props: {
        data
      }
  }
}

export default function DetailPage({ data }) {

    return <Detail data={data}/>;
}