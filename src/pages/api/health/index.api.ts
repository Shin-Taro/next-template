import type { NextApiResponse } from "next"

type ResponseData = {
  status: string
}

const statusCode = 200

const handler = (_: never, res: NextApiResponse<ResponseData>) => {
  res.status(statusCode).json({ status: "ok" })
}

export default handler
