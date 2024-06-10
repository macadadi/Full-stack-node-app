
import Container from '@mui/material/Container';

import './App.css'

import NavBar from 'components/NavBar';

import { useState } from 'react';

import { Book } from 'types';
import { useCustomSet } from './utils/useCustomSet';
import TabbedComponent from 'components/TabbedComponent';
import LandingPage from './LandingPage';
import HistoryPage from './HistoryPage';

function App() {
  const { addItem, removeItem, items } = useCustomSet<Book>();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Container maxWidth='xl'>
      <NavBar />
      <Container sx={{
        mt: 12
      }}
      >
        <TabbedComponent value={value} handleChange={handleChange}>
          <LandingPage addItem={addItem} removeItem={removeItem} value={value} />
          <HistoryPage value={value} items={items} addItem={addItem} removeItem={removeItem} />
        </TabbedComponent>
      </Container>
    </Container>


  )
}

export default App
