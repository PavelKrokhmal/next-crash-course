import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Posts() {
    return (
        <MainLayout title={"Posts page"}>
            <Head>
                <title>Posts page</title>
            </Head>
            <h1>Posts</h1>
        </MainLayout>
    )
}