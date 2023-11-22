import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import styles from "@styles";

export default function Background() {
    const { config } = useContext(ConfigContext);

    document.documentElement.style.setProperty("--background-color", config.theme.backgroundColor || "#2f2f2f");

    return (
        <div className={styles.all.background}>
            {config.theme.backgroundBlooks && <div className={styles.all.blooksBackground} />}
        </div>
    )
}