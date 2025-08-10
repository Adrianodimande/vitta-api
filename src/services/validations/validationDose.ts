import { NextFunction, Request, Response } from "express";
import { Validations } from "./validations";

export class ValidationDose {
  static async validationDose(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { drug_id, date, time, status } = await request.body;
    Validations.multiValidations([


      () => { if (drug_id !== undefined) { Validations.isNumber(drug_id, "Comprimido"); } },
      () => { if (date !== undefined) { Validations.notEmpty(date, 'data '); } },
      () => { if (time !== undefined) { Validations.notEmpty(time, 'hora'); } },
      () => { if (status !== undefined) { Validations.minLength(status, 3, "status"); } }

    ]);
    next();
  }
}
