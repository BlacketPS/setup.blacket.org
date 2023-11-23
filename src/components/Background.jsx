import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import styles from "@styles";

export default function Background() {
    const { config } = useContext(ConfigContext);

    document.documentElement.style.setProperty("--background-color", config.theme.backgroundColor || "#2f2f2f");
    document.documentElement.style.setProperty("--primary-color", config.theme.primaryColor || "#1f1f1f");
    document.documentElement.style.setProperty("--secondary-color", config.theme.secondaryColor || "#3f3f3f");
    document.documentElement.style.setProperty("--accent-color", config.theme.accentColor || "#ffffff");

    return (
        <div className={styles.all.background}>
            {config.theme.backgroundBlooks && <div className={styles.all.blooksBackground} />}
        </div>
    )
}