import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Button from "@components/Button";
import styles from "@styles";

export default function Welcome() {
    const { _, setConfig } = useContext(ConfigContext);

    const handleImport = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsText(file);

        reader.onload = (event) => {
            try {
                setConfig({ ...JSON.parse(event.target.result), canGoForward: true });
            } catch (error) {
                alert("The file you selected is not a valid configuration file.");
            }
        }
    }

    return (
        <>
            <div className={styles.all.bigText}>Welcome to the Blacket Setup!</div>
            <div className={styles.all.smallText}>
                This setup will guide you through the process of configuring your Blacket server.
                <br />
                Navigate through the setup by using the buttons at the bottom of the page.
                <br />
                <br />
                Already have a configuration file? Import it below!

                <Button onClick={() => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = "application/json";
                    input.onchange = handleImport;
                    input.click();
                }} style={{ marginTop: "20px", width: "fit-content" }}>Import Configuration</Button>

                <Button onClick={() => {
                    localStorage.removeItem("config");
                    location.reload();
                }} style={{ marginTop: "20px", width: "fit-content" }}>Reset Configuration</Button>
            </div>
        </>
    )
}