import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ConfigProvider } from "@stores/config";
import { PageProvider } from "@stores/page";
import ErrorBoundary from "./ErrorBoundary";
import Background from "@components/Background";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Body from "@components/Body";
import pages from "@pages";

export default function App() {
    return <ConfigProvider>
        <PageProvider>
            <BrowserRouter basename="/">
                <ErrorBoundary fallback="/">
                    <Background />
                    <Header />
                    <Body>
                        <Routes>
                            <Route path="*" element={<Navigate to="/" />} />
                            <Route path="/" element={<pages.Page />} />
                        </Routes>
                    </Body>
                    <Footer />
                </ErrorBoundary >
            </BrowserRouter>
        </PageProvider>
    </ConfigProvider>
}