import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function Post() {
    const {query: {id}} = useRouter()

    return (
        <MainLayout>
            <h1>Post {id}</h1>
        </MainLayout>
    )
}
