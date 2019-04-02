import React, { Component } from 'react';

import {parseDuration, padLeft} from '../utilitis/index';


class StopWatch extends Component{
    constructor(props){
        super(props);
        this.state = { 
            duration:0, 
            isWatchRunning:false
        };
    }

    
    render(){
        const{seconds, minutes} = parseDuration(this.state.duration);
        console.log(this.state.isWatchRunning);

        return(
            <section>
                <div>{padLeft(minutes)} : {padLeft(seconds)}</div>
                <button onClick={this.startWatch} disabled={this.state.isWatchRunning}>Start</button>
                <button onClick={this.stopWatch}>Stop</button>
            </section>
        );
    }

    componentWillUnmount(){
        this.stopWatch();
    }

    startWatch =()=>{
        //new lap, clear the duration
        this.setState({duration: 0, isWatchRunning:true});

        //update duration per 1000ms
        this.timeID = setInterval(()=>{
            const newDuration = this.state.duration + 1000;
            this.setState({duration: newDuration});
        }, 1000);
    }

    stopWatch=()=>{
        if(this.timeID){
            clearInterval(this.timeID);
            this.setState({isWatchRunning:false});
        }
    }



}

export default StopWatch;