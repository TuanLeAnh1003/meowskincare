import axiosInstance from "./axiosInstance";

const getAll = async () => {
  return await axiosInstance.get('/news/')
}

const getNewsById = async (data) => {
  return await axiosInstance.get(`/news/id/${data.newsId}`)
}

const createNews = async (data) => {
  return await axiosInstance.post('/news', data)
}

const removeNews = async (data) => {
  return await axiosInstance.delete(`/news/${data.newsId}`)
}

const updateNews = async (data) => {
  return await axiosInstance.put('/news', data)
}

export default {
  getAll,
  getNewsById,
  createNews,
  removeNews,
  updateNews,
}