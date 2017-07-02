import React from 'react';
import HeaderComponent from './HeaderComponent';
class App extends React.Component{
	msg = {msg : "React Class component"};
	render(){
		console.log('in App component');
		console.log(this.msg);
		return(
			<HeaderComponent message={this.msg} />
			
		);
	}
}
App.propTypes = {
	msg : React.PropTypes.string
};
export default App;