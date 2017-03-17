import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

import './styles/main.styl'

ReactDOM.render(
    <Hello foo="me cool" />,
    document.getElementById("example")
);