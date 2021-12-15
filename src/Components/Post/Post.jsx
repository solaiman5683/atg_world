import React from 'react';
import './post.css';
import eye from '../../assets/icons/eye.svg';
import share from '../../assets/icons/share.svg';

const Post = ({ post }) => {
	const { name, picture, catagory, description, author_img, author, views } =
		post;
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
					<div className='d-flex justify-content-between align-items-center'>
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
