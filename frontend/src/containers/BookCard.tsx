
import { Grid, Paper } from '@mui/material'
import ImageLoader from 'components/ImageLoader'
import { Book } from 'types'

function BookCard({ title, coverPhotoURL, author }: Book) {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Paper>
        <ImageLoader src={`../../${coverPhotoURL}`} placeholder="https://via.placeholder.com/150" alt="book cover" />
        <h6>{title}</h6>
        <h4>{author}</h4>
        <h4>{coverPhotoURL}</h4>
      </Paper>
    </Grid>
  )
}

export default BookCard