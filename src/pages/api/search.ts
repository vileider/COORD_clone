import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  res.end('hello from search nedpoint');
}
