import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Üzgünüz...</h2>
            <p>Sayfa bulunamadı.</p>
            <Link to="/"><button>Anasayfaya dön</button></Link>
        </div>
    );
}

export default NotFound;