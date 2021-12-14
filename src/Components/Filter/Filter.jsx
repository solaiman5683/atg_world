import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './filter.css';
import join from '../../assets/icons/join.svg';

const Filter = () => {
	return (
		<div className='my-3 filter-tab sticky-top'>
			<Nav tabs>
				<NavItem>
					<NavLink active href='#'>
						All Posts
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>Article</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>Event</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>Education</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>Job</NavLink>
				</NavItem>
				<NavItem className='ms-auto'>
					<button className='btn btn-light mx-3'>
						Write a Post <i className='fas fa-caret-down ps-3'></i>
					</button>
					<button className='btn btn-primary mx-3'>
						<div className='d-flex align-items-center'>
							<img className='px-2' src={join} alt='' /> Join Group
						</div>
					</button>
				</NavItem>
			</Nav>
		</div>
	);
};

export default Filter;
