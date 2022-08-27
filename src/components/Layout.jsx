import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, pagina}) => {
  return (
    <>

      <Head>
        <title>Guitar LA - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {children}
      <Footer />
    </>
  ) 
}

export default Layout;