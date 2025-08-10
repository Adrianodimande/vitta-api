import { NextFunction, Request, Response } from "express";
import { Validations } from "./validations";

export class ValidationClinic {
  static async validationCreateClinic(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { name, email, phone, address } = await request.body;

    Validations.multiValidations([
      () => Validations.minLength(name, 3, "Nome"),

      () => Validations.isEmail(email, "Email"),
      () => Validations.minLength(phone, 5, "Senha"),
      () => Validations.minLength(address, 10, "Endereco"),

    ]);
    next();
  }
}
