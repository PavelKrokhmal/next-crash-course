import {MainLayout} from "../../components/MainLayout";
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import NextNProgress from "nextjs-progressbar";

export default function Post({post: serverPost = null}) {

    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(()=> {
        async function load() {
            const response = await fetch('http://localhost:4200/posts/' + router.query.id)
            const data = await response.json()
            setPost(data)
        }

        if(!serverPost) {
            load()
        }
    }, [])


    if (!post) {
        return (
            <MainLayout>
                <h1>Loading...</h1>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr/>
            <h2>{post.body}</h2>
            <hr/>
            <br/>
            <Link href={'/posts'}>Posts</Link>
        </MainLayout>
    )
}

// Post.getInitialProps = async ({query: {id}, req}) => {
//
//     if (!req) {
//         return {post: null}
//     }
//
//     const response = await fetch('http://localhost:4200/posts/' + id)
//     const post = await response.json()
//
//     return {
//         post
//     }
// }

export async function getServerSideProps({query: {id}, req}) {

    const response = await fetch('http://localhost:4200/posts/' + id)
    const post = await response.json()

    return {
        props: {post}
    }
}