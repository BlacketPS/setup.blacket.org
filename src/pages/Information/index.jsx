import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Container from "@components/Container";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function Information() {
    const { config, setConfig } = useContext(ConfigContext);

    const values = [config.information.name, config.information.welcome, config.information.description];
    if (config.information.pronunciation.enabled) values.push(config.information.pronunciation.text);

    config.canGoForward = values.every(value => value !== "");
    setConfig(config);

    return (
        <>
            <Container header="Information">
                <Input placeholder="Server Name (*)" type="text" maxLength={32} help={<>
                    This is the name of your Blacket server instance.
                    <br />
                    An example of this would be "Blulet"
                </>} onInput={e => {
                    config.information.name = e.target.value;
                    setConfig({ ...config });
                }} value={config.information.name} />
                <Input placeholder="Welcome Message (*)" type="text" maxLength={32} help={<>
                    These are the 3 lines on the homepage of your Blacket server instance.
                    <br />
                    An example of this would be "Blooket but Blue"
                    <br />
                    <br />
                    Each space counts as a new line so make sure to keep it short and sweet.
                </>} onChange={e => {
                    config.information.welcome = e.target.value;
                    setConfig({ ...config });
                }} value={config.information.welcome} />
                <Input placeholder="Welcome Description (*)" type="text" maxLength={96} help={<>
                    This is the text below the welcome message on the homepage of your Blacket server instance.
                    <br />
                    An example of this would be "A Blooket private server, created by monkxy written in React"
                    <br />
                    <br />
                    Each comma counts as a new line so make sure to keep it short and sweet.
                </>} onChange={e => {
                    config.information.description = e.target.value;
                    setConfig({ ...config });
                }} value={config.information.description} />

                <Checkbox checked={config.information.pronunciation.enabled} onClick={() => {
                    config.information.pronunciation.enabled = !config.information.pronunciation.enabled;
                    setConfig({ ...config });
                }}>
                    Pronunciation Button
                </Checkbox>

                {config.information.pronunciation.enabled && <Input placeholder="Pronunciation Button Text (*)" type="text" maxLength={32} help={<>
                    This is the text next to the pronunciation button on the homepage of your Blacket server instance.
                    <br />
                    An example of this would be "Blue-lit"
                </>} onChange={e => {
                    config.information.pronunciation.text = e.target.value;
                    setConfig({ ...config });
                }} value={config.information.pronunciation.text} />}
            </Container>
        </>
    )
}