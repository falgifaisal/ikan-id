import { baseApiUrlInternal, pathSize } from 'constants/common';

export async function fetchGetSize(params?: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathSize}${params}`);
  return res.json();
}

export async function fetchPostSize(payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathSize}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchPutSize(params: any, payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathSize}${params}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchPatchSize(params: any, payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathSize}${params}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchDeleteSize(params: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathSize}${params}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}
