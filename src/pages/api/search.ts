import type { NextApiRequest, NextApiResponse } from 'next';

const isJSON = (value: object) => {
  if (value != null && typeof value != 'string') {
    const valueS: string = JSON.stringify(value);
    try {
      JSON.parse(valueS);
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  //this will be deleted
  const delayResponse = () => {
    return new Promise<object>((resolve) => {
      setTimeout(() => {
        resolve({ exmpleJSON: 'true' });
      }, 2000);
    });
  };

  const resolve = await delayResponse();

  if (req.method === 'POST') {
    res.status(200).json(req.body);
  } else if (req.method === 'GET') {
    try {
      if (isJSON(resolve)) {
        res.status(200).json(resolve);
      } else {
        res.status(200).json({ results: 'not available' });
      }
    } catch (err) {
      res.status(500).json({ results: 'err ' });
    }
  }
}
