// Import module
import fs from "fs";
import * as React from "react";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import { GetStaticProps, GetStaticPaths } from "next";
// Import component
import { Title, Subtitle, Paragraph, Image, Navbar, Footer } from "@/.";

// Markdown custom component
const components: object = {
  h1: Title,
  h2: Subtitle,
  p: Paragraph,
  img: Image,
};

// Required props
interface indexProps {
  filename: string;
}

// Function component
const Blog = ({ filename }: indexProps) => {
  const Content = dynamic(() => import(`../../${filename}`));
  return (
    <>
      <Navbar logo="http://www.coolgenerator.com/Data/Textdesign/202008/535249cb9a77839f16f715f25637ec7e.png" />
      <main style={{ fontFamily: "sans-serif" }}>
        {/* Render markdown using custom component */}
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get URL parameter then concate with string
  const filename = `posts/${params.uid}.mdx`;

  // Pass props to component
  return {
    props: {
      filename
    },
  };
};

// Define route
export const getStaticPaths: GetStaticPaths = async () => {
  // Read directory content
  const filenames: string[] = fs.readdirSync("posts");
  // Iterate array
  const paths = filenames.map((file) => {
    return {
      params: {
        uid: file.replace(".mdx", ""),
      },
    };
  });

  // Return defined parameter
  return {
    paths,
    fallback: false
  };
};

export default Blog;
