import Main from "../components/main/main";
import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import axios from "axios";

export async function getStaticProps() {
  const baseUrl = 'http://52.78.246.108:8080/'
  const option = 'api/recruitment/'
  
  // await 왜 붙여야 됌?
  const {data} = await axios.get(baseUrl+option);

  return {
    props : {
      getposts : data
    }
  }

}

export default function Home({getposts}) {

  return <Main getposts={getposts} />;
}
