import React, { useState } from 'react';
import axios from 'axios';
import '../styles/createArticle.css'

const ArticleFormular = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

const handleFormClear=()=>{
  setTitle('');
  setCategory('');
  setPrice('');
  setImage(null);
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:3000/api/uploadArticle', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Article ajouté avec succès !');
    } catch (error) {
      alert('Une erreur s\'est produite lors de l\'ajout de l\'article.');
    }
    handleFormClear();
  };

  return (
    <div>
      <h1>Ajouter un nouvel article</h1>
      <form onSubmit={handleSubmit}>
        <label>Titre:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label><br/>

        <label>Catégorie:
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </label><br/>

        <label>Prix:
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </label><br/>

        <label>Image:
          <input type="file" onChange={e => setImage(e.target.files[0])} />
        </label><br/>

        <button type="submit">Ajouter l'article</button>
      </form>
    </div>
  );
};

export default ArticleFormular;
