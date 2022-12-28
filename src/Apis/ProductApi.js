import axiosInstance from "./axiosInstance";

const getAll = async (data) => {
  if (data)
    return await axiosInstance.get(`/products?page=${data.page}`)
  else return await axiosInstance.get('/products')
}

const getProductById = async (data) => {
  return await axiosInstance.get(`/products/id/${data.productId}`)
}

const createProduct = async (data) => {
  return await axiosInstance.post('/products', data)
}

const updateProduct = async (data) => {
  return await axiosInstance.put('/products', data)
}

const removeProduct = async (data) => {
  return await axiosInstance.delete(`/products/${data.productId}`)
}

const getProducts = async (data) => {
  return await axiosInstance.get(`/products?name=${data}`)
}

const filter = async(data) => {
  console.log(data);
  return await axiosInstance.post('/products/filter', data)
}

const getDiscountProduct = async() => {
  return await axiosInstance.get('/products/discount')
}

export default {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct,
  getProducts,
  filter,
  getDiscountProduct,
}