import { Route, Routes } from "react-router-dom";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Confirmation from "./Confirmation";
import Header from "./Header";
import Home from "./Home";
import Error404 from "./NaN";
import Register from "./Register";
import Session from "./Session";

function App() {
    return (
        <div className="app">
            <Header />

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

            <footer className="container">
                &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
            </footer>
        </div>
    );
}

export default App;
