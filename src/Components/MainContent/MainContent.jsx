import React from 'react';
import Posts from '../Posts/Posts';

const MainContent = () => {
	return (
		<div className='row'>
			<div className='col-lg-8'>
				<Posts />
			</div>
			<div className='col-lg-4'></div>
		</div>
	);
};

export default MainContent;
