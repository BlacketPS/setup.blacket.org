import { createContext, useEffect, useState } from "react";

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    /*const [config, setConfig] = useState(JSON.parse(localStorage.getItem("config")) || {
        canGoForward: true
    });*/
    const [config, setConfig] = useState({
        canGoForward: true,
        information: {
            name: "",
            welcome: "",
            description: "",
            pronunciation: {
                enabled: false,
                text: ""
            }
        },
        theme: {
            backgroundColor: null,
            backgroundBlooks: true,
            primaryColor: null,
            secondaryColor: null,
            accentColor: null
        },
        database: {
            type: "",
            host: "",
            port: "",
            name: "",
            username: "",
            password: {
                enabled: false,
                value: ""
            }
        },
        paypal: {
            enabled: false,
            mode: "sandbox",
            clientID: "",
            clientSecret: ""
        }
    });

    useEffect(() => localStorage.setItem("config", JSON.stringify(config)), [config]);

    return <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
    </ConfigContext.Provider>
}