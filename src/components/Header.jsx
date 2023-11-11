import styles from "@styles";

export default function Header() {
    return (
        <div className={styles.header.header}>
            <img src="/content/logo.png" draggable={false} alt="Logo" />
            <div>Blacket Setup</div>
        </div>
    )
}