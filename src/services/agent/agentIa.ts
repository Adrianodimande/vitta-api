import { role } from "../../generated/prisma";
import { CONTENT_TYPE, PROMPT_APP, URL_OPEN_ROUTER } from "../../settings/settings";
import dotenv from 'dotenv';
import { IOpenRouterResponse } from "./IOpenRouterResponse";
import { IAgentIa } from "./interface/iAgenteIa";

dotenv.config();



export class AgentIa implements IAgentIa {


    private headers = {
        Authorization: `Bearer ` + process.env.API_KEY_OPENROUTER,
        "Content-Type": CONTENT_TYPE,

    }

    async successRegister(value: string): Promise<string> {
        var resposta = await fetch(URL_OPEN_ROUTER, {
            method: 'POST',
            headers: this.headers, body: JSON.stringify({
                model: process.env.MODEL_AI,
                messages: [
                    {
                        role: 'system',
                        content: PROMPT_APP

                    },
                    {
                        role: 'user',
                        content: `O paciente acabou de cadastrar ${value} com sucesso. Envie uma frase de motivação com no máximo 30 caracteres.`
                    }
                ]
            })
        })

        const message = await resposta.json() as IOpenRouterResponse;

 
        return JSON.stringify(message.choices[0].message.content);
    }
}