import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, TextField } from '@mui/material';

function NewArticle() {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    createdAt: ''
  });

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_ARTICLES_API_URL}`, article)
      .then(res => {
        console.log('Article created:', res.data);
        window.location.href = '/article-list';
      });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField 
            name="title" 
            value={article.title} 
            onChange={handleChange} 
            label="Title"
            required 
            fullWidth
            style={{ marginBottom: '16px' }} 
          />
        </div>
        <div>
          <TextField 
            name="description" 
            value={article.description} 
            onChange={handleChange} 
            label="Description"
            multiline
            rows={4}
            required 
            fullWidth
            style={{ marginBottom: '16px' }} 
          />
        </div>
        <div>
          <TextField 
            name="content" 
            value={article.content} 
            onChange={handleChange} 
            label="Content"
            multiline
            rows={4}
            required 
            fullWidth
            style={{ marginBottom: '16px' }} 
          />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">Save</Button>
        </div>
      </form>
    </Container>
  );
}

export default NewArticle;
