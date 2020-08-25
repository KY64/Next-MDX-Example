// Menggunakan module ReactJS
import * as React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import fs from "fs";
// Mengimpor konten file hello.mdx
import { Footer, Grid, Card, Navbar, Featured } from "@/.";

interface indexProps {
  posts: [
    {
      uid: string;
      title: string;
      description: string;
      cover: string;
    }
  ];
}

// Function Component
const Index: React.FC<indexProps> = ({ posts }: indexProps) => {
  return (
    <>
      <Navbar logo="http://www.coolgenerator.com/Data/Textdesign/202008/535249cb9a77839f16f715f25637ec7e.png" />
      <main>
        <section id="featured-post">
          <Featured title={posts[0].title} description={posts[0].description} cover={posts[0].cover} path={`blog/${posts[0].uid}`}/>
        </section>
        <section id="latest-post">
          <Grid col="320px 320px 320px" row="auto" gap="30px" justify="center">
            {posts.map((v, i) => {
              if (i > 0)
                return (
                  <Link href="blog/[uid]" as={`blog/${v.uid}`}>
                    <a style={{ color: "black", textDecoration: "none" }}>
                      <Card
                        title={v.title}
                        subtitle={v.description}
                        cover={v.cover}
                      />
                    </a>
                  </Link>
                );
            })}
          </Grid>
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filename: string[] = fs.readdirSync("posts");
  let posts: object[] = [];
  for (let i = 0; i < filename.length; i++) {
    let stats = fs.statSync(`posts/${filename[i]}`)
    console.log(stats)
    let obj = await import(`posts/${filename[i]}`).then((mod) => mod.meta);
    posts.push(obj);
  }

  return {
    props: {
      posts,
    },
  };
};

export default Index;
