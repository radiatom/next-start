import Link from "next/link";
import React from "react";

const SecondPost = () => {
    return (
        <>
            <h1>second post</h1>
            <h2>
            <Link href="/texts/first-text">first text link</Link>
            </h2>
        </>
    );
};

export default SecondPost;
