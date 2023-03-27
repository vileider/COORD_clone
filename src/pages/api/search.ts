import type { NextApiRequest, NextApiResponse } from 'next';

const validatingJson = (value: JSON) => {
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
  res: NextApiResponse<JSON>
) {
  //this will be deleted
  const delayResponse = () => {
    return new Promise<JSON>((resolve) => {
      setTimeout(() => {
        resolve([{ "exmpleJSON": 'true' }])
      }, 2000);
    });
  };

  const resolve = await delayResponse();
  try {
    if (validatingJson(resolve)) {
      res.status(200).json(resolve);
    } else {
      res.status(200).json([{ "results": "not available" }]);}
  } catch (err) {
    res.status(500).json([{ "results": err }]);
  }
}
