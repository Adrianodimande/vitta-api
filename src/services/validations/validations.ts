import { HttpResponse } from "../../server/httpResponse";
import { STATUS409 } from "../../settings/constants/constStatusCode";


export class Validations {
  // Verifica se está vazio ou nulo
  static notEmpty(value: string, fieldName: string = "Campo") {
    if (!value || value.trim().length === 0) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} é obrigatório.`,
        []
      );
    }
  }
  static Empty(value: string, fieldName: string = "Campo") {
    if (value) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} nao pode ser alterado entre em contacto com o assistencia.`,
        []
      );
    }
  }

  // Verifica se é um email válido
  static isEmail(value: string, fieldName: string = "Email") {
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(value)) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} deve ser um e-mail válido.`,
        []
      );
    }
  }

  // Verifica o tamanho mínimo
  static minLength(value: string, min: number, fieldName: string = "Campo") {
    if (value.length < min) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} deve ter no mínimo ${min} caracteres.`,
        []
      );
    }
  }

  // Verifica o tamanho máximo
  static maxLength(value: string, max: number, fieldName: string = "Campo") {
    if (value.length > max) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} deve ter no máximo ${max} caracteres.`,
        []
      );
    }
  }

  // Verifica se é número
  static isNumber(value: any, fieldName: string = "Campo") {
    if (isNaN(value)) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} deve ser numérico.`,
        []
      );
    }
  }

  // Verifica número de telefone simples (exemplo básico)
  static isPhone(value: string, fieldName: string = "Telefone") {
    const regex = /^[0-9]{8,15}$/;
    if (!regex.test(value)) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} deve conter um número de telefone válido.`,
        []
      );
    }
  }

  // Verifica se é um dos valores permitidos
  static isInEnum(
    value: string,
    validValues: string[],
    fieldName: string = "Campo"
  ) {
    if (!validValues.includes(value)) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} deve ser um dos seguintes valores: ${validValues.join(
          ", "
        )}.`,
        []
      );
    }
  }

  // Verifica se dois valores são iguais (ex: confirmação de senha)
  static isEqual(value1: any, value2: any, fieldName: string = "Campo") {
    if (value1 !== value2) {
      throw new HttpResponse(
        STATUS409,
        true,
        `O campo ${fieldName} não coincide.`,
        []
      );
    }
  }

  static multiValidations(validations: (() => void)[]) {
    for (const validate of validations) {
      validate();
    }
    return true;
  }
}
