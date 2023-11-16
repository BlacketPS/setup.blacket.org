import { useEffect } from "react";
import styles from "@styles";

export default function Container({ header, children }) {
    useEffect(() => {
        if (header && typeof header !== "object") throw new Error("container header must be typeof object");
    }, []);

    return (
        <>
            <div className={styles.all.container}>
                {header && <>
                    {header.big && <div className={styles.all.containerHeader}>{header.big}</div>}
                    {header.small && <div className={styles.all.containerHeaderSmaller}>{header.small}</div>}
                </>}
                {children}
            </div>
        </>
    )
}