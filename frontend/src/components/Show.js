import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Show() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`/api/book/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const deleteBook = () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      axios.delete(`/api/book/${id}`)
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container py-4">

      <div className="mb-3">
        <Link to="/" className="btn btn-secondary btn-sm">← Back to List</Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">

          <h3 className="fw-bold mb-3">{book.title}</h3>

          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Published Year:</strong> {book.published_year}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>

          <div className="mt-4">
            <Link to={`/edit/${book._id}`} className="btn btn-warning me-2">✏ Edit</Link>
            <button onClick={deleteBook} className="btn btn-danger">🗑 Delete</button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Show;
