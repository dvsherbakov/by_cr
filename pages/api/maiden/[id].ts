import {NextApiRequest, NextApiResponse} from "next";
import {getTypeById, list, priceList} from '../helpers/test-list'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const maiden = list.filter((value)=>value.id===+id)[0]
    const types = getTypeById(maiden.maidenType) || 0
    const prices = maiden.priceId ? priceList[maiden.priceId] : [1000];
    res.end(JSON.stringify({maiden, types, prices}))
}