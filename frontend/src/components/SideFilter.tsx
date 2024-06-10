import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { SideFilterProps } from 'types'


function SideFilter({ name, grade }: SideFilterProps) {
  return (
    <Paper sx={{
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      background: grade === 1 ? '#CFFAFA' : ''
    }}
      elevation={3}>
      <Stack alignItems={'center'} display={'flex'} flexDirection={'row'}
        width={'fit-content'}
        py={1}
      >
        <Avatar sx={{ mr: 2 }}
          src={`../../assets/image${grade}.webp`} />
        <Typography>
          {name}
        </Typography>
      </Stack>
    </Paper>
  )
}

export default SideFilter