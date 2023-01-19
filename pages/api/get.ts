// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Episode } from '@types';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Episode[]>
) {
  const data = await axios.get(
    'https://www.learnwithjason.dev/api/v2/schedule'
  );
  res.json(data.data);
}
