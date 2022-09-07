import Head from 'next/head'
import Script from 'next/script'
import NavbarComponent from '../components/navbar/navbar'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { ThemeContext, themes } from '../components/themeContext';
import FooterComponent from '../components/home/footer/footer';


/* eslint-disable @next/next/no-img-element */

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(themes.light);
  const [name, setName] = useState("light");

  const onClick = () => {
    if (theme === themes.light) {
      setTheme(themes.dark)
      setName("dark")

    } else {
      setTheme(themes.light)
      setName("light")
    }
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous" />
      <Script src="https://kit.fontawesome.com/f78046fd3a.js" crossOrigin="anonymous" />
      <ThemeContext.Provider value={theme}>
        <div className={`App ${name}`} style={theme}>
          <NavbarComponent Click={onClick} />
          <Component {...pageProps} />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default MyApp
