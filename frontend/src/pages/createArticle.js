import ArticleFormular from "../components/articleform";
import Navbar from "../components/navbar";
import '../styles/createArticle.css'

const CreateArticle = () => {
    return (
        <div>
            <Navbar />
            <div className="createArticle-container" >
                <ArticleFormular />
            </div>
        </div>
    )
}

export default CreateArticle;