
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageLoader from 'components/ImageLoader'
import { Book } from 'types'

interface BookCardProps extends Book {
  addItem: (item: Book) => void;
  removeItem: (item: Book) => void;
}

function BookCard({ title, coverPhotoURL, author, addItem, readingLevel, removeItem }: BookCardProps) {
  const book = { title, coverPhotoURL, author, readingLevel }
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Paper>
        <ImageLoader src={`../../${coverPhotoURL}`} placeholder="https://via.placeholder.com/150" alt="book cover" />
        <Typography textAlign="center">{title}</Typography>
        <Typography>{author}</Typography>
        <button onClick={() => addItem(book)}>Add</button>
        <button onClick={() => removeItem(book)}>Remove</button>
      </Paper >
    </Grid >
  )
}

export default BookCard
