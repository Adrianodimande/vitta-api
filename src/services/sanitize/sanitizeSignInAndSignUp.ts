
import { hash } from "bcrypt";
import { Sanitize } from "./sanitize";
import { randomInt } from "crypto";
import { Request, Response, NextFunction } from 'express';
const sanitizeSignInAndSignUp = async (req: Request, res: Response, next: NextFunction) => {

    const body = await req.body;
    const random = randomInt(10, 16);
    const { name, password } = await req.body;
    body['name'] = Sanitize.sanitizeString(name);
    body['password'] = await hash(password, random);
    next()
};

export default sanitizeSignInAndSignUp;