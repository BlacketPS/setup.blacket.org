import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import styles from "@styles";

export default function Information() {
    const { config, setConfig } = useContext(ConfigContext);
    config.canGoForward = false;
    setConfig(config);
    
    return (
        <>
            <div className={styles.all.bigText}>Information</div>
            <input className={styles.all.input} placeholder="Name" />
        </>
    )
}