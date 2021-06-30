import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.setState={
			paraGraph:""
		}
	};

	paraChange(){
		this.setState({
			paraGraph:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
		})
	}

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={e=>{this.paraChange}}></button>
				<p id="para">{this.state.paraGraph}</p>
    		</div>
    	);
    }
}


export default App;

