import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './containers/WelcomePage.jsx';
import './style/index.css';

class App extends React.Component {
	render() {
		return (
			<div className="app">
        <WelcomePage />
      </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));