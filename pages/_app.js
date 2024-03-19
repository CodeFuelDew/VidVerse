import "@/app/globals.css"
import Head from 'next/head';
import faviconImg from "@/public/images/favicon.ico"; // Import your favicon image

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={faviconImg.src} type="image/x-icon" />
        <title>VidVerse</title>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;