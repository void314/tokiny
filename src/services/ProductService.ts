import { IProduct } from "@/models/IProduct"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Poroducts'],
    endpoints: (build) => ({
        fetchProducts: build.query<IProduct[], number>({
            query: (limit: number = 10) => ({
                url: '/products',
                method: 'GET',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Poroducts']
        }),
        createProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Poroducts']
        }),
        updateProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: ['Poroducts']
        }),
        deleteProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Poroducts']
        })
    })
})