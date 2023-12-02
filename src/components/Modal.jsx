import { useEffect } from "react";
import Container from "@components/Container";
import Button from "@components/Button";
import styles from "@styles";

export default function Modal({ header, children, buttons }) {
    useEffect(() => {
        if (header && typeof header !== "object") throw new Error("modal header must be typeof object");
        if (buttons && typeof buttons !== "object") throw new Error("modal buttons must be typeof object");
    }, []);

    return (
        <>
            <div className={styles.all.modal}>
                <Container header={header}>
                    {children}
                    {buttons && <div className={styles.all.modalButtonContainer}>
                        {buttons.map((button, i) => <Button key={i} onClick={button.onClick} disabled={button.disabled}>
                            {button.text}
                        </Button>)}
                    </div>}
                </Container>
            </div>
        </>
    )
}