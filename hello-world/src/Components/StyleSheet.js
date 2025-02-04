import React from "react";
import "./MyStyles.css"

function StyleSheet(props){
    const dynamicClassName = props.primary ? "primary":""
    
    return(
        <div>
            <h1 className= {`${dynamicClassName} font-large`}>Welcome to StyleSheet functional component</h1>
        </div>
    )
}
export default StyleSheet;