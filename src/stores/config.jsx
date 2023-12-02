import { createContext, useEffect, useState } from "react";

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    const [config, setConfig] = useState(JSON.parse(localStorage.getItem("config")) || {
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
        },
        miscellaneous: {
            server_port: 3000,
            discord_invite: "",
            verbose_logging: false,
            block_proxies: false,
            allow_multiple_accounts: false,
            backup_enabled: false,
            backup_interval: 288000000,
            level_difficulty: 0.75
        }
    });

    useEffect(() => localStorage.setItem("config", JSON.stringify(config)), [config]);

    return <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
    </ConfigContext.Provider>
}