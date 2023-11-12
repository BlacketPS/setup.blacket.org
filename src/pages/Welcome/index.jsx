import styles from "@styles";

export default function Welcome() {
    return (
        <>
            <div className={styles.all.bigText}>Welcome to the Blacket Setup!</div>
            <div className={styles.all.smallText}>
                This setup will guide you through the process of configuring your Blacket server.
                <br />
                Navigate through the setup by using the buttons at the bottom of the page.
            </div>
        </>
    )
}