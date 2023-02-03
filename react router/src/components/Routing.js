import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";
import Confirmation from "./Confirmation";
import Home from "./Home";
import About from "./About";
import Error404 from "./NaN";
import Register from "./Register";
import Session from "./Session";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />}>
                <Route path=":categoryId" element={<Category />}>
                    <Route path=":sessionId" element={<Session />} />
                </Route>
                <Route index element={<h3>Select a Category above</h3>} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/confirmed" element={<Confirmation />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
