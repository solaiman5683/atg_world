import React from 'react';
import './navigation.css';
import {
	Collapse,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	UncontrolledDropdown,
} from 'reactstrap';

const Navigation = ({ logo }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div className='fixed-top bg-white'>
			<Navbar expand='lg' light style={{ padding: '10px 20px' }}>
				<NavbarBrand href='/'>
					<img src={logo} alt='ATG World' />
				</NavbarBrand>
				<NavbarToggler onClick={() => setIsOpen(!isOpen)} />
				<Collapse isOpen={isOpen} navbar>
					<div className='mx-auto search-box d-flex align-items-center my-md-2 my-3'>
						<i className='fas fa-search mx-2' />
						<input
							type='text'
							placeholder='Search for your favorite groups in ATG'
						/>
					</div>
					<Nav navbar>
						<UncontrolledDropdown inNavbar nav className='text-center'>
							<DropdownToggle
								caret
								nav
								className='fw-bold'
								style={{ color: '#2E2E2E', cursor: 'pointer' }}>
								Create account.
								<span style={{ color: '#2F6CE5' }}> It's free!</span>
							</DropdownToggle>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
