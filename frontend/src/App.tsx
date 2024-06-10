
import Container from '@mui/material/Container';

import './App.css'
import NavBar from 'components/NavBar';

import { useContext, useState } from 'react';
import TabbedComponent from 'components/TabbedComponent';
import LandingPage from './LandingPage';
import HistoryPage from './HistoryPage';
import { Snackbar, Stack, Typography, } from '@mui/material';
import SideFilter from 'components/SideFilter';
import { grades } from './utils/constants';
import { appContext } from './main';

function App() {
  const { isAdding, isRemoving } = useContext(appContext)
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth='xl'>
      <NavBar />
      <Container sx={{
        mt: 12,
        display: 'flex',
        height: '100vh',
      }}
        maxWidth='xl'
      >
        <Stack flex={2} mt={16} spacing={2} pt={4}
          display={{ xs: 'none', lg: 'flex' }}>
          <Stack >
            <Typography variant='h6' component={'h6'}
              fontSize={18}
              sx={{
                textDecoration: 'underline',
                color: 'secondary.main',
              }}>Filter By Category </Typography>
          </Stack>
          {grades.map((grade, index) => <SideFilter key={index} name={grade.name} grade={grade.grade} />)}
        </Stack>
        <Stack flex={10} height={'100%'} >
          <TabbedComponent value={value} handleChange={handleChange}>
            <LandingPage value={value} />
            <HistoryPage value={value} />
          </TabbedComponent>
        </Stack>
      </Container>
      <Snackbar
        color='secondary.main'
        sx={{ colorAdjust: 'exact' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isAdding}
        message={'Book successfully added to favorite'}
        key={'add-book'}
      />
      <Snackbar
        color='secondary.main'
        sx={{ colorAdjust: 'green' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isRemoving}
        message={'Book successfully removed from favorite'}
        key={'remove-book'}
      />
    </Container>
  )
}

export default App
