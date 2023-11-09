import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Background from "@components/Background";
import Header from "@components/Header";
import Body from "@components/Body";
import Footer from "@components/Footer";
import pages from "@pages";

export default function App() {
    return <BrowserRouter basename="/">
        <ErrorBoundary fallback="/">
            <Background />
            <Header />
            <Body>
                <Routes>
                    <Route path="/" element={<pages.Home />} />
                </Routes>
            </Body>
            <Footer />
        </ErrorBoundary >
    </BrowserRouter>
}