import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container  from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    const fetchArticle = async () => {
      const result = await axios.get(`${process.env.REACT_APP_ARTICLES_API_URL}/${id}`);
      setArticle(result.data);
    }
    fetchArticle();
  }, [id]);

  const navigate = useNavigate(); 

  const handleAllArticles = () => {
    navigate(`/article-list`);
  };

  const handleEditArticle = (id) => {
    navigate(`/articles/edit/${id}`);
  };

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    console.log(day)
    return `${year}/${month}/${day}`;
  };


  
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '16px', margin: '16px 0' }}>
        <div>
          <Typography variant="h4">{article.title}</Typography>
        </div>
        <div>
          <Button variant="outlined" color="primary" style={{ marginTop: "10px", marginRight: "10px" }} onClick={() => {handleAllArticles()}}> All articles</Button>
          <Button variant="outlined" color="secondary" style={{ marginTop: "10px" }} onClick={() => {handleEditArticle(article._id)}}> Edit</Button>
        </div>
        <div>
          <Typography variant="h5">{article.title}</Typography>
        </div>
        <div>
          <Typography variant="body3"> {formatDateString(article.createdAt)}</Typography>
        </div>
        <div>
          <Typography variant="body1">{article.description}</Typography>
        </div>
        <div>
          <Typography variant="body1">{article.content}</Typography>
        </div>
      </Paper>
    </Container>
  );
}

export default ArticleDetails;
