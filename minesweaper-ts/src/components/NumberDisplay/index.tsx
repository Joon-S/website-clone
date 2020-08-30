import React from "react";
import "./NumberDisplay.scss";

interface NumberDisplayProps {
    value: number;
}

const NumberDisplay = ({ value }: NumberDisplayProps) => {
    return <div className={"NumberDisplay"}>{ value.toString().padStart(3, "0") }</div>
}

export default NumberDisplay;
