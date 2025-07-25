
import { Sanitize } from "./sanitize";
import { randomInt } from "crypto";

const sanitizeDrug = async (req: any, res: any, next: any) => {

    const body = await req.body;
    const random = randomInt(10, 16);
    const { name, observation } = await req.body;
    body['name'] = Sanitize.sanitizeString(name);
    body['observation'] = Sanitize.sanitizeString(observation);
    next()
};

export default sanitizeDrug;