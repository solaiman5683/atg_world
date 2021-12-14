import React from 'react';
import './post.css';
const Post = ({ post }) => {
	const { name, picture, catagory } = post;
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
					<h5 className='card-title'>{name}</h5>

					<p className='card-text'>
						This is a longer card with supporting text below as a natural
						lead-in to additional content. This content is a little bit longer.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
