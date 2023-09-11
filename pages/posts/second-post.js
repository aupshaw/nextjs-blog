import Link from 'next/link';
import Layout from "../../components/layout";

export default function SecondPost() {
    return (
        <Layout>
            <h1>Second Post</h1>
            <h2>
                <Link href="/">Back to home</Link><br/>
                <a href="https://duckduckgo.com" target={"_blank"}>ddg it!</a>
            </h2>
        </Layout>
    );
}
