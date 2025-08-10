
import { hash } from "bcrypt";
import { Sanitize } from "./sanitize";
import { randomInt } from "crypto";
import { Request, Response, NextFunction } from 'express';
const sanitizeClinic = async (req: Request, res: Response, next: NextFunction) => {

    const body = await req.body;
    const { name, address, phone, email } = await req.body;
    body['name'] = Sanitize.sanitizeString(name);
    body['address'] = Sanitize.sanitizeString(address);
    next()
};

export default sanitizeClinic;