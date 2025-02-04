import React from "react";

function InlineStyle(){
    const freeStyle = {
        fontSize: "89px",
        color: "blue"
    }

    return(
        <div>
            <h1 style= {freeStyle}>
                This is inline styling
            </h1>
        </div>
    )
}

export default InlineStyle;