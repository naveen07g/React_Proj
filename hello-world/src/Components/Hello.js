import React from "react";
import Greet from "./Greet";
import Welcome from "./Welcome";
import Message from "./Message";
import Counter from "./Counter";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";
import EventBind from "./EventBind";
import EventBinding from "./EventBinding";
import ParentComponent from "./ParentComponent";
import UserGreeting from "./UserGreeting";

const Hello = () => {
    //JSX approach
    // className also works here
    return(
        <div id="hello"> 
            {/* <Greet name='Naveen' superHero='Spidy'>
                <p>This is Childern Props</p>    
            </Greet>
            <Welcome  name='Naveen' superHero='Spidy' />
            <Greet name='Hari' superHero='Captain America'>
                <button>Click Me!</button>
            </Greet>

            <Welcome  name='Hari' superHero='Captain America'/>
            <Greet name='Vishnu' superHero='Wonder women'>
                <label>Hey, I have Havisha as junior Wonder Women</label>
            </Greet>
            <Welcome   name='Vishnu' superHero='Wonder women'/> */}


            {/* <Message /> */}


            {/* <Counter/> */}



            {/* <FunctionClick /> */}


            {/* <ClassClick /> */}

            {/* <EventBind /> */}

            {/* <EventBinding /> */}

            {/* <ParentComponent /> */}

            <UserGreeting / >
        </div>
    )

    //Without JSX approach
    // return React.createElement(
    //     "div", 
    //     {id: 'hello', class:"dummyClass"}, 
    //     React.createElement('h1', null, "Hello Navi")
    // )
}
export default Hello;