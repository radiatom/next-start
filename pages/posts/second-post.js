import Head from "next/head";
import Link from "next/link";
import React from "react";

const SecondPost = () => {
    return (
        <>
        <Head>
                <title>second Post</title>
            </Head>
            <h1>second post</h1>
            <h2>
            <Link href="/texts/first-text">first text link</Link>
            </h2>
        </>
    );
};

export default SecondPost;
