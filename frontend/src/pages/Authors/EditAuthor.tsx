import React, { useEffect, useState } from "react";
import { getAuthor, updateAuthor } from "../../api/services";
import { useNavigate, useParams } from "react-router-dom";

const EditAuthor: React.FC = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "", bio: "" });
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getAuthor(Number(id));
    setForm(res);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateAuthor(Number(id), form);
    navigate("/authors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Author</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <textarea placeholder="Bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })}></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditAuthor;
