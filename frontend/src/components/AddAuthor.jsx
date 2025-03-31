import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../queries";

const AddAuthor = () => {
  const [authorId, setAuthorId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [addAuthor, { loading, error }] = useMutation(ADD_AUTHOR);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authorId || !authorName) return alert("Please enter all fields!");

    try {
      await addAuthor({ variables: { id: authorId, name: authorName } });
      alert("Author added successfully!");
      setAuthorId("");
      setAuthorName("");
    } catch (err) {
      console.error("Error adding author:", err);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '300px' }}>
      <h2 style={{ marginBottom: '10px' }}>Add Author</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          placeholder="Author ID"
          required
          style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Author Name"
          required
          style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '8px 12px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {loading ? "Adding..." : "Add Author"}
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: '10px' }}>Error: {error.message}</p>}
    </div>
  );
};

export default AddAuthor;
