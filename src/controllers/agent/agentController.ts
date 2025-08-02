import { HttpResponse } from "../../server/httpResponse";
import { AgentIa } from "../../services/agent/agentIa";
import { IAgentIa } from "../../services/agent/interface/iAgenteIa";
import { SERVER_ERROR500 } from "../../settings/constants/constCrud";
import { STATUS500 } from "../../settings/constants/constStatusCode";
import { Request, Response } from 'express';
export class AgentController {


    constructor(protected readonly agentIa: IAgentIa) { }


    async register(res: Response, message: string) {
        try {
            var response = await this.agentIa.successRegister(message);
            return response;
            ;
        } catch (error) {

            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }
    }
}