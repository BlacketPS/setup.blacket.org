import { useContext } from "react";
import { PageContext } from "@stores/page";
import { ConfigContext } from "@stores/config";
import { pages } from "@stores/pages";
import styles from "@styles";

export default function Footer() {
    const { page, setPage } = useContext(PageContext);
    const { config, setConfig } = useContext(ConfigContext);

    const forwards = () => setPage(page + 1);
    const backwards = () => {
        setPage(page - 1);
        config.canGoForward = true;
        setConfig(config);
    }

    return (
        <footer className={styles.footer.footer}>
            <div aria-disabled={page < 2} className={styles.footer.footerLeft} onClick={() => {
                if (page > 1) backwards();
            }}>Back</div>

            <div className={styles.footer.footerCenter}>{page} / {pages}</div>

            <div aria-disabled={page === pages || !config.canGoForward} className={styles.footer.footerRight} onClick={() => {
                if (page < pages && config.canGoForward) forwards();
            }}>Next</div>
        </footer>
    )
}