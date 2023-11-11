import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ConfigProvider } from "@stores/config";
import { PageProvider } from "@stores/page";
import ErrorBoundary from "./ErrorBoundary";
import Background from "@components/Background";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Body from "@components/Body";
import PageHandler from "@handlers/PageHandler";

export default function App() {
    return (
        <ErrorBoundary>
            <ConfigProvider>
                <PageProvider>
                    <BrowserRouter>
                        <Background />
                        <Header />
                        <Body>
                            <Routes>
                                <Route path="*" element={<Navigate to="/" />} />
                                <Route path="/" element={<PageHandler />} />
                            </Routes>
                        </Body>
                        <Footer />
                    </BrowserRouter>
                </PageProvider>
            </ConfigProvider>
        </ErrorBoundary>
    )
}