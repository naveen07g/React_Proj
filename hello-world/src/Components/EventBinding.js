import React, {Component} from "react";

class EventBinding extends Component{
    /**
     *
     */
    constructor() {
        super();
        this.state = {
            message: "Click to subscribe"
        }
        // this.clickedHere = this.clickedHere.bind(this)
    }
    // clickedHere(){
    //     this.setState({
    //         message: "Thanks for subscribing!"
    //     })
    // }

    clickedHere = () => {
        this.setState({
            message: "Thanks for subscribing"
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickedHere.bind(this)}>Click here</button> */}
                {/* <button onClick={() => this.clickedHere()}>Click here</button> */}
                {/* <button onClick={this.clickedHere}>Click here</button> assigned at constructor level now commented*/}
                <button onClick={this.clickedHere}>Click here</button>

            </div>
        )
    }
}

export default EventBinding;