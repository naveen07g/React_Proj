import React, {Component} from "react";

class Counter extends Component{
    /**
     *
     */
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count + 1,            
        }, 
        () => {
            console.log("callback value: ", this.state.count)
        })

        // this.setState((prevState, props) => ({
        //     count: prevState.count + 1
        // }))
        console.log("Asynchronous count value: ", this.state.count)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return(
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Click me</button>
            </div>
        )
    }
}

export default Counter;