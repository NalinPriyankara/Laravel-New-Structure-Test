import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAuthor, getAuthors } from "../../api/services";

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    const res = await getAuthors();
    setAuthors(res.data);
  };

  const handleDelete = async (id: number) => {
    await deleteAuthor(id);
    loadAuthors();
  };

  return (
    <div>
      <h2>Authors</h2>
      <button onClick={() => navigate("/authors/add")}>Add New Author</button>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Bio</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.bio}</td>
              <td>
                <button onClick={() => navigate(`/authors/edit/${a.id}`)}>Edit</button>
                <button onClick={() => handleDelete(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
