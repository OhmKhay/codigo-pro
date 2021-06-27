import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import './layout.scss';
const Layout = ({ name = 'Our iOS, Android & Web Development Work', children}) => {
    return (
        <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>  {name} | Codigo </title>
		<meta
			name="description"
			content="Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX &amp; SEO. 300 apps developed since 2010."
		/>
		<meta property="og:image" content="https://www.codigo.co/img/social.jpg" />
		<link rel="shortcut icon" href="favicon.ico" />
		<meta name="pinterest" content="nopin" />
        </Head>
            <Header />
           
                {children}
       
            <Footer />
        </>
    )
}

export default Layout
