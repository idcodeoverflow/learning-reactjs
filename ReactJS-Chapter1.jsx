
/*
Stateless definition of a components
const Button = (props) => {
	return (<button>5</button>);
};
*/

class Button extends React.Component {

	handleClick = () => {
		this.props.onClickFunction(this.props.incrementValue);
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				+{this.props.incrementValue}
			</button>
		);
	}
}

const Result = (props) => {
	return <div>{props.counter}</div>
}

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { counter : 0 };
	};

	incrementCounter = (incrementValue) => {
		this.setState((prevState) => {
			return {
				counter : prevState.counter + incrementValue
			};
		});
	}
	
	render = () => {
		return (
			<div>
				<Button incrementValue={1} onClickFunction={this.incrementCounter} />
				<Button incrementValue={5} onClickFunction={this.incrementCounter} />
				<Button incrementValue={10} onClickFunction={this.incrementCounter} />
				<Button incrementValue={100} onClickFunction={this.incrementCounter} />
				<Result counter={this.state.counter} />
			</div>
		)
	} 
}

ReactDOM.render(<App />, mountNode);

