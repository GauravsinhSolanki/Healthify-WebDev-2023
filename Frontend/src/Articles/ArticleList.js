import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container  from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import Navbar from "../Components/header";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_ARTICLES_API_URL}`)
      .then(res => {
        setArticles(res.data);
      });
  }, []);

  const navigate = useNavigate(); 

  const handleViewBlog = (id) => {
    navigate(`/articles/${id}`);
  };

  const handleNewArticle = () => {
    navigate(`/articles/new`);
  };

  const handleDelete = (id) => {
    navigate(`/articles/delete/${id}`);
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
      <Navbar></Navbar>
      <div>
      <Button variant="outlined" color="primary" style={{ marginTop: "10px", marginRight: "10px" }} onClick={() => {handleNewArticle()}}> NewArticle</Button>
      </div>
      {articles.map(article => {
        const createdAtDate = new Date(article.createdAt); 
        return (
          <Paper key={article._id} elevation={3} style={{ padding: '16px', margin: '16px 0' }}>
            <div>
              <Typography variant="h5">{article.title}</Typography>
            </div>
            <div>
              <Typography variant="body3"> {formatDateString(createdAtDate)}</Typography>
            </div>
            <div>
              <Typography variant="body1">{article.description}</Typography>
            </div>
            <div>
              <Button variant="outlined" color="primary" style={{ marginTop: "10px", marginRight: "5px" }} onClick={() =>{handleViewBlog(article._id);}}> View Blog</Button>
              <Button variant="outlined" color="secondary" style={{ marginTop: "10px" }} onClick={() =>{handleDelete(article._id);}}> Delete</Button>
            </div>
          </Paper>
        );
      })}
    </Container>
  );
}

export default ArticleList;
