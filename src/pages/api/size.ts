import { NextApiRequest, NextApiResponse } from 'next';
import SteinStore from 'stein-js-client';

import { baseApiUrlExternal, sheetSize } from 'constants/common';
import { sortArrayObject, removeDuplicateObjectArray } from 'utils/common';

const store: any = new SteinStore(baseApiUrlExternal);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { limit, offset, size },
    body,
  } = req;
  let params: any = {};
  let payload: any = {};
  let search: any = {};
  let sizeBody: string = '';

  if (limit) {
    params = { ...params, limit: Number(limit) };
  }

  if (offset) {
    params = { ...params, offset: Number(offset) };
  }

  if (size) {
    search = { ...search, size: String(size) };
  }

  if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
    params = { ...params, search };
  }

  if (body?.size) {
    sizeBody = String(body.size);
    payload = { ...payload, size: sizeBody };
  }

  switch (method) {
    case 'GET':
      try {
        const result: any = await store.read(sheetSize, params);
        const data: any = removeDuplicateObjectArray(
          sortArrayObject(result, 'size'),
          'size',
        );
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
        if (sizeBody) {
          const data: any = await store.append(sheetSize, [payload]);
          res.status(200).json({
            message: data?.updatedRange
              ? 'Successfully added data'
              : 'No added data',
            isSuccess: !!data?.updatedRange,
            data,
          });
        } else {
          res
            .status(400)
            .json({ message: 'size body is required!', isSuccess: false });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'PUT':
      try {
        if (Object.keys(search).length === 0 && search.constructor === Object) {
          res
            .status(400)
            .json({ message: 'size params is required!', isSuccess: false });
        } else if (
          Object.keys(payload).length === 0
          && payload.constructor === Object
        ) {
          res
            .status(400)
            .json({ message: 'size body is required!', isSuccess: false });
        } else {
          const data: any = await store.edit(sheetSize, {
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
          res
            .status(400)
            .json({ message: 'size params is required!', isSuccess: false });
        } else if (
          Object.keys(payload).length === 0
          && payload.constructor === Object
        ) {
          res
            .status(400)
            .json({ message: 'size body is required!', isSuccess: false });
        } else {
          const data: any = await store.edit(sheetSize, {
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
        res
          .status(400)
          .json({ message: 'size params is required!', isSuccess: false });
      } else {
        try {
          const data: any = await store.delete(sheetSize, { search });
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
