import ArticleFormular from "../components/articleform";
import Navbar from "../components/navbar";
import '../styles/createArticle.css'

const CreateArticle = () => {
    const title='Ajouter un article'
    return (
        <div>
            <Navbar />
            <div className="createArticle-container" >
                <h2>{title}</h2>
                <ArticleFormular />
            </div>
        </div>
    )
}

export default CreateArticle;