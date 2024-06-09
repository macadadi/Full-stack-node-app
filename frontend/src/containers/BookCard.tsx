
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
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Paper>
        <ImageLoader src={`../../${coverPhotoURL}`} placeholder="https://via.placeholder.com/150" alt="book cover" />
        <Typography textAlign="center">{title}</Typography>
        <Typography>{author}</Typography>
        <button onClick={() => addItem({ title, coverPhotoURL, author, readingLevel })}>Add</button>
        <button onClick={() => removeItem({ title, coverPhotoURL, author, readingLevel })}>Remove</button>
      </Paper >
    </Grid >
  )
}

export default BookCard
