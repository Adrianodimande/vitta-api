import { NextFunction, Request, Response } from "express";
import { Validations } from "./validations";

export class ValidationTimeDrug {
  static async validationTimeDrug(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { drug_id, time } = await request.body;
    Validations.multiValidations([


      () => { if (drug_id !== undefined) { Validations.isNumber(drug_id, "Comprimido"); } },
      () => { if (time !== undefined) { Validations.notEmpty(time, 'hora '); } },


    ]);
    next();
  }
}
