import React, {Component} from "react";

class UserGreeting extends Component{
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoggedId: false
        }
    }

    render(){
        // if(this.state.isLoggedId){
        //     return(
        //         <div><h1>Welcome Naveen</h1></div>
        //     )
        // }
        // else{
        //     return(
        //         <div><h1>Welcome Guest</h1></div>
        //     )
            // let message
            // if(this.state.isLoggedId){
            //     message = <div><h1>Welcome Naveen</h1></div>
            // }
            // else{
            //     message = <div><h1>Welcome Guest</h1></div>
            // }
            // return(<div>{message}</div>)
            return(
                this.state.isLoggedId ? 
                (<div><h1>Welcome Naveen</h1></div>) : 
                (<div><h1>Welcome Guest</h1></div>)

            )
            
         }
    }


export default UserGreeting;