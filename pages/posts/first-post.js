import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

const FirstPost = () => {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Layout/>
        </>
    );
};

export default FirstPost;
