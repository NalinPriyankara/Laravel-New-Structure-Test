import React, { useEffect, useState } from "react";
import { getReviews, deleteReview } from "../../api/services";
import { useNavigate } from "react-router-dom";

const ReviewsList: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const data = await getReviews();
    setReviews(data);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure?")) {
      await deleteReview(id);
      loadReviews();
    }
  };

  return (
    <div>
      <h1>Reviews</h1>
      <button onClick={() => navigate("/reviews/add")}>Add New Review</button>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Reviewer</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.book?.title}</td>
              <td>{r.reviewer}</td>
              <td>{r.rating}</td>
              <td>{r.comment}</td>
              <td>
                <button onClick={() => navigate(`/reviews/edit/${r.id}`)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(r.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsList;
