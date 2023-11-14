import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import styles from "@styles";

export default function Input({ icon, placeholder, type, maxLength, help, ...props }) {
    useEffect(() => {
        if (!type) throw new Error("input type is required");
        if (!maxLength) maxLength = Infinity;
        if (icon && typeof icon !== "string") throw new Error("input icon must be typeof string");
        if (typeof placeholder !== "string") throw new Error("input placeholder must be typeof string");
        if (typeof type !== "string") throw new Error("input type must be typeof string");
        if (typeof maxLength !== "number") throw new Error("input maxLength must be typeof number");
    }, []);

    const tooltipId = `${Date.now()}${Math.random().toString().replace(".", "")}`;

    return (
        <>
            <div className={styles.all.inputContainer}>
                {icon && <i className={`${styles.all.icon} ${icon}`} />}

                <input className={styles.all.input} placeholder={placeholder} type={type} maxLength={maxLength} {...props} />

                {help && <>
                    <Tooltip className={styles.all.tooltip} id={tooltipId} multiline={true} place="right">{help}</Tooltip>
                    <i className={`${styles.all.iconRight} fas fa-question-circle`} data-tooltip-id={tooltipId} />
                </>}
            </div>
        </>
    )
}