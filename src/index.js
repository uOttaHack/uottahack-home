import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
//import Footer from "./components/Footer/Footer.js"
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Footer />, document.getElementById("footer"));
registerServiceWorker();
