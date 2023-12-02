import { useContext, useState } from "react";
import { ConfigContext } from "@stores/config";
import { HexColorPicker } from "react-colorful";
import Container from "@components/Container";
import Input from "@components/Input";
import Modal from "@components/Modal";
import Checkbox from "@components/Checkbox";

export default function Theme() {
    const { config, setConfig } = useContext(ConfigContext);
    const [modal, setModal] = useState(null);

    const openModal = (color) => {
        setModal(color);
        document.activeElement.blur();
    }

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

                <Input onMouseDown={() => openModal("background")} icon="fas fa-palette" placeholder="Background Color" help={<>
                    The background color of elements.
                </>} value={config.theme.backgroundColor || ""} />

                <Checkbox checked={config.theme.backgroundBlooks} onClick={() => {
                    config.theme.backgroundBlooks = !config.theme.backgroundBlooks;
                    setConfig({ ...config });
                }}>
                    Background Blooks
                </Checkbox>

                <Input onMouseDown={() => openModal("primary")} icon="fas fa-palette" placeholder="Primary Color" help={<>
                    The primary color of elements (mainly used for containers)
                </>} value={config.theme.primaryColor || ""} />

                <Input onMouseDown={() => openModal("secondary")} icon="fas fa-palette" placeholder="Secondary Color" help={<>
                    The secondary color of elements (mainly used for hover effects)
                </>} value={config.theme.secondaryColor || ""} />

                <Input onMouseDown={() => openModal("accent")} icon="fas fa-palette" placeholder="Accent Color" help={<>
                    The accent color on all pages (used for text)
                </>} value={config.theme.accentColor || ""} />

            </Container>

            {modal && <Modal header={{
                big: "Color Picker",
                small: <>
                    This is the color picker for the {modal} color.
                </>
            }} buttons={[{
                text: "Save",
                onClick: () => setModal(null)
            }, {
                text: "Reset",
                onClick: () => {
                    if (modal === "background") config.theme.backgroundColor = null;
                    else if (modal === "primary") config.theme.primaryColor = null;
                    else if (modal === "secondary") config.theme.secondaryColor = null;
                    else if (modal === "accent") config.theme.accentColor = null;
                    setConfig({ ...config });
                }
            }]}>
                <HexColorPicker color={
                    modal === "background" ? config.theme.backgroundColor || "#2f2f2f" :
                        modal === "primary" ? config.theme.primaryColor || "#1f1f1f" :
                            modal === "secondary" ? config.theme.secondaryColor || "#3f3f3f" :
                                modal === "accent" ? config.theme.accentColor || "#ffffff" : null
                } onChange={color => {
                    if (modal === "background") config.theme.backgroundColor = color;
                    else if (modal === "primary") config.theme.primaryColor = color;
                    else if (modal === "secondary") config.theme.secondaryColor = color;
                    else if (modal === "accent") config.theme.accentColor = color;
                    setConfig({ ...config });
                }} />
            </Modal>}
        </>
    )
}