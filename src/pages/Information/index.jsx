import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Container from "@components/Container";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function Information() {
    const { config, setConfig } = useContext(ConfigContext);

    const values = [config.information_name, config.information_welcome, config.information_description];
    if (config.information_pronunciation_enabled) values.push(config.information_pronunciation);

    config.canGoForward = values.every(value => value !== "");
    setConfig(config);

    return (
        <>
            <Container header={{
                big: "Information",
                small: <>
                    This is the information that will be displayed on your Blacket server.
                    <br />
                    All fields marked with a (*) are required.
                </>
            }}>
                <Input icon="fas fa-signature" placeholder="Server Name (*)" type="text" maxLength={32} help={<>
                    This is the name of your Blacket server.
                    <br />
                    An example of this would be "Blulet"
                </>} onInput={e => {
                    config.information_name = e.target.value;
                    setConfig({ ...config });
                }} value={config.information_name} />
                <Input icon="fas fa-door-open" placeholder="Welcome Message (*)" type="text" maxLength={32} help={<>
                    These are the 3 lines on the homepage of your Blacket server.
                    <br />
                    An example of this would be "Blooket but Blue"
                    <br />
                    <br />
                    Each space counts as a new line so make sure to keep it short and sweet.
                </>} onChange={e => {
                    config.information_welcome = e.target.value;
                    setConfig({ ...config });
                }} value={config.information_welcome} />
                <Input icon="fas fa-text" placeholder="Welcome Description (*)" type="text" maxLength={128} help={<>
                    This is the text below the welcome message on the homepage of your Blacket server.
                    <br />
                    An example of this would be "A Blooket private server, created by monkxy written in React"
                    <br />
                    <br />
                    Each comma counts as a new line so make sure to keep it short and sweet.
                </>} onChange={e => {
                    config.information_description = e.target.value;
                    setConfig({ ...config });
                }} value={config.information_description} />

                <Checkbox checked={config.information_pronunciation_enabled} onClick={() => {
                    config.information_pronunciation_enabled = !config.information_pronunciation_enabled;
                    setConfig({ ...config });
                }}>
                    Pronunciation Button
                </Checkbox>

                {config.information_pronunciation_enabled && <Input icon="fas fa-volume" placeholder="Pronunciation Button Text (*)" type="text" maxLength={32} help={<>
                    This is the text next to the pronunciation button on the homepage of your Blacket server.
                    <br />
                    An example of this would be "Blue-lit"
                </>} onChange={e => {
                    config.information_pronunciation = e.target.value;
                    setConfig({ ...config });
                }} value={config.information_pronunciation} />}
            </Container>
        </>
    )
}