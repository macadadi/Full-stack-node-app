
import Container from '@mui/material/Container';
import { useFilterBooks } from './api/queries';
import './App.css'
import BookCard from 'containers/BookCard';
import NavBar from 'components/NavBar';
import EOSearchInput from 'components/EOSearchInput';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import { Book } from 'types';
import { useCustomSet } from './utils/useCustomSet';


function App() {
  const [search, setSearch] = useState<string>('');
  const { loading, error, data } = useFilterBooks(search);
  const { addItem, removeItem, items } = useCustomSet<Book>();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : occurred</p>;
  return (
    <Container maxWidth='xl'>
      <NavBar />
      <Container sx={{
        mt: 12
      }}
      >
        <EOSearchInput setSearch={setSearch} />
        <h1>Count: {items.length}</h1>
        <Grid container spacing={2}>
          {data?.map((book, index) => <BookCard
            key={`${index}-${book.title}`}
            addItem={addItem}
            removeItem={removeItem}
            {...book} />
          )}
        </Grid>
      </Container>
    </Container>


  )
}

export default App
