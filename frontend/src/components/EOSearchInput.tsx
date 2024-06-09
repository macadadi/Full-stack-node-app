
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useGetBooks } from 'api/queries';
import { CircularProgress } from '@mui/material';
import { useDebounce } from '../utils/useDebounce';
import { Dispatch, Fragment, SetStateAction, useEffect, useMemo, useState } from 'react';

export default function EOSearchInput({ setSearch }: { setSearch: Dispatch<SetStateAction<string>> }) {
  const { data, loading } = useGetBooks()
  const [valueTest, setValueTest] = useState('')
  const options = useMemo(() => data?.books, [data])
  const debouncedSearch = useDebounce<string>(valueTest)

  useEffect(() => {
    setSearch(debouncedSearch)
  }, [debouncedSearch])
  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.title}
      options={options || []}
      loading={loading}
      onInputChange={(_, newInputValue) => {
        setValueTest(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
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
  );
}
