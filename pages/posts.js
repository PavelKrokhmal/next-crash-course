import {useEffect, useState} from 'react'
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
import Link from 'next/link'

export default function Posts({posts: serverPosts}) {

    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const data = await response.json()
            setPosts(data)
        }
        if (!serverPosts) {
            load()
        }
    }, [])

    if(!posts) {
        return (
            <MainLayout title={"Posts page"}>
                <h1>Loading...</h1>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={"Posts page"}>
            <Head>
                <title>Posts page</title>
            </Head>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={'/post/[id]'} as={'/post/'+post.id}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}) => {
    if(!req) {
        return {
            posts: null
        }
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {
        posts
    }
}