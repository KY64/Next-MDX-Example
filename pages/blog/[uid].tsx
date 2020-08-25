import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Title, Subtitle, Paragraph, Image, Navbar, Footer } from "@/.";
import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import fs from "fs";

// Markdown custom component
const components: object = {
  h1: Title,
  h2: Subtitle,
  p: Paragraph,
  img: Image,
};

interface indexProps {
  filename: string;
}

const Blog = ({ filename }: indexProps) => {
  const Content = dynamic(() => import(`../../${filename}`));
  return (
    <>
      <Navbar logo="http://www.coolgenerator.com/Data/Textdesign/202008/535249cb9a77839f16f715f25637ec7e.png" />
      <main style={{ fontFamily: "sans-serif" }}>
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filename = `posts/${params.uid}.mdx`;
  return {
    props: {
      filename
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames: string[] = fs.readdirSync("posts");
  const paths = filenames.map((file) => {
    return {
      params: {
        uid: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false
  };
};

export default Blog;
