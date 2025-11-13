import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    description: "",
    published_year: "",
    publisher: ""
  });

  useEffect(() => {
    axios.get(`/api/book/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const onChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios.put(`/api/book/${id}`, book)
      .then(() => navigate(`/show/${id}`))
      .catch(err => console.log(err));
  };

  return (
    <div className="container py-4">

      <div className="mb-3">
        <Link to={`/show/${id}`} className="btn btn-secondary btn-sm">← Back</Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="fw-bold mb-3">Edit Book</h3>

          <form onSubmit={onSubmit}>

            <div className="mb-3">
              <label>ISBN</label>
              <input type="text" name="isbn" className="form-control"
                value={book.isbn} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Title</label>
              <input type="text" name="title" className="form-control"
                value={book.title} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Author</label>
              <input type="text" name="author" className="form-control"
                value={book.author} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Description</label>
              <input type="text" name="description" className="form-control"
                value={book.description} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Published Year</label>
              <input type="number" name="published_year" className="form-control"
                value={book.published_year} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Publisher</label>
              <input type="text" name="publisher" className="form-control"
                value={book.publisher} onChange={onChange} />
            </div>

            <button type="submit" className="btn btn-primary w-100">Update Book</button>

          </form>
        </div>
      </div>

    </div>
  );
}

export default Edit;
