
import { Container, Grid, Paper } from '@mui/material';
import useGetBooks from './api/queries';
import './App.css'
import BookCard from 'containers/BookCard';
import NavBar from 'components/NavBar';


function App() {

  const { loading, error, data } = useGetBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : occurred</p>;
  return (
    <Container  >
      <NavBar />
      <Grid container spacing={2}>
        {data?.books.map((book, index) => <BookCard key={index} {...book} />)}
      </Grid>
    </Container>


  )
}

export default App
