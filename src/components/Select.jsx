import { useEffect } from "react";
import styles from "@styles";

export default function Select({ options, ...props }) {
    useEffect(() => {
        if (options && typeof options !== "object") throw new Error("select options must be typeof object");
    }, []);

    return (
        <select className={styles.all.select} {...props}>
            {options.map((option, i) => <option key={i} value={option.value}>{option.text}</option>)}
        </select>
    )
}