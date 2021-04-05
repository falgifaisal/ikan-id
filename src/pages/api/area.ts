import { NextApiRequest, NextApiResponse } from 'next';
import SteinStore from 'stein-js-client';

import { baseApiUrlExternal, sheetArea } from 'constants/common';

const store: any = new SteinStore(baseApiUrlExternal);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: {
      limit, offset, province, city,
    },
    body,
  } = req;
  let params: any = {};
  let payload: any = {};
  let search: any = {};
  let provinceBody: string = '';
  let cityBody: string = '';

  if (limit) {
    params = { ...params, limit: Number(limit) };
  }

  if (offset) {
    params = { ...params, offset: Number(offset) };
  }

  if (province) {
    search = { ...search, province: String(province).toUpperCase() };
  }

  if (city) {
    search = { ...search, city: String(city).toUpperCase() };
  }

  if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
    params = { ...params, search };
  }

  if (body?.province) {
    provinceBody = String(body.province).toUpperCase();
    payload = { ...payload, province: provinceBody };
  }

  if (body?.city) {
    cityBody = String(body.city).toUpperCase();
    payload = { ...payload, city: cityBody };
  }

  switch (method) {
    case 'GET':
      try {
        const data: any = await store.read(sheetArea, params);
        res.status(200).json({
          message: data?.length > 0 ? 'Successfully retrieved data' : 'No data',
          isSuccess: data?.length > 0,
          count: data.length || 0,
          data,
        });
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'POST':
      try {
        if (provinceBody && cityBody) {
          const data: any = await store.append(sheetArea, [payload]);
          res.status(200).json({
            message: data?.updatedRange
              ? 'Successfully added data'
              : 'No added data',
            isSuccess: !!data?.updatedRange,
            data,
          });
        } else if (!provinceBody) {
          res
            .status(400)
            .json({ message: 'province body is required!', isSuccess: false });
        } else if (!cityBody) {
          res
            .status(400)
            .json({ message: 'city body is required!', isSuccess: false });
        } else {
          res.status(400).json({
            message: 'province & city body is required!',
            isSuccess: false,
          });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'PUT':
      try {
        if (Object.keys(search).length === 0 && search.constructor === Object) {
          res.status(400).json({
            message: 'province or city params is required!',
            isSuccess: false,
          });
        } else if (
          Object.keys(payload).length === 0
          && payload.constructor === Object
        ) {
          res.status(400).json({
            message: 'province or city body is required!',
            isSuccess: false,
          });
        } else {
          const data: any = await store.edit(sheetArea, {
            search,
            set: payload,
          });
          res.status(200).json({
            message:
              data?.totalUpdatedRows > 0
                ? 'Successfully updated data'
                : 'No updated data',
            isSuccess: data?.totalUpdatedRows > 0,
            data,
          });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'PATCH':
      try {
        if (Object.keys(search).length === 0 && search.constructor === Object) {
          res.status(400).json({
            message: 'province or city params is required!',
            isSuccess: false,
          });
        } else if (
          Object.keys(payload).length === 0
          && payload.constructor === Object
        ) {
          res.status(400).json({
            message: 'province or city body is required!',
            isSuccess: false,
          });
        } else {
          const data: any = await store.edit(sheetArea, {
            search,
            set: payload,
          });
          res.status(200).json({
            message:
              data?.totalUpdatedRows > 0
                ? 'Successfully updated data'
                : 'No updated data',
            isSuccess: data?.totalUpdatedRows > 0,
            data,
          });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'DELETE':
      if (Object.keys(search).length === 0 && search.constructor === Object) {
        res.status(400).json({
          message: 'province or city params is required!',
          isSuccess: false,
        });
      } else {
        try {
          const data: any = await store.delete(sheetArea, { search });
          res.status(200).json({
            message:
              data?.clearedRowsCount > 0
                ? 'Successfully deleted data'
                : 'No deleted data',
            isSuccess: data?.clearedRowsCount > 0,
            data,
          });
        } catch (error) {
          res.status(500).json({ message: error, isSuccess: false });
        }
      }
      break;

    default:
      res
        .status(405)
        .json({ message: `Method ${method} not allowed`, isSuccess: false });
      break;
  }
};

export default handler;
