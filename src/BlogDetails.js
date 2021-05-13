import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog , error, isLoading } = useFetch('http://localhost:8000/blog/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blog/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <div>Loading ...</div> }
            { error && <div> { error } </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Author : {blog.author }</p>
                    <br />
                    <div>{ blog.body }</div>
                    <br />
                    <button onClick={ handleClick }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;