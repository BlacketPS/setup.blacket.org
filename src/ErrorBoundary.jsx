import React from "react";
import styles from "@styles";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            componentStack: null
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({
            error: error,
            componentStack: info.componentStack
        });
        console.error(this.state.error)
    }

    render() {
        if (this.state.error) {
            document.title = this.state.error.toString().replace("Error: ", "");

            const alertError = () => alert(`${this.state.error.toString().replace("Error: ", "")}${this.state.componentStack.toString()}`);
            alertError();

            return <h1 className={styles.error.error} onClick={alertError}>Something went wrong</h1>
        }
        return this.props.children;
    }
}