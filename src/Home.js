import { useState } from 'react';

const Home = () => {

	const [blogs, setBlogs] = useState([
		{ title: 'my new website', body: 'lorem ispum bla bla bla', author: 'mario', id: 1},
		{ title: 'welcom all', body: 'lorem ispum jadkls;fj bla', author: 'luigi', id: 2},
		{ title: 'web dev tips', body: 'lorem ispum bla bla burh burh', author: 'spiderman', id: 3}
	])

	return ( 
		<div className="home">
			{ blogs.map((blog) =>(
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Author : {blog.author}</p>
					<br></br>
				</div>
			))}

		</div>    
	);
}
 
export default Home;