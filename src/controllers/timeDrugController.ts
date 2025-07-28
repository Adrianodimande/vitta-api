import { STATUS200, STATUS201, STATUS400, STATUS401, STATUS404, STATUS409, STATUS500 } from "../settings/constants/constStatusCode";
import { CREATE_CONFLICT409, CREATE_SUCCESS201, DELETE_NOT_FOUND404, DELETE_SUCCESS200, READ_SUCCESS200, SERVER_ERROR500, UPDATE_NOT_FOUND404, UPDATE_SUCCESS200 } from "../settings/constants/constCrud";
import { HttpResponse } from "../server/httpResponse";
import { Request, Response } from "express";
import { TimeDrugRepository } from "../repository/timeDrugRepository";
export class TimeDrugController extends TimeDrugRepository {

    async timeDrugRead(req: Request, res: Response) {
        try {


            const data = await this.readTimeDrug();
            res.status(STATUS200).json(new HttpResponse(STATUS200, false, READ_SUCCESS200, data));


        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }
    async timeDrugRegister(req: Request, res: Response) {
        try {
          
            await this.createTimeDrug(req.body);
            res.status(STATUS201).json(new HttpResponse(STATUS201, false, CREATE_SUCCESS201, []));


        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }

    async timeDrugUpdate(req: Request, res: Response) {
        try {

            const findTimeDrug = await this.findIdTimeDrug(Number(req.params.id));

            if (!findTimeDrug) {
                return res.status(STATUS404).json(new HttpResponse(STATUS404, true, UPDATE_NOT_FOUND404, []));
            }
            // console.log(typeof findTimeDrug)

            await this.updateTimeDrug(Number(req.params.id), req.body);
            res.status(STATUS200).json(new HttpResponse(STATUS200, false, UPDATE_SUCCESS200, []));

        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }

    async timeDrugDelete(req: Request, res: Response) {
        try {

            const findTimeDrug = await this.findIdTimeDrug(Number(req.params.id));
            if (!findTimeDrug) {
                return res.status(STATUS404).json(new HttpResponse(STATUS404, true, DELETE_NOT_FOUND404, []));
            }

            await this.deleteTimeDrug(Number(req.params.id));
            res.status(STATUS200).json(new HttpResponse(STATUS200, false, DELETE_SUCCESS200, []));

        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }
}