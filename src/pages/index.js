import fs from 'fs';
import matter from 'gray-matter';

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

export default function Home() {
  return (
    <div></div>
  )
}