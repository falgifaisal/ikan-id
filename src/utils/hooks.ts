import { useQuery } from 'react-query';

import { fetchGetSize, fetchGetArea, fetchGetProduct } from './api';

export function useSizes(params?: any) {
  return useQuery<any, any>(['sizes', params], () => fetchGetSize(params));
}

export function useAreas(params?: any) {
  return useQuery<any, any>(['areas', params], () => fetchGetArea(params));
}

export function useProducts(params?: any) {
  return useQuery<any, any>(['products', params], () => fetchGetProduct(params));
}
