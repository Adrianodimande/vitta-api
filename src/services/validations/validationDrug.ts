import { NextFunction, Request, Response } from "express";
import { Validations } from "./validations";

export class ValidationDrug {
  static async validationDrug(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { user_id, name, date_start, date_end, observation } = await request.body;
    Validations.multiValidations([

      () => { if (name !== undefined) { Validations.minLength(name, 3, "Nome"); } },

      () => { if (user_id !== undefined) { Validations.isNumber(user_id, "usuario"); } },
      () => { if (date_start !== undefined) { Validations.notEmpty(date_start, 'data inicio'); } },
      () => { if (date_end !== undefined) { Validations.notEmpty(date_end, 'data fim'); } },
      () => { if (observation !== undefined) { Validations.minLength(observation, 10, "observacao"); } }

    ]);
    next();
  }
}
