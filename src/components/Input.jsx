import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import styles from "@styles";

export default function Input({ icon, help, ...props }) {
    useEffect(() => {
        if (icon && typeof icon !== "string") throw new Error("input icon must be typeof string");
    }, []);

    const tooltipId = `${Date.now()}${Math.random().toString().replace(".", "")}`;

    return (
        <>
            <div className={styles.all.inputContainer}>
                {icon && <i className={`${styles.all.icon} ${icon}`} />}

                <input className={styles.all.input} {...props} />

                {help && <>
                    <Tooltip className={styles.all.tooltip} id={tooltipId} multiline={true} place="right">{help}</Tooltip>
                    <i className={`${styles.all.iconRight} fas fa-question-circle`} data-tooltip-id={tooltipId} />
                </>}
            </div>
        </>
    )
}