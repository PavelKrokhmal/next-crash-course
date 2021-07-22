import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({children, title = "Next app"}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"keywords"} content={"next react"}/>
                <meta name={"description"} content={"This is next.js course"}/>
                <meta charSet={"utf-8"}/>
            </Head>
            <nav>
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
                <Link href={"/posts"}>
                    <a>Posts</a>
                </Link>
                <Link href={"/about"}>
                    <a>About</a>
                </Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {
                    `
                        nav {
                          position: fixed;
                          height: 60px;
                          left: 0;
                          right: 0;
                          top: 0;
                          background: cadetblue;
                          display: flex;
                          justify-content: space-around;
                          align-items: center;
                        }
                        
                        nav a {
                          color: white;
                          font-size: 1.5rem;
                          text-decoration: none;
                        }
                        main {
                          margin-top: 60px;
                        }
                    `
                }
            </style>
        </>
    )
}