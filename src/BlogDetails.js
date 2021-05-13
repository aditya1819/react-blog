import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog , error, isLoading } = useFetch('http://localhost:8000/blog/' + id);

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
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;