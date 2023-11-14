import { useEffect } from "react";
import styles from "@styles";

export default function Checkbox({ checked, children, ...props }) {
    useEffect(() => {
        if (!checked) checked = false;
        if (typeof checked !== "boolean") throw new Error("checkbox checked must be typeof boolean");
    }, []);

    return (
        <>
            <div className={`${styles.all.checkboxContainer}`}>
                <div className={styles.all.checkbox} {...props}>
                    <i className={`${styles.all.checkboxCheckmark} ${checked ? styles.all.checkboxChecked : styles.all.checkboxUnchecked} fas fa-check`} />
                </div>

                <div className={`${styles.all.checkboxText}`}>{children}</div>
            </div>
        </>
    )
}
