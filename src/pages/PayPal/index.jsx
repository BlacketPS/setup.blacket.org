import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Container from "@components/Container";
import Select from "@components/Select";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function PayPal() {
    const { config, setConfig } = useContext(ConfigContext);

    const values = [];
    if (config.paypal.enabled) values.push(config.paypal.clientID, config.paypal.clientSecret);

    config.canGoForward = values.every(value => value !== "");
    setConfig(config);

    return (
        <>
            <Container header={{
                big: "PayPal",
                small: <>
                    Blacket uses PayPal to process payments. If you would like to monetize your Blacket server, enter your PayPal developer credentials below. All fields marked with a (*) are required.
                </>
            }}>

                <Checkbox checked={config.paypal.enabled} onClick={() => {
                    config.paypal.enabled = !config.paypal.enabled;
                    setConfig({ ...config });
                }}>
                    Monetize {config.information.name}
                </Checkbox>

                {config.paypal.enabled && <>
                    <Select options={[{
                        value: "sandbox",
                        text: "Mode: Sandbox"
                    }, {
                        value: "live",
                        text: "Mode: Live"
                    }]} value={config.paypal.mode} onChange={(e) => {
                        config.paypal.mode = e.target.value;
                        setConfig({ ...config });
                    }} />

                    <Input icon="fas fa-key" placeholder="Client ID (*)" help={<>
                        This is the client ID of your PayPal application.
                    </>} onChange={(e) => {
                        config.paypal.clientID = e.target.value;
                        setConfig({ ...config });
                    }} value={config.paypal.clientID || ""} />

                    <Input icon="fas fa-key" placeholder="Client Secret (*)" help={<>
                        This is the client secret of your PayPal application.
                    </>} onChange={(e) => {
                        config.paypal.clientSecret = e.target.value;
                        setConfig({ ...config });
                    }} type="password" value={config.paypal.clientSecret || ""} />
                </>}

            </Container>
        </>
    )
}