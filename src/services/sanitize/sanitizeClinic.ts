
import { hash } from "bcrypt";
import { Sanitize } from "./sanitize";
import { randomInt } from "crypto";

const sanitizeClinic = async (req: any, res: any, next: any) => {

    const body = await req.body;
    const random = randomInt(10, 16);
    const { name, address, phone, email } = await req.body;
    body['name'] = Sanitize.sanitizeString(name);
    body['address'] = Sanitize.sanitizeString(address);
    next()
};

export default sanitizeClinic;