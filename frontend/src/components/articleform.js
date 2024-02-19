import { useState } from "react";
import axios from "axios";


const ArticleFormular = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleClearForm = () => {
        setTitle('');
        setPrice('');
        setCategory('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('imageFile', imageFile);

        try {
            await axios.post('http://localhost:3000/api/uploadArticle', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Fichier téléchargé avec succès');
        } catch (error) {
            console.error("Erreur lors du téléchargement du fichier", error);
        }
        handleClearForm();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        Nom de l'article:<br />
                        <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Entrez le nom du produit à ajouter' required />
                    </div>
                    <div>
                        Prix de l'article:<br />
                        <input type='text' value={price} onChange={e => setPrice(e.target.value)} placeholder='Entrez le prix du produit à ajouter' required />
                    </div>
                    <div>
                        Catégorie de l'article:<br />
                        <input type='text' value={category} onChange={e => setCategory(e.target.value)} placeholder='Entrez la catégorie du produit à ajouter' required />
                    </div>
                    <div>
                        <input type='file' onChange={e => setImageFile(e.target.files[0])} required />
                    </div>
                </div>
                <button type="submit" className="articleForm-button">Ajouter un article</button>
            </form>
        </div>
    )
}

export default ArticleFormular;