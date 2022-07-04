// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
interface ResponseJson {
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseJson>) {
  res.status(200).json({ name: 'John Doe' })
}
