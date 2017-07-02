import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App';
import testData from '../testData';
console.log(testData);
ReactDom.render(
	<App />,
	document.getElementById('root')
);

