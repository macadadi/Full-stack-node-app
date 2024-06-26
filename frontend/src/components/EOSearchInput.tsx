
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetBooks } from 'api/queries';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { EOSearchInputProps } from 'types';
import { useDebounce } from 'utils/hooks/useDebounce';

export default function EOSearchInput({ setSearch, disabled }: EOSearchInputProps) {
  const { data, loading } = useGetBooks()
  const [valueTest, setValueTest] = useState('')
  const options = useMemo(() => data?.books, [data])
  const debouncedSearch = useDebounce<string>(valueTest)

  useEffect(() => {
    setSearch(debouncedSearch)
  }, [debouncedSearch])
  return (
    <Stack sx={{ alignItems: 'center' }}
    >
      <Autocomplete
        id="asynchronous-demo"
        freeSolo
        sx={{
          width: {
            xs: '100%',
            md: '70%',
            lg: '60%',
            xl: '50%',
          },
        }}
        disabled={disabled}
        getOptionLabel={(option) => typeof option === 'string' ? option : option.title}
        options={options || []}
        loading={loading}
        onInputChange={(_, newInputValue) => {
          setValueTest(newInputValue);
        }}
        renderOption={(props, option) => (
          <li {...props} key={`${option.title}-${option.author}`}>
            {option.title}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search By Book Title"
            InputProps={{
              ...params.InputProps,
              sx: { borderRadius: 40 },
              endAdornment: (
                <Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
}
