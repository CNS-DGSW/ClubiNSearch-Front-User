import Main from "../components/main/main";
import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import axios from "axios";
import API from "@/util/api"
import {recuitment , EmploymentType} from "@/types/Recuitment"

export async function getStaticProps() {
  const option = 'api/recruitment/'
  
  const {data} : recuitment[] = await API.get('api/recruitment/');
  console.log(data)

  const posi = data.map((d : recuitment)=>(
    d.position
  ))

  return {
    props : {
      getposts : data,
      posi
    }
  }

}

export default function Home ({getposts, posi} : recuitment[] & EmploymentType ): JSX.Element {

  return <Main getposts={getposts} posi={posi} />;
}
