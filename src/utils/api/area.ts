import { baseApiUrlInternal, pathArea } from 'constants/common';

export async function fetchGetArea(params?: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathArea}${params}`);
  return res.json();
}

export async function fetchPostArea(payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathArea}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchPutArea(params: any, payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathArea}${params}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchPatchArea(params: any, payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathArea}${params}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchDeleteArea(params: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathArea}${params}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}
