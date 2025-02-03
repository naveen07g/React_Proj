import React from "react";

function FunctionClick(){
    return(
        <div>
            <button onClick={clickedMe}>Click</button>
        </div>
    )
}
const clickedMe = () => {
    console.log('Clicked')
}
export default FunctionClick;