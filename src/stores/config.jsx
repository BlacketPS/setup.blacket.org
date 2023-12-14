import { createContext, useEffect, useState } from "react";

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    const [config, setConfig] = useState(JSON.parse(localStorage.getItem("config")) || {
        canGoForward: true,
        
        information_name: "",
        information_welcome: "",
        information_description: "",
        information_pronunciation_enabled: false,
        information_pronunciation: "",

        theme_background_color: null,
        theme_background_blooks: true,
        theme_primary_color: null,
        theme_secondary_color: null,
        theme_accent_color: null,

        database_type: "",
        database_host: "",
        database_port: "",
        database_name: "",
        database_username: "",
        database_password_enabled: false,
        database_password: "",

        paypal_enabled: false,
        paypal_mode: "sandbox",
        paypal_client_id: "",
        paypal_client_secret: "",

        miscellaneous_server_port: 3000,
        miscellaneous_discord_invite: "",
        miscellaneous_verbose_logging: false,
        miscellaneous_block_proxies: false,
        miscellaneous_allow_multiple_accounts: false,
        miscellaneous_backup_enabled: false,
        miscellaneous_backup_interval: 288000000,
        miscellaneous_level_difficulty: 0.75
    });

    useEffect(() => localStorage.setItem("config", JSON.stringify(config)), [config]);

    return <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
    </ConfigContext.Provider>
}