import { render } from "@testing-library/react";
import React from "react";
import PersonDataProcess from "./PersonDataProcess";

function NameList(){
    // const names = ["Hari", "Naveen", "Vishnu", "Havisha", "Kowsalya"];
    // const nameList = names.map(name => <h2>{name}</h2>)

    // return(
    //     <div>
    //         {nameList}
    //     </div>
    // )
    const persons = [
        {
            id: 1,
            name: "Havisha",
            Age: 1,
            Skill: "Cuteness overloaded"
        },
        {
            id: 2,
            name: "Hari",
            Age: 30,
            Skill: "Salesforce"
        },
        {
            id: 3,
            name: "Vishnu priya",
            Age: 27,
            Skill: "Dotnet + Saleforce"
        },
        {
            id: 4,
            name: "Naveen",
            Age: 30,
            Skill: "Dotnet full"
        }
    ]
    const personsList = persons.map(person => 
        (
            <PersonDataProcess key = {person.id} persondata = {person}></PersonDataProcess>
        )
    )

    return <div>{personsList}</div>
}

export default NameList;