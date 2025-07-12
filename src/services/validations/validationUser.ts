import { NextFunction, Request, Response } from "express";
import { Validations } from "./validations";

export class ValidationUser {
  static async validationCreateUser(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { name, email, password } = await request.body;

    Validations.multiValidations([
      () => Validations.minLength(name, 5, "Nome"),

      () => Validations.isEmail(email, "Email"),
      () => Validations.minLength(password, 5, "Senha"),

    ]);
    next();
  }
}
