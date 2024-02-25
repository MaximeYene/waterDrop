import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [Article, setArticle] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/importArticles')
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Erreur lors de la récupération des articles.', error))
    }, []);

    return (<div>
        <h1>Liste des articles</h1>
        <ul>
            {Article.map(Article => (
                <li key={Article._id} >
                    <h2>{Article.titre}</h2>
                    <h3>{Article.category}</h3>
                    <p>{Article.price}</p>
                    <p>{Article.imageUrl}</p>
                </li>
            ))}
        </ul>
    </div>)
}


export default ProductList;