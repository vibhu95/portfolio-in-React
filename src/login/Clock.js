import * as React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date(),counter:1};
    }

    componentDidMount() {
        this.timerId = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({date:new Date()})
        this.setState((state,props)=>({
            counter: state.counter + parseInt(props.increment)
        }));
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h3>Current Time : {this.state.date.toLocaleTimeString()}</h3>
                <h3>Counter : {this.state.counter}</h3>
            </div>
        );
    }
}

export default Clock;