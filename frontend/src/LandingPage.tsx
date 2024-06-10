import { Grid } from '@mui/material'
import { useFilterBooks } from 'api/queries';
import EOSearchInput from 'components/EOSearchInput'
import { CustomTabPanel } from 'components/TabbedComponent'
import { BookCard } from 'containers';
import { useState } from 'react';


function LandingPage({ value, addItem, removeItem }) {
  const [search, setSearch] = useState<string>('');
  const { loading, error, data } = useFilterBooks(search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : occurred</p>;
  return (
    <CustomTabPanel value={value} index={0}>
      <EOSearchInput setSearch={setSearch} />
      <Grid container spacing={2}>
        {data?.map((book, index) => <BookCard
          key={`${index}-${book.title}`}
          addItem={addItem}
          removeItem={removeItem}
          {...book} />
        )}
      </Grid>
    </CustomTabPanel>
  )
}

export default LandingPage