import React from "react";

export default function Param({color, children}) {
    return (<span style={{color: color || "#f9a156"}}>&lt;{children}&gt;</span>);
}
