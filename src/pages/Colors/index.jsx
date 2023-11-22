import { useContext, useState } from "react";
import { ConfigContext } from "@stores/config";
import { HexColorPicker } from "react-colorful";
import Container from "@components/Container";
import Input from "@components/Input";
import Modal from "@components/Modal";
import Checkbox from "@components/Checkbox";

export default function Theme() {
    const { config, setConfig } = useContext(ConfigContext);
    const [modal, setModal] = useState(false);

    return (
        <>
            <Container header={{
                big: "Theme",
                small: <>
                    This is the general color scheme of your Blacket server.
                    <br />
                    All fields marked with a (*) are required.
                </>
            }}>

                {
                    /*<HexColorPicker color={config.theme.backgroundColor || "#2f2f2f"} onChange={color => {
                        config.theme.backgroundColor = color;
                        setConfig({ ...config });
                    }} />*/
                    <Input onClick={() => setModal(true)}
                        icon="fas fa-palette" placeholder="Background Color" type="text" maxLength={32} help={<>
                            The background color on all pages.
                        </>} onChange={e => {
                            config.theme.backgroundColor = e.target.value;
                            setConfig({ ...config });
                        }} value={config.theme.backgroundColor} />


                }

                <Checkbox checked={config.theme.backgroundBlooks} onClick={() => {
                    config.theme.backgroundBlooks = !config.theme.backgroundBlooks;
                    setConfig({ ...config });
                }}>
                    Background Blooks
                </Checkbox>

            </Container>

            {modal &&
                <Modal title="Color Picker" onClose={() => setModal(false)}>
                    <Container header={{
                        big: "Color Picker",
                    }}>
                        <HexColorPicker color={config.theme.backgroundColor || "#2f2f2f"} onChange={color => {
                            config.theme.backgroundColor = color;
                            setConfig({ ...config });
                        }} />
                    </Container>
                </Modal>}
        </>
    )
}