import { useEffect } from "react";
import styles from "@styles";

export default function Error({ error }) {
    document.title = error.error;

    useEffect(() => alert(`${error.error}${error.componentStack}`), []);

    return <h1 className={styles.error.error}>Something went wrong</h1>
}