import React from "react";

function NamesLists(){
    
    const names = ["Naveen", "Hari", "Havisha", "Vishnu"]
    const namesList = names.map((names, index) => <h2 key = {index}>{names}</h2>)
    
    return(
        <div>
            {namesList}
        </div>
    )
}
export default NamesLists;