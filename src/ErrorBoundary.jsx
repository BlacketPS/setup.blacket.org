import React from "react";

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

            alert(`${this.state.error.toString().replace("Error: ", "")}${this.state.componentStack.toString()}`)

            return <h1 style={{ marginLeft: "7.8px", color: "#3a3a3a" }}>Something went wrong</h1>
        }
        return this.props.children;
    }
}