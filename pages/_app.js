import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quote from '../components/shared/Quote/Quote';
import axios from 'axios';
axios.defaults.baseURL = "https://api.apexdv.com";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ApexDv</title>
        <meta name="description" content="ApexDv"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Quote />
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    </>
  )
}

export default MyApp
