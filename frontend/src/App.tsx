import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthorList from "./pages/Authors/AuthorList";
import AddAuthor from "./pages/Authors/AddAuthor";
import EditAuthor from "./pages/Authors/EditAuthor";
import BooksList from "./pages/Books/BooksList";
import AddBook from "./pages/Books/AddBook";
import EditBook from "./pages/Books/EditBook";
import ReviewsList from "./pages/Reviews/ReviewsList";
import AddReview from "./pages/Reviews/AddReview";
import EditReview from "./pages/Reviews/EditReview";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/authors">Authors</Link> | 
        <Link to="/books">Books</Link> | 
        <Link to="/reviews">Reviews</Link>
      </nav>
      <Routes>
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/add" element={<AddAuthor />} />
        <Route path="/authors/edit/:id" element={<EditAuthor />} />

        <Route path="/books" element={<BooksList />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />

        <Route path="/reviews" element={<ReviewsList />} />
        <Route path="/reviews/add" element={<AddReview />} />
        <Route path="/reviews/edit/:id" element={<EditReview />} />


      </Routes>
    </Router>
  );
}

export default App;
