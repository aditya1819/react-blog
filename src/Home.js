import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {

	const [blogs, setBlogs] = useState([
		{ title: 'my new website', body: 'lorem ispum bla bla bla', author: 'mario', id: 1},
		{ title: 'welcom all', body: 'lorem ispum jadkls;fj bla', author: 'luigi', id: 2},
		{ title: 'web dev tips', body: 'lorem ispum bla bla burh burh', author: 'spiderman', id: 3}
	])

	return ( 
		<div className="home">
			<BlogList blogs={blogs} title="All blogs" />

		</div>    
	);
}
 
export default Home;