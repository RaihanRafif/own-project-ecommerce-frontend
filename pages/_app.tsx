

import 'tailwindcss/tailwind.css';

import Footer from "@/components/footer/Footer";
import TopNav from "@/components/topnav/TopNav";



function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <>
            <TopNav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
