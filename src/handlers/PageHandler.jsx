import { useContext } from "react";
import { PageContext } from "@stores/page";
import pages from "@pages"

export default function PageHandler() {
    const { page } = useContext(PageContext);

    if (page === 1) return <pages.Welcome />
    else if (page === 2) return <pages.Information />
    else if (page === 3) return <pages.Theme />
    else if (page === 4) return <pages.Database />
    else if (page === 5) return <pages.PayPal />
    else if (page === 6) return <pages.Miscellaneous />
    else if (page === 7) return <pages.Finalize />
    else throw new Error(`page ${page} does not exist`);
}