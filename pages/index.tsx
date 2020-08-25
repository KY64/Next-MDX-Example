// Import module
import * as React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import fs from "fs";
// Import component
import { Footer, Grid, Card, Navbar, Featured } from "@/.";

// Required props
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

// Passing props to Functional Component
export const getStaticProps: GetStaticProps = async () => {
  // Read directory
  const filename: string[] = fs.readdirSync("posts");
  let posts: object[] = [];

  // Iteration
  for (let i = 0; i < filename.length; i++) {
    // Get meta object
    let obj = await import(`posts/${filename[i]}`).then((mod) => mod.meta);
    // Push object to array
    posts.push(obj);
  }

  // Pass props to rendered page
  return {
    props: {
      posts,
    },
  };
};

export default Index;
