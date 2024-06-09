
import { Grid, Paper, Typography } from '@mui/material'
import ImageLoader from 'components/ImageLoader'
import { Book } from 'types'

function BookCard({ title, coverPhotoURL, author }: Book) {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Paper>
        <ImageLoader src={`../../${coverPhotoURL}`} placeholder="https://via.placeholder.com/150" alt="book cover" />
        <Typography textAlign="center">{title}</Typography>
        <Typography>{author}</Typography>
      </Paper >
    </Grid >
  )
}

export default BookCard
