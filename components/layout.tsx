import Head from "next/head";
import Image from "next/image";
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

const name = 'Andrew Upshaw';
export const siteTitle = 'Andrews Blog';
export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile3.png"
                            className={utilStyles.borderCircle}
                            height={325}
                            width={325}
                            alt="aye ewe"
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile3.png"
                                className={utilStyles.borderCircle}
                                height={260}
                                width={260}
                                alt="aye ewe"
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <div>
                <Link href={`/`}>HOME</Link>
                <Link href={`/about`}>ABOUT</Link>
                <Link href={`/bio`}>BIO</Link>
            </div>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
