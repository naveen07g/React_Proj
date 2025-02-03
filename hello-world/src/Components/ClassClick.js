import React, {Component} from "react";

class ClassClick extends Component
{
    constructor() {
        super();
        
    }
    classClicked() {
        alert('Hello from Class Click')
    }
    render(){
        return(
            <div>
                <button onClick={() => this.classClicked}>Click Me</button>
            </div>
        )
    }
    
}

export default ClassClick;