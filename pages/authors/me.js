import Head from "next/head";
import Link from "next/link";
import React from "react";

const Me = () => {
    return (
        <>
            <Head>
                <title>me</title>
            </Head>
            <h1>me authors</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
};

export default Me;
