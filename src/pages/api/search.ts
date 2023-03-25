import type { NextApiRequest, NextApiResponse } from 'next';

const validatingJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  //this will be deleted
  const delayResponse = () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('{"results":"available"}');
      }, 2000);
    });
  };

  const results = await delayResponse();

  if (validatingJson(results)) {
    try {
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json('{ "results": "error" }');
    }
  } else res.status(200).json('{ results: "not available" }');
}
