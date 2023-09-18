import Head from "next/head";
import Layout from "../components/layout";
export default function FirstPost() {
    return (
        <Layout>
            <Head><title>About</title></Head>
            <h1>About this Blog</h1>
            As a software engineer consultant, I came across a potential project that was interesting but I didn't possess the core skillset they needed. Technology is an ocean. It is an insurmountable task to be up to speed with every new toolset that comes along. I find myself bouncing aimlessly at times doing shallow dives into some new library or tool. I actually enjoy this and find it valueable to generally keep up with what is going on in the tech world.  Other times I need to do deeper dives to gain real understanding. Planning time for deep dives can be tough and I wanted a tool to help me keep focus on a single mission before moving on to something else. So that is what this blog is all about - a tool to help me keep my self accountable. If you are reading this, maybe it means I stuck with it long enough for this to be relevant and if so, my future self will be thanking current me.
            <br/><br/>

            If you're looking for "this is the best way to do X", that is not my goal with this blog. My goal is to establish a mission and create checkpoints towards success while documenting my learning journey.

            <hr />
            <h3>TL;DR</h3>
            Im making a public todo list for myself.
        </Layout>
    );
}
