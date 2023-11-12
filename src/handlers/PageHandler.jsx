import { useContext } from "react";
import { PageContext } from "@stores/page";
import pages from "@pages"

export default function PageHandler() {
    const { page } = useContext(PageContext);

    if (page === 1) return <pages.Welcome />
    else if (page === 2) return <pages.Information />
    else if (page === 3) return <pages.Welcome />
    else if (page === 4) return <pages.Welcome />
    else if (page === 5) return <pages.Welcome />
    else if (page === 6) return <pages.Welcome />
    else throw new Error(`page ${page} does not exist`);
}