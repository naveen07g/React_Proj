import React, {Component} from "react";

class EventBind extends Component{
    /**
     *
     */
    constructor() {
        super();
        this.state = {
            message: 'Hello from Event binding' 
        }
    }
    sayGoodbye(){
        this.setState({
            message: "Good bye"
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.sayGoodbye.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind;