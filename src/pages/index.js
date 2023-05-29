import Main from "../components/main/main";
import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import API from "@/util/api.ts"

export async function getStaticProps() {
  const option = 'api/recruitment/'
  
  const {data} = await API.get('api/recruitment/');

  const posi = data.map((d)=>(
    d.position
  ))

  return {
    props : {
      getposts : data,
      posi
    }
  }

}

export default function Home({getposts,posi}) {

  return <Main getposts={getposts} posi={posi} />;
}
