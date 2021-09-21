import useFetch from '../custom/useFetch';
import BlogList from './BlogList';

const Homepage = () => {

    const { data: blogs, isLoading } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="homepage">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Homepage;