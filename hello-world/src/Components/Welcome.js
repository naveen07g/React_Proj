import React, { Component } from "react";

class Welcome extends Component{
    render(props){
        return <h1>Welcome {this.props.name} a.k.a {this.props.superHero}</h1>
    }
}
export default Welcome;