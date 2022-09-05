import type {NextApiRequest, NextApiResponse} from "next";
import {DtxCakeType} from "../../types/types";
import {cakes} from './helpers/cake-list'

export default async (req: NextApiRequest, res: NextApiResponse<DtxCakeType[]>)=>{
    if (req.method ==='GET'){
        res.status(200).json(cakes)
    }
}