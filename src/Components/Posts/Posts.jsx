import React, { useEffect } from 'react';
import Post from '../Post/Post';

const Posts = () => {
	const [posts, setPosts] = React.useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/solaiman5683/jsonfiles/main/jobtask01.json'
		)
			.then(res => res.json())
			.then(data => setPosts(data));
	}, []);
	console.log(posts);
	return (
		<div>
			<div className='row row-cols-1 g-4 py-4'>
				{posts?.map(post => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Posts;
