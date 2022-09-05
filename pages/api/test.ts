import {NextApiRequest, NextApiResponse} from "next";


export default (req: NextApiRequest, res: NextApiResponse) => {
    const PORT = process.env.PORT || 3000;
    res.status(200).json({ portMessage: `Server is listening on port ${PORT}...` })
}
