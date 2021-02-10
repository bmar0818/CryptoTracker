import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({children, title = "Crypto Tracker"}) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link href="/" passHref>
                    <a className='coin_logo'>
                        <Image 

                            src="/favpng_050-trading-text.png" 
                            width={200}
                            height={150}
                            
                        />
                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;