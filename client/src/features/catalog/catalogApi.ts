import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { ProductParams } from "../../app/models/productParams";

export const catalogApi = createApi({

    reducerPath: 'catalogApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts:builder.query<Product[], ProductParams>( {   
            query: (productParams) => {
                return{
                     url: 'products',
                     params: productParams
                }
               } 
            }
        ),
        fetchProductDetails: builder.query<Product, number>({
            query: (productId) => `products/${productId}`
        }),
        fetchFilters: builder.query<{brands: string[], types: string[]}, void>({
            query:() => 'products/filters'
        })
    })


});

export const {useFetchProductDetailsQuery, useFetchProductsQuery, useFetchFiltersQuery} = catalogApi;