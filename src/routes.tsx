import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from './pages/Error'
import Filme from "./pages/FIlme";
import Header from "./components/Header";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />


                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}