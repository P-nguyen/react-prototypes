import React, {Component} from 'react';
import Time from './format_time';

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
        status : 'stopped',
        start : null,
        elapsed : 0
        };
    }
    start = ()=>{
        this.setState({
            status: 'running',
            start: new Date().getTime()
        });
        setTimeout(this.update,10);
    }
    stop = ()=>{
        this.setState({
            status: 'stopped'
        });
    }
    reset = ()=>{
        this.setState({
            status : 'stopped',
            start: null,
            elapsed: 0
        });
    }
    update = ()=>{
        const {status, start} = this.state;
        if (status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }

    }
    render(){
        const {status, elapsed} = this.state;
        return ( 
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                <h1 className="my-3" />
                <p className="lead text-center">{status}</p>
                <p className="text-center">      
                    <button onClick={this.start} className="btn btn-outline-success mx-3">Start</button>
                    <button onClick={this.stop} className="btn btn-outline-danger mx-3">Stop</button> 
                    <button onClick={this.reset} className="btn btn-outline-warning mx-3">Reset</button>
                </p>
            </div>
        )
    }

}

export default Stopwatch;