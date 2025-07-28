
import { Sanitize } from "./sanitize";
import { randomInt } from "crypto";

const sanitizetimeDrug = async (req: any, res: any, next: any) => {

    const body = await req.body;

    const {  time } = await req.body;


    if (body['time'] !== undefined) {
        body['time'] = Sanitize.sanitizeString(time);
    }


    next()
};

export default sanitizetimeDrug;