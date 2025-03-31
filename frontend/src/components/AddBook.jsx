import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_BOOK, GET_BOOKS } from "../queries.js";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");

  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ variables: { id: Date.now().toString(), title, authorId } });
    setTitle("");
    setAuthorId("");
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '300px' }}>
      <h2 style={{ marginBottom: '10px' }}>Add Book</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
        <input value={authorId} onChange={(e) => setAuthorId(e.target.value)} placeholder="Author ID" style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
        <button type="submit" style={{ padding: '8px 12px', background: '#008CBA', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
