import React from 'react';
import Posts from '../Posts/Posts';
import './style.css';

const MainContent = () => {
	return (
		<div className='container-lg'>
			<div className='row'>
				<div className='col-lg-8 col-12 post-container'>
					<Posts />
				</div>
				<div className='col-lg-4'></div>
			</div>
		</div>
	);
};

export default MainContent;
