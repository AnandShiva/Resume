import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const HeaderComponent = (props) =>{
	console.log(props);
	return(
		<Header as='h2' icon>
			<Icon name='student'/>
			Fuck this shit
		</Header>
	);
}
export default HeaderComponent;