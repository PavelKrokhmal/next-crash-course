import Link from "next/link";
import styles from '../styles/error.module.scss'
import {MainLayout} from "../components/MainLayout";

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={styles.error}>Error 404</h1>
            <p>
                <Link href={"/"}>
                    <a>
                        Please go to safety
                    </a>
                </Link>
            </p>
        </MainLayout>
    )
}