import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import styles from "@styles";

export default function Background() {
    const { config } = useContext(ConfigContext);

    document.documentElement.style.setProperty("--background-color", config.theme_background_color || "#2f2f2f");
    document.documentElement.style.setProperty("--primary-color", config.theme_primary_color || "#1f1f1f");
    document.documentElement.style.setProperty("--secondary-color", config.theme_secondary_color || "#3f3f3f");
    document.documentElement.style.setProperty("--accent-color", config.theme_accent_color || "#ffffff");

    return (
        <div className={styles.all.background}>
            {config.theme_background_blooks && <div className={styles.all.blooksBackground} />}
        </div>
    )
}