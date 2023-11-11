import { createContext, useEffect, useState } from "react";

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    const [config, setConfig] = useState(JSON.parse(localStorage.getItem("config")) || {});

    useEffect(() => localStorage.setItem("config", JSON.stringify(config)), [config]);

    return <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
    </ConfigContext.Provider>
}