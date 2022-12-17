import React from "react";
import ReactDOM from "react-dom";

import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";

function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
