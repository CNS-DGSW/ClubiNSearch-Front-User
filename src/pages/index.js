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
  
  // await 왜 붙여야 됌?
  const {data} = await API.get('api/recruitment/');

  return {
    props : {
      getposts : data
    }
  }

}

export default function Home({getposts}) {

  return <Main getposts={getposts} />;
}
