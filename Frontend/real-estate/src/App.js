import React from "react";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* must add the content-wrap while integrating it for real-estate */}
            <Nav />
            <div className="content-wrap">
                <Body />
            </div>
            <Footer />
        </div>
    );
}

export default App;