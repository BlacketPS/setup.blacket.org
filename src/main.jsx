import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import pages from "./pages";

document.title = "Blacket Setup";

createRoot(document.getElementById("app")).render(
    <BrowserRouter basename="/">
        <ErrorBoundary fallback="/">
            <Routes>
                <Route path="/" element={<pages.Home />} />
            </Routes>
        </ErrorBoundary >
    </BrowserRouter>
);