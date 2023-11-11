import { createContext, useEffect, useState } from "react";

export const PageContext = createContext();

export function PageProvider({ children }) {
    const [page, setPage] = useState(parseInt(localStorage.getItem("page")) || 1);

    useEffect(() => localStorage.setItem("page", page), [page]);

    return <PageContext.Provider value={{ page, setPage }}>
        {children}
    </PageContext.Provider>
}