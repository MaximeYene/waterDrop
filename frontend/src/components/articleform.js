import { useState } from "react";

const ArticleFormular = () => {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [imageFile,setImageFile]=useState(null)

    const handleFormClear=()=>{
        setName('');
        setPrice('');
        setCategory('');
    }

    const handleSubmit=()=>{
        handleFormClear();
    }

    return (
        <div>
            <form>
                <div>
                    <div>
                        Nom de l'article:<br />
                        <input type='text' value={name} placeholder='Entrez le nom du produit à ajouter' required />
                    </div>
                    <div>
                        Prix de l'article:<br />
                        <input type='number' value={price} placeholder='Entrez le prix du produit à ajouter' required />
                    </div>
                    <div>
                        Catégorie de l'article:<br />
                        <input type='text' value={category} placeholder='Entrez la catégorie du produit à ajouter' required />
                    </div>
                    <div>
                        <input type='file' placeholder='Insérer une image' required />
                    </div>
                </div>
                <button onClick={handleSubmit()} className="articleForm-button" >Ajouter un article</button>
            </form>
        </div>
    )
}

export default ArticleFormular;