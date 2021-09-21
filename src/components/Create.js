import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Yeni blog eklendi!");
            setIsLoading(false);
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Yeni Blog Ekle</h2>
            <form onSubmit={handleSubmit} >
                <label>Başlık:</label>
                <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)} />
                <label>İçerik:</label>
                <textarea required value={body} onChange={(event) => setBody(event.target.value)} />
                <label>Yazar:</label>
                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
                {!isLoading && <button>Ekle</button>}
                {isLoading && <button disabled>Blog ekleniyor...</button>}
            </form>
        </div>
    );
}

export default Create;