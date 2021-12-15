import React from 'react';
import './post.css';
import eye from '../../assets/icons/eye.svg';
import share from '../../assets/icons/share.svg';
import business from '../../assets/icons/business.svg';
import pin from '../../assets/icons/pin.svg';
import date from '../../assets/icons/date.svg';

const Post = ({ post }) => {
	const {
		name,
		picture,
		catagory,
		description,
		author_img,
		author,
		views,
		time,
		place,
		company,
	} = post;
	console.log(post);
	return (
		<div className='col'>
			<div className='card border-0 shadow-sm'>
				{picture && (
					<div
						className='card-image'
						style={{ backgroundImage: `url('${picture}')` }}></div>
				)}
				<div className='card-body'>
					<p>
						{catagory === 'Article'
							? '✍️ Article'
							: catagory === 'Education'
							? '🔬️ Education'
							: catagory === 'Meetup'
							? '🗓️ Meetup'
							: '💼️ Job'}
					</p>
					<div className='row'>
						<div className='col-10'>
							<h5
								className='card-title'
								style={{ fontSize: '22px', fontWeight: '600' }}>
								{name}
							</h5>
						</div>
						<div className='col-2'></div>
					</div>

					<p className='card-text'>{description}</p>
					{time || place ? (
						<div className='d-flex align-items-center'>
							<div className='d-flex justify-content-between align-items-center me-5'>
								{time ? (
									<>
										<img src={date} alt='' />
										<span className='ps-2'>{time}</span>
									</>
								) : (
									company && (
										<>
											<img src={business} alt='' />
											<span className='ps-2'>{company}</span>
										</>
									)
								)}
							</div>
							<div>
								<img src={pin} alt='' />
								<span className='ps-2'>{place}</span>
							</div>
						</div>
					) : (
						''
					)}
					{catagory === 'Meetup' ? (
						<button
							className='btn my-3 border d-block w-100'
							style={{ color: '#E56135', fontWeight: '600' }}>
							Visit Website
						</button>
					) : catagory === 'Job' ? (
						<button
							className='btn my-3 border d-block w-100'
							style={{ color: '#02B875', fontWeight: '600' }}>
							Apply on Timesjobs
						</button>
					) : (
						''
					)}
					<div className='d-flex justify-content-between align-items-center mt-3'>
						<div>
							<img src={author_img} className='pe-3' alt='' />
							<span className='author'>{author}</span>
						</div>
						<div>
							<img src={eye} alt='' />
							<span>{views} views</span>
							<button className='btn btn-light ms-4'>
								<img src={share} alt='' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
