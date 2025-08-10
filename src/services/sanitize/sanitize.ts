import { Request, Response } from "express";

export class Sanitize {
    static sanitizeString(input: string): string {

        console.log(input.charAt(0).toUpperCase() + input.slice(1));
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    // static sanitizeObject(req: Request, res: Response) {
    //     const body = req.body;


    // }
}