// import fs from 'fs';
import matter from 'gray-matter';

/* export async function getStaticProps() {
  const files = fs.readdirSync('ContentDetail');
  const file = files.map((fileName) => ({
      params: {
          slug: fileName.replace('.md','')
      },
  }));

  return {
      file,
      fallback: false,
  };
} */

export default function Home() {
  return (
    <div></div>
  )
}