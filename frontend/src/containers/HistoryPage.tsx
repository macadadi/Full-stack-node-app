
import EOSearchInput from "components/EOSearchInput"
import ScrollableGrid from "components/ScrollableGrid";
import { CustomTabPanel } from "components/TabbedComponent"
import BookCard from "containers/BookCard";
import { appContext } from "context/Context";

import { useContext } from "react";

function HistoryPage({ value }: { value: number }) {
  const { items } = useContext(appContext)
  return (
    <CustomTabPanel value={value} index={1}>
      <EOSearchInput setSearch={() => { }} disabled />
      <ScrollableGrid >
        {items && items?.length < 1 && <ScrollableGrid.EmptyComponent heading="You don't have any favorite books"
          description='Please add books to your favorite list for them to appear here' />}

        {items?.map((book, index) => <BookCard
          key={`${index}-${book.title}`}
          book={book} />
        )}
      </ScrollableGrid>
    </CustomTabPanel>
  )
}

export default HistoryPage