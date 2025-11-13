import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    description: "",
    published_year: "",
    publisher: "",
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/book", book)
      .then(() => navigate("/"))   // 👈 FIXED navigation
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-4">

      <div className="mb-3">
        <Link to="/" className="btn btn-secondary btn-sm">
          ← Back to List
        </Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="fw-bold mb-3">Add Book</h3>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label>ISBN</label>
              <input type="text" className="form-control" name="isbn"
                value={book.isbn} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Title</label>
              <input type="text" className="form-control" name="title"
                value={book.title} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Author</label>
              <input type="text" className="form-control" name="author"
                value={book.author} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Description</label>
              <textarea className="form-control" name="description"
                value={book.description} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Published Year</label>
              <input type="number" className="form-control" name="published_year"
                value={book.published_year} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label>Publisher</label>
              <input type="text" className="form-control" name="publisher"
                value={book.publisher} onChange={onChange} />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Create;
