
import { Sanitize } from "./sanitize";
import { randomInt } from "crypto";

const sanitizeDose = async (req: any, res: any, next: any) => {

    const body = await req.body;
    const { date, time, status } = await req.body;

    if (body['date'] !== undefined) {
        body['date'] = Sanitize.sanitizeString(date);
    }
    if (body['time'] !== undefined) {
        body['time'] = Sanitize.sanitizeString(time);
    }

    if (body['status'] !== undefined) {
        body['status'] = Sanitize.sanitizeString(status);
    }

    next()
};

export default sanitizeDose;