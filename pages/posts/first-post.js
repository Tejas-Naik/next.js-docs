import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
function firstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
        </Layout>
    )
}

export default firstPost;