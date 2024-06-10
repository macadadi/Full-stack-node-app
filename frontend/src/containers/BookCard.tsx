
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageLoader from 'components/ImageLoader'
import { Book } from 'types'
import { Box, Button, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { appContext } from '../main';
import { useContext } from 'react';

function BookCard({ title, coverPhotoURL, author, readingLevel }: Book) {
  const book = { title, coverPhotoURL, author, readingLevel }
  const { addItem, removeItem, hasItem } = useContext(appContext)
  return (
    <Grid item xs={6} sm={4} md={3}
    >
      <Paper sx={{
        borderRadius: 4,
      }}
      >
        <ImageLoader src={`../../${coverPhotoURL}`} placeholder="https://via.placeholder.com/150" alt="book cover" />
        <Stack>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: -4,
            pr: 2,
          }}>
            <Box sx={{
              width: 'fit-content',
              bgcolor: 'secondary.dark',
              borderRadius: '50%',
              pt: 1,
              paddingX: .9,
              cursor: 'pointer',
            }}>
              <FavoriteBorderIcon fontSize='small' />
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            ml: .5
          }}>
            <MenuBookOutlinedIcon sx={{
              color: 'text.secondary',
              mr: .5
            }}
            />
            <Typography
              variant="subtitle1" component="h6"
              lineHeight={1.2}
              fontSize={'1rem'}
            >{title}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              ml: .5
            }}>
            <Person2OutlinedIcon sx={{
              color: 'text.secondary',
              mr: .5
            }} />
            <Typography
              lineHeight={1.2}
              fontSize={'1rem'}
              fontWeight={'bold'}
            >{author}</Typography>
          </Box>
        </Stack>
        {hasItem(book) ?
          <Button variant="contained" onClick={() => removeItem(book)}
            sx={{
              borderRadius: 0,
              borderBottomLeftRadius: 16,
              fontSize: '0.8rem',
              lineHeight: 1.2
            }}
            endIcon={<RemoveIcon />}
            color='error'
          >Remove From Favorites </Button> :
          <Button variant="contained" onClick={() => addItem(book)}
            sx={{
              borderRadius: 0,
              borderBottomLeftRadius: 16,
              fontSize: '.8rem',
              lineHeight: 1.2
            }}
            endIcon={<AddIcon />}
          >Add To Favorites </Button>}
      </Paper >
    </Grid >
  )
}

export default BookCard
