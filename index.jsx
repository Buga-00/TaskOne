
import * as ReactDOM from "react-dom";
import * as React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";



function FrontPage() {
    return <div>
        <h1>React quiz</h1>

        <ul>
            <li><Link to="/question/answer">List question answer</Link></li>
            <li><Link to="/question">Answer question</Link></li>
        </ul>
    </div>;
}

function Questions() {
    return <form>


        <h1>The questions</h1>
    </form>

    ;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/question" element={<Questions/>}/>
            <Route path="/question/answer" element={<FrontPage />}/>
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);