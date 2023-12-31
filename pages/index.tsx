import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from '../lib/posts';
import {GetStaticProps} from "next";
export default function Home({ allPostsData }: { allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Welcome to my Next.js learning site</p>
                <p>
                    This site started as an exercise to learn Next.js following along with
                    <a href="https://nextjs.org/learn"> the Next.js tutorial</a>. Now I am
                    working towards personalizing. Check out the about page if you're interested as to why.
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

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
