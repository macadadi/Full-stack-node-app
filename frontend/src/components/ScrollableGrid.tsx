import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { GridProps } from 'types'
import ImageLoader from './ImageLoader'



function ScrollableGrid({ children, isLoading }: GridProps) {
  return (
    <Grid container spacing={2} sx={{ overflowY: 'scroll', }}
      maxHeight={'90vh'} mt={2}>
      {isLoading ? <Stack textAlign={'center'}
        spacing={2}
        alignItems={'center'}
        sx={{ width: '100%', minHeight: '50vh', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
        <p>Loading...</p>
      </Stack> : children}
    </Grid>
  )
}

function EmptyComponent({ heading, description }: { heading?: string, description?: string }) {
  return (
    <Grid container spacing={2}
      alignContent={'center'}>
      <Stack textAlign={'center'} sx={{ width: '100%', minHeight: '50vh', justifyContent: 'center', }}>
        <Box
          sx={{
            margin: 'auto',
            width: { xs: '80%', sm: '60%', md: '40%' },
            alignContent: 'center'
          }}
        >
          <ImageLoader
            src="https://books.ello.com/static/media/summer-icon.bcf576872ef448e77ffe5178a9438f64.svg"
            alt="logo image"
            placeholder="https://via.placeholder.com/150"
          />

        </Box>
        <Typography variant='h6' component='h6' color='secondary'>{heading}</Typography>
        <Typography variant='body2' component='p'
          fontSize={16}
          color='secondary'>{description}</Typography>
      </Stack>
    </Grid>
  )
}
ScrollableGrid.EmptyComponent = EmptyComponent

export default ScrollableGrid