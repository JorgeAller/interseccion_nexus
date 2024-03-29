import { QueryOptions, useQuery } from "react-query";
import { axiosPrivateInstance } from "./axios";
import { retryFunction, unwrapAxiosResponse } from "./common";
import { createPathWithParams } from "../utils/createPathWithParams";

const BASE_URL_BBDD = 'http://localhost:4000'


export const useGetUserByIdQuery: any= (queryOptions: any, queryParams: any) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/users'],
        queryFn: () => axiosPrivateInstance
            .get(createPathWithParams({path: `${BASE_URL_BBDD}/users/id/`, params: queryParams}))
            .then(unwrapAxiosResponse),
        retry: (failureCount: any, error: any) => retryFunction(failureCount, error)
    });


export const useGetUserInfoQuery = (queryOptions: QueryOptions) => 
    useQuery({
        ...queryOptions, 
        queryKey: ['/me'],
        queryFn: () => axiosPrivateInstance
            .get(`${BASE_URL_BBDD}/users/me`)
            .then(unwrapAxiosResponse),
        retry: (failureCount: any, error: any) => retryFunction(failureCount, error),
    })
