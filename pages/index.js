import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
              <Image src="/img/photo_2023-09-26_16-46-58 (1).jpg" alt="foto" height={200} width={200}/>
                <h1 className={styles.title}>
                    <Link href="/posts/first-post" >First post link</Link>
                </h1>
                <p>
                  <Link href="/posts/second-post"> second post link</Link><br/>
                  <Link href="/texts/first-text">first text link</Link><br/>
                  <Link href="/authors/me">Authoros link</Link><br/>
                </p>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by 
                </a>
            </footer>

            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                footer img {
                    margin-left: 0.5rem;
                }
                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }
                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
                        Courier New, monospace;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                        Droid Sans, Helvetica Neue, sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
