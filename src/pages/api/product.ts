import { NextApiRequest, NextApiResponse } from 'next';
import SteinStore from 'stein-js-client';
import { v4 as uuidv4 } from 'uuid';

import { sheetProduct } from 'constants/common';
import { formatStringUcFirst } from 'utils/common';
import { formatDate } from 'utils/date';

const { BASE_API_URL_STEIN } = process.env;
const store: any = new SteinStore(BASE_API_URL_STEIN);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: {
      limit, offset, uuid, commodity, province, city, size, price,
    },
    body,
  } = req;
  let params: any = {};
  let payload: any = {
    tgl_parsed: formatDate('', "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
    timestamp: formatDate('', 't'),
  };
  let search: any = {};
  let commodityBody: string = '';
  let provinceBody: string = '';
  let cityBody: string = '';
  let sizeBody: string = '';
  let priceBody: string = '';

  if (limit) {
    params = { ...params, limit: Number(limit) };
  }

  if (offset) {
    params = { ...params, offset: Number(offset) };
  }

  if (uuid) {
    search = { ...search, uuid: String(uuid) };
  }

  if (commodity) {
    search = { ...search, komoditas: formatStringUcFirst(String(commodity)) };
  }

  if (province) {
    search = { ...search, area_provinsi: String(province).toUpperCase() };
  }

  if (city) {
    search = { ...search, area_kota: String(province).toUpperCase() };
  }

  if (size) {
    search = { ...search, size: String(size) };
  }

  if (price) {
    search = { ...search, price: String(size) };
  }

  if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
    params = { ...params, search };
  }

  if (body?.uuid) {
    delete body.uuid;
  }

  if (body?.commodity) {
    commodityBody = formatStringUcFirst(String(body.commodity));
    payload = { ...payload, komoditas: commodityBody };
  }

  if (body?.province) {
    provinceBody = String(body.province).toUpperCase();
    payload = { ...payload, area_provinsi: provinceBody };
  }

  if (body?.city) {
    cityBody = String(body.city).toUpperCase();
    payload = { ...payload, area_kota: cityBody };
  }

  if (body?.size) {
    sizeBody = String(body.size);
    payload = { ...payload, size: sizeBody };
  }

  if (body?.price) {
    priceBody = String(body.price);
    payload = { ...payload, price: priceBody };
  }

  switch (method) {
    case 'GET':
      try {
        const data: any = await store.read(sheetProduct, params);
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
        if (commodityBody) {
          payload = { ...payload, uuid: uuidv4() };
          const data: any = await store.append(sheetProduct, [payload]);
          res
            .status(200)
            .json({
              message: data?.updatedRange
                ? 'Successfully added data'
                : 'No added data',
              isSuccess: !!data?.updatedRange,
              data,
            });
        } else if (
          Object.keys(payload).length === 0
          && payload.constructor === Object
        ) {
          res
            .status(400)
            .json({
              message: 'body (commodity/province/city/size/price) is required!',
              isSuccess: false,
            });
        } else {
          res
            .status(400)
            .json({ message: 'commodity body is required!', isSuccess: false });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'PUT':
      try {
        if (search?.uuid) {
          const data: any = await store.edit(sheetProduct, {
            search,
            set: payload,
          });
          res
            .status(200)
            .json({
              message:
                data?.totalUpdatedRows > 0
                  ? 'Successfully updated data'
                  : 'No updated data',
              isSuccess: data?.totalUpdatedRows > 0,
              data,
            });
        } else if (
          Object.keys(payload).length === 0
          && payload.constructor === Object
        ) {
          res
            .status(400)
            .json({
              message: 'body (commodity/province/city/size/price) is required!',
              isSuccess: false,
            });
        } else {
          res
            .status(400)
            .json({ message: 'uuid params is required!', isSuccess: false });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'PATCH':
      try {
        if (search?.uuid) {
          const data: any = await store.edit(sheetProduct, {
            search,
            set: payload,
          });
          res
            .status(200)
            .json({
              message:
                data?.totalUpdatedRows > 0
                  ? 'Successfully updated data'
                  : 'No updated data',
              isSuccess: data?.totalUpdatedRows > 0,
              data,
            });
        } else if (
          Object.keys(payload).length === 0
          && payload.constructor === Object
        ) {
          res
            .status(400)
            .json({
              message: 'body (commodity/province/city/size/price) is required!',
              isSuccess: false,
            });
        } else {
          res
            .status(400)
            .json({ message: 'uuid params is required!', isSuccess: false });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
      }
      break;

    case 'DELETE':
      try {
        if (search?.uuid) {
          const data: any = await store.delete(sheetProduct, { search });
          res
            .status(200)
            .json({
              message:
                data?.totalUpdatedRows > 0
                  ? 'Successfully updated data'
                  : 'No updated data',
              isSuccess: data?.totalUpdatedRows > 0,
              data,
            });
        } else {
          res
            .status(400)
            .json({ message: 'uuid params is required!', isSuccess: false });
        }
      } catch (error) {
        res.status(500).json({ message: error, isSuccess: false });
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
