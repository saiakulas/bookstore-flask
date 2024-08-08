import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import '../App.css'; // Ensure this path is correct and CSS is loaded

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <div className="p-grid">
        {books.map(book => (
          <div className="p-col-12 p-md-4" key={book._id} style={{ marginBottom: '20px' }}>
            <Card title={book.title} subTitle={`by ${book.author}`} className="card">
              {book.image_url && (
                <img 
                  src={book.image_url} 
                  alt={`${book.title} cover`} 
                  style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} 
                />
              )}
              <p>
                {/* Add more book details here if needed */}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
