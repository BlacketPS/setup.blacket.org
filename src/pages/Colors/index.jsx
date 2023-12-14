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
                </>} value={config.theme_background_color || ""} />

                <Checkbox checked={config.theme_background_blooks} onClick={() => {
                    config.theme_background_blooks = !config.theme_background_blooks;
                    setConfig({ ...config });
                }}>
                    Background Blooks
                </Checkbox>

                <Input onMouseDown={() => openModal("primary")} icon="fas fa-palette" placeholder="Primary Color" help={<>
                    The primary color of elements (mainly used for containers)
                </>} value={config.theme_primary_color || ""} />

                <Input onMouseDown={() => openModal("secondary")} icon="fas fa-palette" placeholder="Secondary Color" help={<>
                    The secondary color of elements (mainly used for hover effects)
                </>} value={config.theme_secondary_color || ""} />

                <Input onMouseDown={() => openModal("accent")} icon="fas fa-palette" placeholder="Accent Color" help={<>
                    The accent color on all pages (used for text)
                </>} value={config.theme_accent_color || ""} />

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
                    if (modal === "background") config.theme_background_color = null;
                    else if (modal === "primary") config.theme_primary_color = null;
                    else if (modal === "secondary") config.theme_secondary_color = null;
                    else if (modal === "accent") config.theme_accent_color = null;
                    setConfig({ ...config });
                }
            }]}>
                <HexColorPicker color={
                    modal === "background" ? config.theme_background_color || "#2f2f2f" :
                        modal === "primary" ? config.theme_primary_color || "#1f1f1f" :
                            modal === "secondary" ? config.theme_secondary_color || "#3f3f3f" :
                                modal === "accent" ? config.theme_accent_color || "#ffffff" : null
                } onChange={color => {
                    if (modal === "background") config.theme_background_color = color;
                    else if (modal === "primary") config.theme_primary_color = color;
                    else if (modal === "secondary") config.theme_secondary_color = color;
                    else if (modal === "accent") config.theme_accent_color = color;
                    setConfig({ ...config });
                }} />
            </Modal>}
        </>
    )
}