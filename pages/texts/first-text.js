import Link from "next/link";
import React from "react";

const FirstText = () => {
    return (
        <>
            <h1>first text</h1>
            <h2>
                <Link href="/"> Back to home</Link>
            </h2>
        </>
    );
};

export default FirstText;
