import React, { useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Container } from '@mui/material';
import { useParams } from 'react-router-dom';

function DeleteConfirmation({ match }) {
  const { id } = useParams();
  useEffect(() => {
    axios.delete(`${process.env.REACT_APP_ARTICLES_API_URL}/${id}`)
      .then(res => {
        window.location.href = '/article-list';
      });
  }, [id]);

  return (
    <Container>
      <CircularProgress />
      <p>Deleting...</p>
    </Container>
  );
}

export default DeleteConfirmation;
