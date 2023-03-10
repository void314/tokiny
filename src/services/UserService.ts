import { IUser } from "@/models/IUser"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], number>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    _limit: limit
                }
            })
        })
    })
})