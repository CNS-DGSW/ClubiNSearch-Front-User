import Main from "../components/main/main";
import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export async function getStaticProps() {
  const files = fs.readdirSync("ContentDetail");

  const getposts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`ContentDetail/${fileName}`, "utf-8");
    const { data: info, content } = matter(readFile);
    return {
      info,
      slug,
    };
  });

  console.log(getposts)

  return {
    props: {
      getposts,
    },
  };
}

export default function Home({getposts}) {

  return <Main getposts={getposts} />;
}
