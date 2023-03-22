// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as addressData from '@/addressData.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  res.status(200).json(addressData);
}
