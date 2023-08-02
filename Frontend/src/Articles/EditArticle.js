import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditArticle({ match }) {
  
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: ''
  });

  useEffect(() => {
    const fetchArticle = async () => {
      
        const result = await axios.get(`${process.env.REACT_APP_ARTICLES_API_URL}/${id}`);
        //console.log('EditArticle match:', match);
      setArticle(result.data);
    }
    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_ARTICLES_API_URL}/${id}`, article)
      .then(res => {
        navigate(`/articles/${id}`);
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

export default EditArticle;
