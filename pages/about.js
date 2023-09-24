import Head from "next/head";
import Layout from "../components/layout";
export default function FirstPost() {
    return (
        <Layout>
            <Head><title>About</title></Head>
            <h1>About this Blog</h1>
            <p>
                As a software engineer consultant, I came across a potential project that was interesting but I didn't possess the core skillset they needed.
                Technology is an ocean. It is an insurmountable task to be up to speed with every new toolset that comes along. While I enjoy bouncing aimlessly
                through shallow dives into some new library or tool, there are times when a deeper dive is required to gain real understanding. The shallow dives
                are more about curiosity but there is value to generally keep up with what is going on in the tech world. Planning time for deep dives can be
                tough and I wanted a tool to help me keep focus on a single mission before moving on to something else. So that is what this blog is all about
                - a tool to help me keep my self accountable. If you are reading this, maybe it means I stuck with it long enough for this to be relevant and
                if so, my future self will be thanking current me.
            </p>
            <p>
                If you're looking for "this is the best way to do X", that is not my goal with this blog. My goal is to establish a mission and create
                checkpoints towards success while documenting my learning journey.
            </p>
            <hr />
            <h3>TL;DR</h3>
            Im making a public todo list / retrospective for myself.
        </Layout>
    );
}
