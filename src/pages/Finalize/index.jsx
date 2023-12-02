import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Button from "@components/Button";
import styles from "@styles";

export default function Finalize() {
    const { config } = useContext(ConfigContext);

    const convertConfigToFile = () => {
        const configStore = { ...config };
        delete configStore.canGoForward;
        const blob = new Blob([JSON.stringify(configStore, null, 4)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "config.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <>
            <div className={styles.all.bigText}>Are these settings correct?</div>
            <div className={styles.all.smallText}>
                You can always go back and change these settings at any time.
                <details style={{ marginTop: "20px" }}>
                    <summary>Information</summary>
                    <ul style={{ textAlign: "left" }}>
                        <li><b>Server Name:</b> {config.information.name}</li>
                        <li><b>Welcome Message:</b> {config.information.welcome}</li>
                        <li><b>Welcome Description:</b> {config.information.description}</li>
                        <li><b>Pronunciation Enabled:</b> {config.information.pronunciation.enabled ? "Yes" : "No"}</li>
                        {
                            config.information.pronunciation.enabled && <li><b>Pronunciation Text:</b> {config.information.pronunciation.text}</li>
                        }
                    </ul>
                </details>
                <details>
                    <summary>Theme</summary>
                    <ul style={{ textAlign: "left" }}>
                        <li><b>Background Color:</b> {config.theme.backgroundColor || "Default"}</li>
                        <li><b>Background Blooks Enabled:</b> {config.theme.backgroundBlooks ? "Yes" : "No"}</li>
                        <li><b>Primary Color:</b> {config.theme.primaryColor || "Default"}</li>
                        <li><b>Secondary Color:</b> {config.theme.secondaryColor || "Default"}</li>
                        <li><b>Accent Color:</b> {config.theme.accentColor || "Default"}</li>
                    </ul>
                </details>
                <details>
                    <summary>Database</summary>
                    <ul style={{ textAlign: "left" }}>
                        <li><b>Database Type:</b> {config.database.type}</li>
                        {!["", "sqlite"].includes(config.database.type) && <>
                            <li><b>Database Host:</b> {config.database.host}</li>
                            <li><b>Database Port:</b> {config.database.port}</li>
                            <li><b>Database Name:</b> {config.database.name}</li>
                            <li><b>Database Username:</b> {config.database.username}</li>
                            <li><b>Database Password Enabled:</b> {config.database.password.enabled ? "Yes" : "No"}</li>
                            {
                                config.database.password.enabled && <li><b>Database Password:</b> {config.database.password.value.split("").map(() => "*").join("")}</li>
                            }
                        </>}
                    </ul>
                </details>
                <details>
                    <summary>PayPal</summary>
                    <ul style={{ textAlign: "left" }}>
                        <li><b>PayPal Enabled:</b> {config.paypal.enabled ? "Yes" : "No"}</li>
                        {
                            config.paypal.enabled && <>
                                <li><b>PayPal Mode:</b> {config.paypal.mode}</li>
                                <li><b>PayPal Client ID:</b> {config.paypal.clientID}</li>
                                <li><b>PayPal Client Secret:</b> {config.paypal.clientSecret.split("").map(() => "*").join("")}</li>
                            </>
                        }
                    </ul>
                </details>
                <details>
                    <summary>Miscellaneous</summary>
                    <ul style={{ textAlign: "left" }}>
                        <li><b>Server Port:</b> {config.miscellaneous.server_port}</li>
                        {
                            config.miscellaneous.discord_invite !== "" && <li><b>Discord Invite:</b> {config.miscellaneous.discord_invite}</li>
                        }
                        <li><b>Verbose Logging Enabled:</b> {config.miscellaneous.verbose_logging ? "Yes" : "No"}</li>
                        <li><b>Block Proxies Enabled:</b> {config.miscellaneous.block_proxies ? "Yes" : "No"}</li>
                        <li><b>Allow Multiple Accounts Enabled:</b> {config.miscellaneous.allow_multiple_accounts ? "Yes" : "No"}</li>
                        <li><b>Backup Enabled:</b> {config.miscellaneous.backup_enabled ? "Yes" : "No"}</li>
                        {
                            config.miscellaneous.backup_enabled && <li><b>Backup Interval:</b> {config.miscellaneous.backup_interval}</li>
                        }
                        <li><b>Level Difficulty:</b> {config.miscellaneous.level_difficulty}</li>
                    </ul>
                </details>

                <div style={{ marginTop: "20px", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                    <Button onClick={convertConfigToFile}>
                        Download Configuration
                    </Button>
                </div>
            </div>
        </>
    )
}