import { Grid } from "@mui/material";
import EOSearchInput from "components/EOSearchInput"
import { CustomTabPanel } from "components/TabbedComponent"
import { BookCard } from "containers";
import { useState } from "react";


function HistoryPage({ value, items, addItem, removeItem }) {
  const [search, setSearch] = useState<string>('');
  return (
    <CustomTabPanel value={value} index={1}>
      <EOSearchInput setSearch={setSearch} />
      <Grid container spacing={2}>
        {items?.map((book, index) => <BookCard
          key={`${index}-${book.title}`}
          addItem={addItem}
          removeItem={removeItem}
          {...book} />
        )}
      </Grid>
    </CustomTabPanel>
  )
}

export default HistoryPage