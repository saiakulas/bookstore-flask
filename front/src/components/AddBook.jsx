import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:5000/books', { name, author })
      .then(response => {
        alert(response.data.status);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <input
        type="text"
        placeholder="Book Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
}

export default AddBook;
