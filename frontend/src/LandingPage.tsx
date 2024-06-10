
import { useFilterBooks } from 'api/queries';
import EOSearchInput from 'components/EOSearchInput'
import ScrollableGrid from 'components/ScrollableGrid';
import { CustomTabPanel } from 'components/TabbedComponent'
import { BookCard } from 'containers';
import { useState } from 'react';

function LandingPage({ value }: { value: number }) {
  const [search, setSearch] = useState<string>('');
  const { loading, error, data } = useFilterBooks(search);

  if (error) return <p>Error : occurred</p>;
  return (
    <CustomTabPanel value={value} index={0}
      height={'100%'}>
      <EOSearchInput setSearch={setSearch} />

      <ScrollableGrid isLoading={loading}>
        {data && data?.length < 1 && <ScrollableGrid.EmptyComponent heading="No book matching your search criteria was found."
          description='Please try entering a valid search or check back in later' />}

        {data?.map((book, index) => <BookCard
          key={`${index}-${book.title}`}
          {...book} />
        )}
      </ScrollableGrid>
    </CustomTabPanel>
  )
}

export default LandingPage