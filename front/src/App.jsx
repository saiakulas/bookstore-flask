import React from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BooksList';
import './App.css'; // Ensure CSS is imported

function App() {
  return (
    <div className="app-container">
      <div className="add-book-container">
        <AddBook />
      </div>
      <BookList />
    </div>
  );
}

export default App;
