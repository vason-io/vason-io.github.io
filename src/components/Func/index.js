import React from "react";

export default function Func({color, children}) {
    return (<span style={{color: color || "#26bbae",}}>{children}</span>);
}
