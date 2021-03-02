import axios, { AxiosResponse } from 'axios';
import { ProductModel } from '../models/product.interface';

const instance = axios.create({
	baseURL: 'http://localhost:5000/api/products',
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Product = {
	getProducts: (): Promise<ProductModel[]> => requests.get(''),

	getProduct: (id: number): Promise<ProductModel> => requests.get(`/${id}`),

	createProduct: (product: ProductModel): Promise<ProductModel> =>
		requests.post('products', product),

    updateProduct: (product: ProductModel, id: number): Promise<ProductModel> =>
		requests.put(`posts/${id}`, product),

	deleteProduct: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};