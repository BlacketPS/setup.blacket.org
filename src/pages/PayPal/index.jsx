import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Container from "@components/Container";
import Select from "@components/Select";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function PayPal() {
    const { config, setConfig } = useContext(ConfigContext);

    const values = [];
    if (config.paypal_enabled) values.push(config.paypal_client_id, config.paypal_client_secret);

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

                <Checkbox checked={config.paypal_enabled} onClick={() => {
                    config.paypal_enabled = !config.paypal_enabled;
                    setConfig({ ...config });
                }}>
                    Monetize {config.information_name}
                </Checkbox>

                {config.paypal_enabled && <>
                    <Select options={[{
                        value: "sandbox",
                        text: "Mode: Sandbox"
                    }, {
                        value: "live",
                        text: "Mode: Live"
                    }]} value={config.paypal_mode} onChange={(e) => {
                        config.paypal_mode = e.target.value;
                        setConfig({ ...config });
                    }} />

                    <Input icon="fas fa-key" placeholder="Client ID (*)" help={<>
                        This is the client ID of your PayPal application.
                    </>} onChange={(e) => {
                        config.paypal_client_id = e.target.value;
                        setConfig({ ...config });
                    }} value={config.paypal_client_id || ""} />

                    <Input icon="fas fa-key" placeholder="Client Secret (*)" help={<>
                        This is the client secret of your PayPal application.
                    </>} onChange={(e) => {
                        config.paypal_client_secret = e.target.value;
                        setConfig({ ...config });
                    }} type="password" value={config.paypal_client_secret || ""} />
                </>}

            </Container>
        </>
    )
}