// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs';
import packageJson from '../../package.json';

type Data = {
  name: string;
  version: string;
};

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  const { name, version } = packageJson;
  res.status(200).json({
    name,
    version
  });
}

export default withSentry(handler);
