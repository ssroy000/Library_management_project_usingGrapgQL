import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries.js";

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Books List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.books.map((book) => (
          <li key={book.id} style={{ borderBottom: '1px solid #eee', padding: '10px' }}>
            {book.title} - {book.author?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
