import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandling } from '../../app/api/baseApi';
import type { Basket } from '../../app/models/basket';

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['Basket'],
  endpoints: (builder) => ({
    fetchBasket: builder.query<Basket, void>({
      query: () => 'basket',
      providesTags: ['Basket']
    }),
    addBasketItem: builder.mutation<Basket, { productId: number; quantity: number }>({
      query: ({ productId, quantity }) => ({
        url: `basket?productId=${productId}&quantity=${quantity}`,
        method: 'POST'
      }),

    }),
    removeBasketItem: builder.mutation<void, { productId: number; quantity: number }>({
      query: ({ productId, quantity }) => ({
        url: `basket?productId=${productId}&quantity=${quantity}`,
        method: 'DELETE'
      }),

    })
  })
});

// ✅ Correct way to export hooks
export const {
  useFetchBasketQuery,
  useAddBasketItemMutation,
  useRemoveBasketItemMutation
} = basketApi;
