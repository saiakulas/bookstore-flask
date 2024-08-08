import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../App.css'; // Correct path to App.css

function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:5000/books', { name, author, image_url: imageUrl })
      .then(response => {
        alert(response.data.status);
        setName('');
        setAuthor('');
        setImageUrl('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="name">Book Name</label>
          <InputText
            id="name"
            placeholder="Book Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <div className="p-field">
          <label htmlFor="author">Author</label>
          <InputText
            id="author"
            placeholder="Author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <div className="p-field">
          <label htmlFor="imageUrl">Image URL</label>
          <InputText
            id="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <Button label="Add Book" icon="pi pi-plus" onClick={handleSubmit} style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default AddBook;
