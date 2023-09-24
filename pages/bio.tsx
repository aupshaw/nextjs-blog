import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
export default function Bio() {
    return (
        <Layout>
            <Head><title>Bio</title></Head>
            <h1>Bio</h1>
            <p>
                <Image
                    src={'/images/carson-commercial-break-card.jpg'} alt={'more to come'}
                    width={700}
                    height={530}
                />
            </p>
            <hr />
            <h3>TL;DR</h3>
            I make a living in the realm of software development. For fun I like traveling and seeing new things. I want to experience as much as I can in the
            time I have.
        </Layout>
    );
}
