
import { Sanitize } from "./sanitize";
import { Request, Response, NextFunction } from 'express';

const sanitizetimeDrug = async (req: Request, res: Response) => {

    const body = await req.body;

    const { time } = await req.body;


    if (body['time'] !== undefined) {
        body['time'] = Sanitize.sanitizeString(time);
    }

};

// const sanitizetimeDrug = async (req: Request, res: Response, next: NextFunction) => {

//     const body = await req.body;

//     const { time } = await req.body;


//     if (body['time'] !== undefined) {
//         body['time'] = Sanitize.sanitizeString(time);
//     }


//     next()
// };

export default sanitizetimeDrug;