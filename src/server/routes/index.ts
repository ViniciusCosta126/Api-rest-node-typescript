import { Router, Request, Response } from "express";
import {StatusCodes} from 'http-status-codes'
const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send("Servidor funcionando");
});

export { router };
