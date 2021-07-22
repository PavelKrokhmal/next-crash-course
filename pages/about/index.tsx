import Router from 'next/router'
import {MainLayout} from "../../components/MainLayout";

interface AboutProps {
    title: string
}

export default function Index({title}: AboutProps) {

    return (
        <MainLayout title={"About page"}>
            <h1>About page</h1>
            <h2>{title}</h2>
            <button onClick={()=>{Router.push('/')}}>Go to home</button>
        </MainLayout>

    )
}

Index.getInitialProps =  async () => {
    const response = await fetch('http://localhost:4200/about')
    const data = await response.json()

    return {
        title: data.title
    }
}