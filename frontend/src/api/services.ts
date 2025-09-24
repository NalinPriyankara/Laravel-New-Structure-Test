import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

//Authors API
const AUTHORS_API = `${BASE_URL}/authors`;

export const createAuthor = async (data: any) => {
  const res = await axios.post(AUTHORS_API, data);
  return res.data;
};

export const getAuthors = async () => {
  const res = await axios.get(AUTHORS_API);
  return res.data;
};

export const getAuthor = async (id: number | string) => {
  const res = await axios.get(`${AUTHORS_API}/${id}`);
  return res.data;
};

export const updateAuthor = async (id: number | string, data: any) => {
  const res = await axios.put(`${AUTHORS_API}/${id}`, data);
  return res.data;
};

export const deleteAuthor = async (id: number | string) => {
  const res = await axios.delete(`${AUTHORS_API}/${id}`);
  return res.data;
};

//Books API
const BOOKS_API = `${BASE_URL}/books`;

export const createBook = async (data: any) => {
  const res = await axios.post(BOOKS_API, data);
  return res.data;
};

export const getBooks = async () => {
  const res = await axios.get(BOOKS_API);
  return res.data;
};

export const getBook = async (id: number | string) => {
  const res = await axios.get(`${BOOKS_API}/${id}`);
  return res.data;
};

export const updateBook = async (id: number | string, data: any) => {
  const res = await axios.put(`${BOOKS_API}/${id}`, data);
  return res.data;
};

export const deleteBook = async (id: number | string) => {
  const res = await axios.delete(`${BOOKS_API}/${id}`);
  return res.data;
};

//Reviews API
const REVIEWS_API = `${BASE_URL}/reviews`;

export const createReview = async (data: any) => {
  const res = await axios.post(REVIEWS_API, data);
  return res.data;
};

export const getReviews = async () => {
  const res = await axios.get(REVIEWS_API);
  return res.data;
};

export const getReview = async (id: number | string) => {
  const res = await axios.get(`${REVIEWS_API}/${id}`);
  return res.data;
};

export const updateReview = async (id: number | string, data: any) => {
  const res = await axios.put(`${REVIEWS_API}/${id}`, data);
  return res.data;
};

export const deleteReview = async (id: number | string) => {
  const res = await axios.delete(`${REVIEWS_API}/${id}`);
  return res.data;
};
