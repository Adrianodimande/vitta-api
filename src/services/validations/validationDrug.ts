import { NextFunction, Request, Response } from "express";
import { Validations } from "./validations";

export class ValidationDrug {
  static async validationCreateDrug(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { user_id, name, date_start, date_end, observation } = await request.body;

    Validations.multiValidations([
      () => Validations.minLength(name, 3, "Nome"),
      () => Validations.isNumber(user_id, "usuario"),
      () => Validations.minLength(observation, 10, "observacao")
    ]);
    next();
  }
}
