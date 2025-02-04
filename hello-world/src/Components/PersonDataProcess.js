import React from "react";
function PersonDataProcess({persondata}){
    return(
        <div>
            <h2>
            I am {persondata.name}, 
            {persondata.Age} year old. 
            Having the following skill {persondata.Skill}
            </h2>
        </div>
    )
}
export default PersonDataProcess;