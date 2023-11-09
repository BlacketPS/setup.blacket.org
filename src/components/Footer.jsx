import { useState } from "react";
import styles from "@styles";

const pages = 4;

export default function Footer() {
    const [page, setPage] = useState(1);

    const pageHandler = (direction) => {
        if (typeof direction !== "string") throw new Error("direction must be typeof string");

        switch (direction) {
            case "backwards":
                if (page - 1 < 1) throw new Error("page cannot be less than 1");
                else setPage(page - 1);
                break;
            case "forwards":
                if (page + 1 > pages) throw new Error(`page cannot be greater than ${pages}`);
                else setPage(page + 1);
                break;
            default:
                throw new Error("direction must be either \"backwards\" or \"forwards\"");
        }
    }

    return <div className={styles.all.footer}>
        <div aria-disabled={page === 1} className={styles.all.footerLeft} onClick={pageHandler.bind(null, "backwards")}>Back</div>

        <div className={styles.all.footerCenter}>{page} / {pages}</div>

        <div aria-disabled={page === pages} className={styles.all.footerRight} onClick={pageHandler.bind(null, "forwards")}>Next</div>
    </div>
}