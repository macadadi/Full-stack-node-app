
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';

import './App.css'

import { useContext, useState } from 'react';
import TabbedComponent from 'components/TabbedComponent';

import  Box  from '@mui/material/Box';
import  IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import  MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import SideFilter from 'components/SideFilter';

import { grades } from 'utils/helpers/constants';
import LandingPage from 'containers/LandingPage';
import HistoryPage from 'containers/HistoryPage';
import { appContext } from 'context/Context';
import NavBar from 'containers/NavBar';


function App() {
  const { isAdding, isRemoving, items } = useContext(appContext)
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorNav(null);
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
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {grades.map((grade) => (
                <MenuItem key={grade.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{grade.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TabbedComponent>
            <TabbedComponent.Tab value={value} handleChange={handleChange}>
              <Tab value={0} label="All Books" />
              <Tab value={1} label={`Reading List (${items?.length})`} />
            </TabbedComponent.Tab>
            <LandingPage value={value} />
            <HistoryPage value={value} />
          </TabbedComponent>
        </Stack>
      </Container>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isAdding}>
        <SnackbarContent
          sx={{ bgcolor: 'primary.main', }}
          message={'Book successfully added to your reading list'}
          key={'add-book'}
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isRemoving}
      >
        <SnackbarContent sx={{ bgcolor: 'primary.main', }}
          message={'Book successfully removed from your reading list'}
          key={'remove-book'} />
      </Snackbar>
    </Container>
  )
}

export default App
