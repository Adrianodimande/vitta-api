import { response } from "express";
import { HttpResponse } from "../server/httpResponse";
import { RepositorySignInAndSignUp } from "../repository/repositorySignInAndSignUp";
import { STATUS200, STATUS201, STATUS400, STATUS401, STATUS409, STATUS500 } from "../settings/constants/constStatusCode";
import { CREATE_CONFLICT409, CREATE_SUCCESS201, READ_SUCCESS200, SERVER_ERROR500 } from "../settings/constants/constCrud";
import bcrypt from "bcrypt";
import { INVALIDCREDENTIALS401 } from "../settings/constants/constSignInAndSignUp";
import { Auth } from "../middleware/auth";
import { Request, Response } from "express";
export class AuthController extends RepositorySignInAndSignUp {





    async signUp(req: Request, res: Response) {


        try {

            const findUser = await this.findUser(req.body.email);

            if (findUser) {
                return res.status(STATUS409).json(new HttpResponse(STATUS409, true, CREATE_CONFLICT409, []));
            }


            await this.createUser(req.body);
            res.status(STATUS201).json(new HttpResponse(STATUS201, false, CREATE_SUCCESS201, []));

        } catch (error) {
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }


    }

    async signIn(req: Request, res: Response) {

        const { email, password } = req.body;
        try {
            const findUser = await this.findUser(email);

            if (findUser) {
                const validation = await bcrypt.compare(password, findUser.password);
                if (!validation) {
                    return res.status(STATUS401).json(new HttpResponse(STATUS401, false, INVALIDCREDENTIALS401, []));
                }
            }
            const token = await Auth.generateToken(req.body);

            res.status(STATUS200).json(new HttpResponse(STATUS200, false, READ_SUCCESS200, token));
        } catch (error) {
            console.log('error');
            res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
        }


    }
}