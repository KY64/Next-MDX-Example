import {AppProps} from "next/app";

const MyApp = ({Component, pageProps} :AppProps) => (
  <>
  <Component {...pageProps} />
    <style jsx global>{`
      body {
        margin: 0;
        background: #f8f8f8;
        font-family: "sans-serif";
      }
    `}</style>
  </>
)

export default MyApp