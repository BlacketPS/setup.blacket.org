import styles from "@styles";

export default function Button({ children }) {
    return (
        <>
            <div className={styles.all.button}>
                <div className={styles.all.buttonShadow} />
                <div className={styles.all.buttonEdge} />
                <div className={styles.all.buttonInside}>{children}</div>
            </div>
        </>
    )
}