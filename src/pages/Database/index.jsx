import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Container from "@components/Container";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function Information() {
    const { config, setConfig } = useContext(ConfigContext);

    return (
        <>
            <Container header={{
                big: "Database",
                small: <>
                    Blacket uses a database to store information such as users, blooks, packs, and more. You must enter your database credentials below. All fields marked with a (*) are required.
                </>
            }}>
            </Container>
        </>
    )
}