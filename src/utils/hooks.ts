import { useQuery, useMutation } from 'react-query';

import {
  fetchGetSize,
  fetchGetArea,
  fetchGetProduct,
  fetchPostProduct,
  fetchPatchProduct,
  fetchDeleteProduct,
} from './api';

export function useQuerySizes(params?: any) {
  return useQuery<any, any>(['sizes', params], () => fetchGetSize(params));
}

export function useQueryAreas(params?: any) {
  return useQuery<any, any>(['areas', params], () => fetchGetArea(params));
}

export function useQueryProducts(params?: any) {
  return useQuery<any, any>(['products', params], () => fetchGetProduct(params));
}

export function usePostProducts(payloads?: any) {
  return useMutation(() => fetchPostProduct(payloads));
}

export function useUpdateProducts(paramsPayloads?: any) {
  return useMutation(() => fetchPatchProduct(paramsPayloads.params, paramsPayloads.payloads));
}

export function useDeleteProducts(params?: any) {
  return useMutation(() => fetchDeleteProduct(params));
}
