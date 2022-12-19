import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send("Servidor funcionando");
});

router.post("/cidades", CidadesController.createBodyValidator,CidadesController.create);
export { router };
