import type { NextApiRequest, NextApiResponse } from 'next';
import testadress from '@/testadress.json';
import { throwMeArrOfObjContaningGivenString, isJSON } from './search.helpers';
import { validateGivenValueToSearchFormat } from './search.helpers';

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

  const getMethodConditioning = () => {
    if (isJSON(resolve)) {
      return res.status(200).json(resolve);
    } else {
      return res.status(200).json({ results: 'not available' });
    }
  };

  try {
    if (req.method === 'POST') {
      const responseRelatedToGivenString = throwMeArrOfObjContaningGivenString(
        testadress,
        validateGivenValueToSearchFormat(req.body)
      );
      res.status(200).json(responseRelatedToGivenString);
    } else if (req.method === 'GET') {
      getMethodConditioning();
    } else {
      res.status(500).json({ results: 'wrong method' });
    }
  } catch (err) {
    res.status(500).json({ results: 'err' });
  }
}
