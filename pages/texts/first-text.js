import Head from "next/head";
import Link from "next/link";
import React from "react";

const FirstText = () => {
    return (
        <>
            <Head>
                <title>first text</title>
            </Head>
            
            <h1>first text</h1>
            <h2>
                <Link href="/"> Back to home</Link>
            </h2>
        </>
    );
};

export default FirstText;
