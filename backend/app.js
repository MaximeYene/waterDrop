const express = require('express');
const mongoose=require('mongoose');
const multer=require('multer');
const path = require('path');
const  cors=require('cors');
const thing = require('./models/thing');

const app = express();

app.use(cors());
app.use(express.json());


//Connexion à mongoDB
mongoose.connect('mongodb+srv://maximeyene:Y5991Jmoo@cluster0.bmpw4xk.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });


//Endpoint POST pour uploader un article dans la base de données
app.post('/api/uploadArticle',upload.single('imageFile'),async(req,res)=>{
  try{
    if(!req.file){
      return res.status(400).json({message:"Aucun fichier n'a été téléchargé"})
    }
    const {title, price, category}=req.body;
    const imageFile=req.file.filename;

    const newArticle= new thing({
      title:title,
      price:price,
      category:category,
      imageFile:imageFile
    });

    await newArticle.save();
    res.status(201).json({message:"Article enregistré avec succès"});
  }
  catch(err){
    console.error(err);
    return res.status(500).json({message:"Erreur lors du traitement de l'article"});
  }
})

module.exports = app;