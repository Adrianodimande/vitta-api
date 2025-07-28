
import { Sanitize } from "./sanitize";
import { randomInt } from "crypto";

const sanitizeDrug = async (req: any, res: any, next: any) => {

    const body = await req.body;
    const { user_id, name, date_start, date_end, observation } = await req.body;

    if (body['name'] !== undefined) {
        body['name'] = Sanitize.sanitizeString(name);
    }
    if (body['date_start'] !== undefined) {
        body['date_start'] = Sanitize.sanitizeString(date_start);
    }
        if (body['date_end'] !== undefined) {
        body['date_end'] = Sanitize.sanitizeString(date_end);
    }

    if (body['observation'] !== undefined) {
        body['observation'] = Sanitize.sanitizeString(observation);
    }

    next()
};

export default sanitizeDrug;