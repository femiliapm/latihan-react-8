import { fetchApi } from "../config/api";

const API_URL_PROD = import.meta.env.VITE_API_URL_PROD;
const BASE_URL_API_DEV = import.meta.env.VITE_API_URL_DEV;

// get all products
export const getProducts = async () => {
  try {
    // const url = `${API_URL_PROD}/products`;
    const url = `${BASE_URL_API_DEV}/products`;
    const response = await fetchApi({ url, method: "GET" });

    // validasi kalau status error bukan success
    if (response.status !== 200) {
      const error = {
        status: true,
        message: "Error get data!",
      };
      return error;
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};

// get product by id
export const getProductsById = async (id) => {
  try {
    // const url = `${API_URL_PROD}/products?id=${id}`;
    const url = `${BASE_URL_API_DEV}/products?id=${id}`;
    const response = await fetchApi({ url, method: "GET" });

    // bisa dikasih validasi status response

    return response;
  } catch (error) {
    console.log(error);
  }
};

// save product
export const addProduct = async (data) => {
  try {
    const url = `${BASE_URL_API_DEV}/products`;
    const response = await fetchApi({ url, method: "POST", data });
    // handling exc dari status responsenya
    return response;
  } catch (error) {
    console.log(error);
  }
};

// update product
export const updateProduct = async (id, data) => {
  try {
    const url = `${BASE_URL_API_DEV}/products/${id}`;
    const response = await fetchApi({ url, method: "PUT", data });
    return response;
  } catch (error) {
    console.log(error);
  }
};
