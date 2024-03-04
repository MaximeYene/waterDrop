const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb+srv://maximeyene:Y5991Jmoo@cluster0.bmpw4xk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.error('Connexion à MongoDB échouée :', err));

// Schéma du modèle pour l'article
const ArticleSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  imageUrl: String // chemin de l'image enregistrée
});

const Article = mongoose.model('Article', ArticleSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // dossier pour sauvegarder les images
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Endpoint POST pour ajouter un article
app.post('/api/uploadArticle', upload.single('image'), async (req, res) => {
  try {
    const { title, category, price } = req.body;
    const imageUrl = req.file.filename;

    const newArticle = new Article({ title, category, price, imageUrl });
    await newArticle.save();

    res.status(201).json({ message: 'Article ajouté avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'article' });
  }
});

//Endpoint GET pour recupérer tous les articles de la base de données
app.get('/api/importArticles', async (req, res) => {
  try {
    const randomArticles = await Article.find();
    res.json(Article);
  }catch(err){
    console.error(err);
    res.status(500).json({message:'Erreur lors de la récupération des articles'});
  }
});

//Endpoint GET pour récupérer un article par son titre
app.get('/api/getArticleByTitle', async(req,res) => {
  try{
    const title=req.query.title;
    const article= await Article.findOne({title:title});

    if (!article) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }
    res.json({ title: article.title, category: article.category, price: article.price, imageUrl: article.imageUrl });
  }catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'article' }                                                                                                                                                                                                                                                                                                                                              );
  }
})

module.exports = app;