

import 'tailwindcss/tailwind.css';

import Footer from "@/components/footer/Footer";
import TopNav from "@/components/topnav/TopNav";
import './pages.css'



function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <div className=''>
            <TopNav />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
