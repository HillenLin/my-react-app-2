import React, { Component } from 'react';

import {parseDuration, padLeft} from '../utilitis/index';


class StopWatch extends Component{
    constructor(props){
        super(props);
        this.state = { duration:0};
    }
    
    render(){
        const{seconds, minutes} = parseDuration(this.state.duration);

        return(
            <section>
                <div>{padLeft(minutes)} : {padLeft(seconds)}</div>
                <button onClick={this.startWatch}>Start</button>
                <button onClick={this.stopWatch}>Stop</button>
            </section>
        );
    }

    startWatch (){
        console.log("start watch");
        var a = this.state;
        console.log(a)
    }

    stopWatch(){
        console.log("stop watch");
    }



}

export default StopWatch;