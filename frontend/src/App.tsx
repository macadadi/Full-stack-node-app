
import './App.css'
import { useQuery, gql } from '@apollo/client';


const GET_BOOKS = gql`
query ExampleQuery{
  books{
    author
    title
    readingLevel
  }
}
`;
function App() {

  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : occurred</p>;
  console.log(data, 'Hello Data')
  return (
    <>
      <text>Our react application </text>
    </>
  )
}

export default App
