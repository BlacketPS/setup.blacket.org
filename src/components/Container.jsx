import { useEffect } from "react";
import styles from "@styles";

export default function Container({ header, children }) {
    useEffect(() => {
        if (!header) throw new Error("container header is required");
        if (typeof header !== "string") throw new Error("container header must be typeof string");
    }, []);

    return (
        <>
            <div className={styles.all.container}>
                <div className={styles.all.containerHeader}>{header}</div>
                {children}
            </div>
        </>
    )
}