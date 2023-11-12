import styles from "@styles";

export default function Body({ children }) {
    return <div className={styles.all.regularBody}>
        {children}
    </div>
}