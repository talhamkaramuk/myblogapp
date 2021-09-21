import { useHistory, useParams } from "react-router";
import useFetch from "../custom/useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p><em>Yazar: {blog.author}</em></p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Sil</button>
                </article>
            )
            }
        </div >
    );
}

export default BlogDetails;