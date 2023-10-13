import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
    const [change, setChange] = useState(false);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p
                    // className={clsx({
                    //     [utilStyles.backGroundColorRed]: change === true,
                    //     [utilStyles.backGroundColorYellow]: change === false,
                    // })}
                    className={change?utilStyles.backGroundColorRed:utilStyles.backGroundColorYellow}
                >
                    Energetic developer with enthusiasm for creating project logic. I have the experience of a private
                    entrepreneur. Interested in developing and improving own programming skills. Ready to work in the office in
                    Lutsk, or remotely.
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
                <button onClick={()=>setChange(!change)}>Changing color</button>
            </section>
        </Layout>
    );
}
