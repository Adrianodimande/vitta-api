import { STATUS200, STATUS201, STATUS400, STATUS401, STATUS404, STATUS409, STATUS500 } from "../settings/constants/constStatusCode";
import { CREATE_CONFLICT409, CREATE_SUCCESS201, DELETE_NOT_FOUND404, DELETE_SUCCESS200, READ_SUCCESS200, SERVER_ERROR500, UPDATE_NOT_FOUND404, UPDATE_SUCCESS200 } from "../settings/constants/constCrud";
import { HttpResponse } from "../server/httpResponse";
import { Request, Response } from "express";
import { DrugRepository } from "../repository/drugRepository";
import { AgentIa } from "../services/agent/agentIa";
import { AgentController } from "./agent/agentController";
import { IDrugRepository } from "../repository/interfaces/iDrugRepository";
import { register } from "module";
export class DrugController {


    constructor(private readonly drugRepository: IDrugRepository, private readonly agentController: AgentController) { }
    async DrugRead(req: Request, res: Response) {
        try {


            const data = await this.drugRepository.readDrug();
            res.status(STATUS200).json(new HttpResponse(STATUS200, false, READ_SUCCESS200, data));


        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }


    async DrugReadByUserId(req: Request, res: Response) {
        try {


            const data = await this.drugRepository.readDrugByUserId(Number(req.params.id));


            res.status(STATUS200).json(new HttpResponse(STATUS200, false, READ_SUCCESS200, data));


        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }

    async drugRegister(req: Request, res: Response) {
        try {
            const findDrug = await this.drugRepository.findDrug(req.body.name);

            if (findDrug) {
                return res.status(STATUS409).json(new HttpResponse(STATUS409, true, CREATE_CONFLICT409, []));
            }
            var data = await this.drugRepository.createDrug(req.body);
            await this.agentController.register(res, 'Medicamento');
            const message = await this.agentController.register(res, 'Medicamento');

            res.status(STATUS201).json(new HttpResponse(STATUS201, false, message!, data));

        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }

    async drugUpdate(req: Request, res: Response) {
        try {

            const findDrug = await this.drugRepository.findIdDrug(Number(req.params.id));

            if (!findDrug) {
                return res.status(STATUS404).json(new HttpResponse(STATUS404, true, UPDATE_NOT_FOUND404, []));
            }
            // console.log(typeof findDrug)

            await this.drugRepository.updateDrug(Number(req.params.id), req.body);
            res.status(STATUS200).json(new HttpResponse(STATUS200, false, UPDATE_SUCCESS200, []));

        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }

    async drugDelete(req: Request, res: Response) {
        try {

            const findDrug = await this.drugRepository.findIdDrug(Number(req.params.id));
            if (!findDrug) {
                return res.status(STATUS404).json(new HttpResponse(STATUS404, true, DELETE_NOT_FOUND404, []));
            }

            await this.drugRepository.deleteDrug(Number(req.params.id));
            res.status(STATUS200).json(new HttpResponse(STATUS200, false, DELETE_SUCCESS200, []));

        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }

    }
}