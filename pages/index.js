import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <button>HOME</button>
                <Link href={`/about`}>ABOUT</Link>
                <Link href={`/bio`}>BIO</Link>
                <p>Welcome to my Next.js learning site</p>
                <p>
                    This site is an exercise to learn Next.js following along with
                    <a href="https://nextjs.org/learn"> the Next.js tutorial</a>.
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
