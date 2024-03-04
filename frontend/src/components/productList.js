import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/importArticles');
                setArticles(response.data);
            } catch (error) {
                console.error('Erreur lors de la recuperation des articles', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Liste des articles</h1>
            <ul>
                {articles.map(article => (
                    <li key={article._id} >
                        <h2>{article.titre}</h2>
                        <h3>Catégorie : {article.category}</h3>
                        <p>Prix : {article.price}</p>
                        <img src={'http://localhost:3000/api/uploads/${article.imageUrl}'} alt={article.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ProductList;