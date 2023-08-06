const express = require('express');
const router = express.Router();
const Article = require('../models/articles');

router.get('/', async (req, res) => {
  console.error()
  const articles = await Article.find().sort({createdAt: 'desc'})
  res.json(articles);
});

router.post('/', async (req, res) => {
  console.error()
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    createdAt: new Date()
  });
  try {
    article = await article.save();
    res.status(201).json(article);
  } catch (e) {
    console.log("An error occurred:", e);
    res.status(500).json({ message: "Error creating article" });
  }
});
router.get('/:id', (req, res) => {
  console.error()
  const articleId = req.params.id;
  Article.findOne({ _id: articleId })
    .then((article) => {
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json(article);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.put('/:id', async (req, res) => {
  console.error()
  const article = await Article.findById(req.params.id);
  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }
  
  article.title = req.body.title;
  article.description = req.body.description;
  article.content = req.body.content;
  
  try {
    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } catch (e) {
    console.log("An error occurred:", e);
    res.status(500).json({ message: "Error updating article" });
  }
});

router.delete('/:id', async (req, res) => {
  console.error()
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article successfully deleted" });
  } catch (e) {
    console.log("An error occurred:", e);
    res.status(500).json({ message: "Error deleting article" });
  }
});

module.exports = router;
