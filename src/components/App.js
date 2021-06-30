import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		State=({
			paraGraph:"",
		})
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={()=>{
					this.setState({
						paraGraph:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
					})
				}}></button>
				<p id="para">{this.State.paraGraph}</p>
    		</div>
    	);
    }
}


export default App;

