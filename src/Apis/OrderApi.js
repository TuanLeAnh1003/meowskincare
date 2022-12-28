import axiosInstance from "./axiosInstance";

const getOrderByDateAndUserId = async (data) => {
  return await axiosInstance.get("orders/getOrderByDate", data)
}

const placeOrder = async (data) => {
  return await axiosInstance.post("api/v1/orders", data);
}

const getOrderAndUser = async (data) => {
  return await axiosInstance.get('/orders/getOrderAndUser', data)
}

export default {
  getOrderByDateAndUserId,
  placeOrder,
  getOrderAndUser,
}