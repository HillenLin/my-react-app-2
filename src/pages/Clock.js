import React, { Component } from 'react';


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = { time: new Date()};
    }

    //ngOninit
    componentDidMount(){
        this.updateTime();
    }

    //ngOndestroy
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    updateTime(){
        this.timeID = setInterval(
            () => {
                this.setState({time: new Date()});
            }, 1000
        );
    }
    
    render(){
        return(
            <div>
                <h2>It is {this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;