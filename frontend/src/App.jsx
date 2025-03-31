import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Library System</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <AddBook />
          <AddAuthor />
        </div>
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;

